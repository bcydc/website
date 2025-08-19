import fs from "node:fs/promises";
import sharp from "sharp";

const files = process.argv.slice(2);

const optimize = async (file) => {
    try {
        const buf = await fs.readFile(file);
        if (buf.length < 5 * 1024) return; // skip tiny files

        const ext = file.toLowerCase().split(".").pop();
        let pipeline = sharp(buf, { failOn: "none" });

        if (ext === "png") {
            // lossless compression + palette reduction
            pipeline = pipeline.png({ compressionLevel: 7, palette: true });
        } else {
            // jpg/jpeg: visually lossless range; tweak to taste
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        }

        const out = await pipeline.toBuffer();

        // Only overwrite if smaller (safety)
        if (out.length < buf.length) {
            await fs.writeFile(file, out);
            console.log(`optimized: ${file} (${buf.length} → ${out.length} bytes)`);
        } else {
            console.log(`kept: ${file} (no gain)`);
        }
    } catch (e) {
        console.warn(`skip ${file}: ${e.message}`);
    }
};

await Promise.all(files.map(optimize));
