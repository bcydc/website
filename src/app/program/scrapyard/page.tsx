"use client";

import { useEffect, useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import type { Photo } from "react-photo-album";
import "react-photo-album/rows.css";

import Program from "../components/Program";

import Lightbox from "yet-another-react-lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import "yet-another-react-lightbox/styles.css";

type Image = {
  src: string;
  width: number;
  height: number;
  alt: string;
  isLoaded?: boolean;
};

export default function Scrapyard() {
  const [images, setImages] = useState<Image[]>([]);
  const {
    index,
    open,
    clickHandler,
    close,
    carousel,
    controller
  } = useLightbox();

  useEffect(() => {
    const imageFiles: Image[] = [];

    imageFiles.push({
      src: `/images/scrapyard/group.jpg`,
      width: 1000,
      height: 1000,
      alt: "Group photo from Scrapyard",
      isLoaded: false,
    });

    for (let i = 1; i <= 220; i++) {
      imageFiles.push({
        src: `/images/scrapyard/${i}.jpg`,
        width: 1000,
        height: 1000,
        alt: "Scrapyard hackathon event",
        isLoaded: false,
      });
    }

    const firstImage = imageFiles[0];
    const restImages = imageFiles.slice(1);
    restImages.sort(() => Math.random() - 0.5);
    const shuffledImages = [firstImage, ...restImages];

    const loadedImages = shuffledImages.map((img) => {
      const image = new Image();
      image.onload = () => {
        setImages((prevImages) =>
          prevImages.map((prevImg) =>
            prevImg.src === img.src
              ? {
                ...prevImg,
                width: image.width,
                height: image.height,
                isLoaded: true,
              }
              : prevImg,
          ),
        );
      };
      image.onerror = () => {
        setImages((prevImages) =>
          prevImages.filter((prevImg) => prevImg.src !== img.src),
        );
      };
      image.src = img.src;
      return img;
    });

    setImages(loadedImages);
  }, []);

  const displayImages = images.filter((img) => img.isLoaded);

  return (
    <Program
      name="Scrapyard Vancouver 2025"
      description="Welcome to British Columbia's biggest upcoming youth hackathon! Scrapyard is a hackathon for high schoolers in the lower mainland, where you can make the stupidest things you can think of! Anything, from a lamp that flashes faster the slower you type to those ideas you wouldn't dare to consider useful goes at Scrapyard. No matter your experience, Scrapyard Vancouver need you and your scrappy ideas! 
The hackathon took place at the Vancouver Independent School for Science and Technology (VISST) at 1490 W Broadway, Vancouver!"
      meta={{
        when: "Saturday, March 15th, 2025",
        where:
          "Vancouver Independent School for Science and Technology (VISST)",
        who: "Any high school student in British Columbia",
        prize: "Assorted prizes, t-shirts, and more!",
      }}
      banner="scrapyard.svg"
    >
      <a href="https://hcb.hackclub.com/scrapyard-vancouver" target="_blank">
        <p className="text-sm text-white underline">See our finances!</p>
      </a>
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden bg-[#0e655c] bg-cover" />
      <div className="relative z-10 mt-8 w-full max-w-8xl mx-auto px-4">
        <RowsPhotoAlbum
          photos={images}
          targetRowHeight={150}
          spacing={5}
          onClick={({ index }) => clickHandler(index)}
        />
      </div>

      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.75)" } }}
        open={open}
        close={close}
        slides={images}
        index={index}
        carousel={carousel}
        controller={controller}
      />
    </Program>
  );
}
