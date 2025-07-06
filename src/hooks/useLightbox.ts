// "use client";
// import { useState } from "react";

// export function useLightbox<T extends { src: string }>(images: T[]) {
//   const [index, setIndex] = useState(-1);

//   const currentImage = images[index];
//   const nextImage = images[(index + 1) % images.length] || currentImage;
//   const prevImage = images[(index + images.length - 1) % images.length] || currentImage;

//   const handleClick = (clickedIndex: number) => setIndex(clickedIndex);
//   const handleClose = () => setIndex(-1);
//   const handleMovePrev = () => setIndex((index + images.length - 1) % images.length);
//   const handleMoveNext = () => setIndex((index + 1) % images.length);

//   const imgLoad = () => window.dispatchEvent(new Event("resize")); // Goofy ahh fix

//   return {
//     index,
//     setIndex,
//     currentImage,
//     nextImage,
//     prevImage,
//     handleClick,
//     handleClose,
//     handleMovePrev,
//     handleMoveNext,
//     imgLoad,
//   };
// }