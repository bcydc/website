"use client";

import { useEffect, useState } from "react";
import { useEffect as useEffectClient } from "react";

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

export default function Daydream() {
  const [images, setImages] = useState<Image[]>([]);
  const {
    index,
    open,
    clickHandler,
    close,
    carousel,
    controller
  } = useLightbox();

  useEffectClient(() => {
    document.documentElement.style.backgroundColor = "#0e655c";
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const imageFiles: Image[] = [];

    // imageFiles.push({
    //   src: `/images/daydream/group.jpg`,
    //   width: 1000,
    //   height: 1000,
    //   alt: "Group photo from Daydream",
    //   isLoaded: false,
    // });

    for (let i = 1; i <= 292; i++) {
      imageFiles.push({
        src: `/images/daydream/${i}.jpg`,
        width: 1000,
        height: 1000,
        alt: "Daydream hackathon event",
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
      name="Daydream Vancouver 2025"
      description="Daydream was British Columbia's biggest youth hackathon! On Saturday, September 27th, 120 students came together to build the games of their dreams.
The hackathon took place at the BCIT Downtown Campus, at 555 Seymour St, Vancouver."
      meta={{
        when: "Saturday, September 27th, 2025",
        where:
          "BCIT Downtown Campus",
        who: "Any high school student in British Columbia",
        prize: "Assorted prizes, t-shirts, and more!",
      }}
      banner="daydream.svg"
    >
      <a href="https://hcb.hackclub.com/daydream-vancouver" target="_blank">
        <p className="text-sm text-white underline">See our finances!</p>
      </a>
      <p className="text-lg text-white">A special thanks to <a href="https://www.bcit.ca/computing-academic-studies/computing/" target="_blank" rel="noopener noreferrer" className="underline">BCIT Computing</a> for helping us make this event possible by donating their space!</p>
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden bg-[#56aae3] bg-cover" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="bg-black/10 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center mb-6 sm:mb-8 text-white">Thank You to Our Sponsors!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8">
            <a href="https://bcit.ca" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/bcit.svg" alt="BCIT" className="h-full min-h-48 max-h-56 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200 mx-auto sm:mx-0" /></a>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center [&>a]:block">
              <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/hackclub-flag.svg" alt="Hack Club" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://tks.world" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/tks.png" alt="TKS" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://steamoji.com" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/steamoji-no-bg.svg" alt="Steamoji" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://www.stgeorges.bc.ca" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/st-georges-school.png" alt="St Georges School" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://buttondown.email" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/buttondown.svg" alt="Buttondown" className="min-w-[100px] max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://linusmediagroup.com" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/LTT Circle Logo.png" alt="LTT" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://jukeboxprint.com" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/jukebox-logo.svg" alt="Jukebox" className="min-w-[150px] max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/code-crafters.png" alt="Code Crafters" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
              <a href="https://getmoodfit.com" target="_blank" rel="noopener noreferrer"><img src="/images/daydream/sponsors/moodfit.png" alt="Moodfit" className="max-h-12 sm:max-h-16 w-auto hover:brightness-125 hover:scale-105 transition-all duration-200" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4">
        <RowsPhotoAlbum
          photos={images}
          targetRowHeight={200}
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
