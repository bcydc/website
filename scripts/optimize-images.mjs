import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/*
  Usage:
    - node scripts/optimize-images.mjs file1.jpg file2.png ...
      (behaves like the original script: overwrites files only if optimized is smaller)
    - node scripts/optimize-images.mjs
      (no args) -> operates on ./scripts/images/Daydream and writes outputs into
      ./scripts/images/Daydream-optimized, renaming files sequentially starting at 7.jpg
*/

const argv = process.argv.slice(2);

const isImage = (name) => /\.(jpe?g|png)$/i.test(name);

const optimizeBuffer = async (buf, ext) => {
  let pipeline = sharp(buf, { failOn: "none" });

  // resize so the largest dimension is at most 2048px, without upscaling
  pipeline = pipeline.resize({
    width: 2048,
    height: 2048,
    fit: "inside",
    withoutEnlargement: true
  });

  // Always output as JPEG with optimized quality settings
pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true, chromaSubsampling: '4:2:0' });

  const out = await pipeline.toBuffer();
  return out;
};

// Original behavior: optimize individual files in-place but only overwrite when smaller
const optimizeInPlace = async (file) => {
  try {
    const buf = await fs.readFile(file);
    if (buf.length < 5 * 1024) {
      console.log(`skip tiny: ${file}`);
      return;
    }

    const ext = path.extname(file).slice(1).toLowerCase();
    const outBuf = await optimizeBuffer(buf, ext);

    if (outBuf.length < buf.length) {
      await fs.writeFile(file, outBuf);
      console.log(`optimized: ${file} (${buf.length} → ${outBuf.length} bytes)`);
    } else {
      console.log(`kept: ${file} (no gain)`);
    }
  } catch (e) {
    console.warn(`skip ${file}: ${e.message}`);
  }
};

// Folder-mode behavior: read all images from Daydream, write into Daydream-optimized
// Renumber starting at 7 (7.jpg, 8.jpg, ...)
const optimizeFolderToDir = async (srcDir, outDir, startAt = 7) => {
  try {
    await fs.mkdir(outDir, { recursive: true });
    let files = await fs.readdir(srcDir);
    files = files.filter(isImage);

    // numeric sort: try to extract first integer; fallback to locale compare
    files.sort((a, b) => {
      const na = parseInt((a.match(/(\d+)/) || [])[0] ?? "NaN", 10);
      const nb = parseInt((b.match(/(\d+)/) || [])[0] ?? "NaN", 10);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
      if (!Number.isNaN(na)) return -1;
      if (!Number.isNaN(nb)) return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    });

    // process sequentially so we can show progress
    const total = files.length;
    for (let idx = 0; idx < total; idx++) {
      const file = files[idx];
      const inPath = path.join(srcDir, file);
      const ext = path.extname(file).slice(1).toLowerCase();
      const newName = `${startAt + idx}.jpg`;
      const outPath = path.join(outDir, newName);

      try {
        const buf = await fs.readFile(inPath);

        // For very small files, just copy across (and keep a log)
        if (buf.length < 5 * 1024) {
          await fs.writeFile(outPath, buf);
          console.log(`[${idx + 1}/${total}] copied (tiny): ${inPath} → ${outPath}`);
          continue;
        }

        const outBuf = await optimizeBuffer(buf, ext);

        if (outBuf.length < buf.length) {
          await fs.writeFile(outPath, outBuf);
          console.log(
            `[${idx + 1}/${total}] optimized: ${inPath} → ${outPath} (${buf.length} → ${outBuf.length} bytes)`
          );
        } else {
          // no size gain: copy original so the optimized folder still contains the image
          await fs.writeFile(outPath, buf);
          console.log(`[${idx + 1}/${total}] kept (copied original): ${inPath} → ${outPath} (no gain)`);
        }
      } catch (e) {
        console.warn(`[${idx + 1}/${total}] skip ${inPath}: ${e.message}`);
      }
    }

    console.log(`done: processed ${files.length} images → ${outDir}`);
  } catch (e) {
    console.error(`folder processing failed: ${e.message}`);
    process.exitCode = 1;
  }
};

if (argv.length > 0) {
  // preserve original CLI behavior (in-place optimization)
  await Promise.all(argv.map(optimizeInPlace));
} else {
  // operate on ./scripts/images/Daydream -> ./scripts/images/Daydream-optimized
  const srcDir = path.join(process.cwd(), "scripts", "images", "Daydream");
  const outDir = path.join(process.cwd(), "scripts", "images", "Daydream-optimized");
  await optimizeFolderToDir(srcDir, outDir, 7);
}
