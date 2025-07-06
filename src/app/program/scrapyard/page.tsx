"use client";

import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Program from "../components/Program";

import Lightbox from "yet-another-react-lightbox";
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
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const clickHandler = (i: number) => setIndex(i);

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
The hackathon will take place at the Vancouver Independent School for Science and Technology (VISST) at 1490 W Broadway, Vancouver! This hackathon is only open to students who registered on our website prior to the registration deadline."
      meta={{
        when: "Saturday, March 15th, 2025",
        where:
          "Vancouver Independent School for Science and Technology (VISST)",
        who: "Any high school student in British Columbia",
        prize: "Assorted prizes, t-shirts, and more!",
      }}
      banner="scrapyard.png"
    >
      <a href="https://hcb.hackclub.com/scrapyard-vancouver" target="_blank">
        <p className="text-sm text-white underline">See our finances!</p>
      </a>
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden bg-[#0e655c] bg-cover" />
      {displayImages.length > 0 && (
        <Gallery
          images={displayImages}
          defaultContainerWidth={1024}
          enableImageSelection={false}
          onClick={clickHandler}
        />
      )}
      <Lightbox
        open={open}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
      />
    </Program>
  );
}
