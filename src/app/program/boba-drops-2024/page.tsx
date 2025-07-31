"use client";

import Program from "../components/Program";

import { RowsPhotoAlbum } from "react-photo-album";
import type { Photo } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import "yet-another-react-lightbox/styles.css";

export default function BobaDrops2024() {
  const {
    index,
    open,
    clickHandler,
    close,
    carousel,
    controller
  } = useLightbox();

  const images: Photo[] = [
    {
      src: "/images/boba-drops-2024/1.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/2.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/3.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/4.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/5.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/6.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/16.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/7.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/8.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/14.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/9.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/18.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/10.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/11.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/12.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/13.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },

    {
      src: "/images/boba-drops-2024/15.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },

    {
      src: "/images/boba-drops-2024/17.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/20.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2024/19.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
  ];

  return (
    <Program
      name="Boba Drops"
      description="Boba Drops 2024 is a free website-making workshop! We will teach you how to make a simple website with HTML/CSS, and all students who ship a website get a free bubble tea from CoCo Metrotown!! All you have to do is make a simple static website with HTML/CSS and deploy it on GitHub to be eligible :) Sponsored by Hack Club"
      meta={{
        when: "Monday, June 24th, 2024",
        where: "Bob-Prittie Metrotown Library",
        who: "Any high school student in British Columbia",
        prize: "Free Bubble Tea",
      }}
      banner="boba-drops-2024.svg"
    >
      <div className="absolute left-0 top-0 -z-40 h-full w-screen overflow-hidden bg-[#9F7636] bg-cover" />

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
