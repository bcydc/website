"use client";

import Program from "../components/Program";

import { Gallery } from "react-grid-gallery";

import { useLightbox } from "@/hooks/useLightbox";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function StudyMeets() {
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

  const {
    currentImage,
    nextImage,
    prevImage,
    handleClick,
    handleClose,
    handleMovePrev,
    handleMoveNext,
    imgLoad,
  } = useLightbox(images);

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
        onClick={handleClick}
      />

      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.src}
          nextSrc={nextImage.src}
          prevSrc={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          onImageLoad={imgLoad}
          imagePadding={150}
          animationDuration={200}
          animationOnKeyInput={true}
        />
      )}
    </Program>
  );
}
