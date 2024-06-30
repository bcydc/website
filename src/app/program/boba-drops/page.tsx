"use client";

import Program from "../components/Program";

import { Gallery } from "react-grid-gallery";

export default function BobaDrops() {
  const images = [
    {
      src: "/images/boba-drops/1.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/2.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/3.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/4.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/5.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/6.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/16.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/7.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/8.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/14.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/9.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/18.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/10.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/11.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/12.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/13.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },

    {
      src: "/images/boba-drops/15.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },

    {
      src: "/images/boba-drops/17.jpg",
      width: 1920,
      height: 1280,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/20.jpg",
      width: 1280,
      height: 1920,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops/19.jpg",
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
      banner="boba-drops.svg"
    >
      <div className="absolute left-0 top-0 -z-40 h-full w-screen overflow-hidden bg-[#9F7636] bg-cover" />
      <Gallery
        images={images}
        defaultContainerWidth={1024}
        enableImageSelection={false}
      />
    </Program>
  );
}
