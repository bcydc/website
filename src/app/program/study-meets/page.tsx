"use client";

import Program from "../components/Program";

import { Gallery } from "react-grid-gallery";

import Lightbox from "yet-another-react-lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import "yet-another-react-lightbox/styles.css";

export default function StudyMeets() {
  const {
    index,
    open,
    clickHandler,
    close,
    carousel,
    controller
  } = useLightbox();

  const images = [
    {
      src: "/images/study-meets/1.jpg",
      width: 2164,
      height: 1624,
      alt: "Students working on their projects",
    },
    {
      src: "/images/study-meets/2.jpg",
      width: 1438,
      height: 1916,
      alt: "Students working on their projects",
    },
    {
      src: "/images/study-meets/3.jpg",
      width: 1438,
      height: 1916,
      alt: "Students working on their projects",
    },
    {
      src: "/images/study-meets/4.jpg",
      width: 1438,
      height: 1916,
      alt: "Students working on their projects",
    },
    {
      src: "/images/study-meets/5.jpg",
      width: 2164,
      height: 1624,
      alt: "Students working on their projects",
    },
    {
      src: "/images/study-meets/6.jpg",
      width: 1438,
      height: 1916,
      alt: "Students working on their projects",
    },
    {
      src: "/images/study-meets/7.jpg",
      width: 1438,
      height: 1916,
      alt: "Students working on their projects",
    },
  ];

  return (
    <Program
      name="Study Meets"
      description="We host regular meetups where students can come together to study, work on projects, or attend a workshop. We often provide free light snacks at meetups, and its always a great opportunity to meet new people, make new friends, and work on new projects! Study meets are usually at public libraries or cafes :)"
      meta={{
        when: "Regular (bi-weekly)",
        where: "Libraries & cafes in Metro Vancouver",
        who: "Any high school student in British Columbia",
      }}
      banner="study-meets.svg"
    >
      <Gallery
        images={images}
        defaultContainerWidth={1024}
        enableImageSelection={false}
        onClick={clickHandler}
      />

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
