"use client";

import Program from "../components/Program";

import { Gallery } from "react-grid-gallery";

import { ThumbnailImageProps } from "react-grid-gallery";

// import { useLightbox } from "@/hooks/useLightbox";

// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

const HoverImage = (props: ThumbnailImageProps) => {
  const { src, alt, title, style } = props.imageProps;

  return (
    <img
      {...props.imageProps}
      className={`block h-auto w-full cursor-pointer transition-transform duration-300 hover:scale-105`}
      alt={alt}
      title={title || ""}
      style={style}
    />
  );
};

export default function BobaDrops() {
  const images = [
    {
      src: "/images/boba-drops-2025/1.jpg",
      width: 1920,
      height: 1080,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2025/2.jpg",
      width: 1920,
      height: 1080,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2025/3.jpg",
      width: 1920,
      height: 1080,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2025/4.jpg",
      width: 1920,
      height: 1080,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2025/5.jpg",
      width: 1920,
      height: 1080,
      alt: "Students working on their websites",
    },
    {
      src: "/images/boba-drops-2025/6.jpg",
      width: 1920,
      height: 1080,
      alt: "Students working on their websites",
    },
  ];

  const thumbnails = [
    {
      src: "/images/boba-drops-2025/web1.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://jaxfry.github.io/Personal-Website/",
    },
    {
      src: "/images/boba-drops-2025/web2.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "http://harryjamespotter1.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web3.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://noga-levy.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web4.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "http://vi707070079.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web5.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "http://teledobby.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web6.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://theonesomebodey.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web7.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "http://nicole2528.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web8.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://playb0ifarti.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web9.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://fengyuan66.github.io/bobawebsitev0",
    },
    {
      src: "/images/boba-drops-2025/web10.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://payamaroufi.xyz/hackpiano-website/",
    },
    {
      src: "/images/boba-drops-2025/web11.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://itxwi.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web12.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://username314159.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web13.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://miguella297.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web14.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://penguin-awsome.github.io/penguin-awesome.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web15.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://cameo-5958.github.io/",
    },
    {
      src: "/images/boba-drops-2025/web16.png",
      width: 1920,
      height: 1080,
      alt: "A student submitted website",
      link: "https://jamdotjar.github.io/bobadrops/",
    },
  ];

  // const {
  //   currentImage,
  //   nextImage,
  //   prevImage,
  //   handleClick,
  //   handleClose,
  //   handleMovePrev,
  //   handleMoveNext,
  //   imgLoad,
  // } = useLightbox(images);

  return (
    <Program
      name="Boba Drops"
      description="Boba Drops 2025 is a free website workshop! Any student who submits a website will receive a free bubble tea from Coco's. Sponsored by Hack Club!"
      meta={{
        when: "Saturday, July 5th, 2025",
        where: "Bob-Prittie Metrotown Library",
        who: "Any high school student in British Columbia",
        prize: "Free Bubble Tea!",
      }}
      banner="boba-drops-2025.svg"
    >
      <div className="absolute left-0 top-0 -z-40 h-full w-screen overflow-hidden bg-[#9F7636] bg-cover" />
      <Gallery
        images={images}
        defaultContainerWidth={1024}
        enableImageSelection={false}
        // onClick={handleClick}
      />

      {/* {!!currentImage && ( */}
        /* @ts-ignore */
        {/* <Lightbox
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
      )} */}

      <h1 className="text-center text-3xl font-bold text-white">
        Website Gallery
      </h1>
      <p className="text-lg text-white">
        View the websites our participants submitted!
      </p>
      <Gallery
        images={thumbnails}
        thumbnailImageComponent={HoverImage}
        defaultContainerWidth={1024}
        enableImageSelection={false}
        onClick={(index, item) => window.open(item.link, "_blank")?.focus()}
      />
    </Program>
  );
}
