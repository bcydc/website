"use client";
import { useState, useEffect } from "react";

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

export default function YvrHacks() {
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
    document.documentElement.style.backgroundColor = "#0384C7";
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const imageFiles: Image[] = [];

    imageFiles.push({
      src: `/images/yvrhacks/group.jpg`,
      width: 1000,
      height: 1000,
      alt: "Group photo from yvrHacks",
      isLoaded: false,
    });

    for (let i = 1; i <= 105; i++) {
      imageFiles.push({
        src: `/images/yvrhacks/${i}.jpg`,
        width: 1000,
        height: 1000,
        alt: "Students working at yvrHacks",
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
      name="yvrHacks 2024"
      description="Welcome to British Columbia's biggest high school hackathon! yvrHacks is a beginner-friendly hackathon for high school students in Vancouver–and is the perfect place to collaborate, learn, and build something cool, with prizes for the top submissions! Get ready for 8 hours of coding, workshops, free meals, many prizes, and lots of fun!

The hackathon took place at the Vancouver Independent School for Science and Technology (VISST) at 1490 W Broadway, Vancouver!"
      meta={{
        when: "Sunday, September 29th, 2024",
        where:
          "Vancouver Independent School for Science and Technology (VISST)",
        who: "Any high school student in British Columbia",
        prize: "$4000+ in cash, subscriptions and swag!",
      }}
      banner="yvrhacks.svg"
    >
      <a href="https://hcb.hackclub.com/yvrhacks" target="_blank">
        <p className="text-sm text-white underline">See our finances!</p>
      </a>
      <div className="w-full rounded bg-black bg-opacity-10 p-4">
        <p className="inline text-white">
          You can learn more about yvrHacks on the{" "}
          <a
            href="https://yvrhacks.bcydc.ca/"
            target="_blank"
            className="underline"
          >
            yvrHacks website
          </a>{" "}
          and see submitted projects on the{" "}
          <a
            target="_blank"
            href="https://yvrhacks.devpost.com/"
            className="underline"
          >
            Devpost
          </a>
          !
        </p>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden bg-[#0384C7] bg-cover" />
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
