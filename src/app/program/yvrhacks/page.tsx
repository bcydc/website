"use client";
import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";

import Program from "../components/Program";

type Image = {
  src: string;
  width: number;
  height: number;
  alt: string;
  isLoaded?: boolean;
};

export default function YvrHacks() {
  const [images, setImages] = useState<Image[]>([]);

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

The hackathon will take place at the Vancouver Independent School for Science and Technology (VISST) at 1490 W Broadway, Vancouver! This hackathon is only open to students who registered on our website prior to the registration deadline."
      meta={{
        when: "Sunday, September 29th, 2024",
        where:
          "Vancouver Independent School for Science and Technology (VISST)",
        who: "Any high school student in British Columbia",
        prize: "$4000+ in cash, subscriptions and swag!",
      }}
      banner="yvrhacks.svg"
    >
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
      {displayImages.length > 0 && (
        <Gallery
          images={displayImages}
          defaultContainerWidth={1024}
          enableImageSelection={false}
        />
      )}
    </Program>
  );
}
