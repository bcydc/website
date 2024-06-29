import Image from "next/image";
import { Fragment } from "react";

export default function Landing() {
  return (
    <div className="md:w-[1024px] md:max-w-[1024px]">
      <div className="flex w-full py-12 md:py-28 justify-start">
        <div className="flex flex-col gap-3 items-start">
          <p className="font-semibold text-opacity-60 text-2xl xl:text-3xl text-white">
            Welcome to BCYDC
          </p>
          <h1 className="text-3xl md:text-4xl text-w-300 font-bold max-w-md xl:max-w-xl">
            <span className="inline-block">British Columbia&apos;s</span>{" "}
            <span className="inline-block">Largest High School</span>{" "}
            <span className="inline-block">Developer Community</span>
          </h1>
          <h6 className="text-w-500 text-xs md:text-sm xl:text-base md:max-w-lg xl:max-w-xl">
            <span className="inline-block">
              We are a collective of over 180 high school students with a
            </span>{" "}
            <span className="inline-block">
              shared passion for computer science, software development,
            </span>{" "}
            <span className="inline-block">
              robotics, and technology. Join us for hackathons,
            </span>{" "}
            <span className="inline-block">
              competitions, mentorship, and more!
            </span>
          </h6>
          <a
            href="https://discord.bcydc.ca/"
            target="_blank"
            className="overflow-hidden relative select-none flex items-center px-6 gap-2 rounded-full py-2 bg-gradient-to-r from-g-700 to-g-500"
          >
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300" />
            <div className="relative w-4 md:w-5 h-4 md:h-5">
              <Image alt="Discord Logo" src="/icons/discord.svg" fill={true} />
            </div>
            <p className="md:text-lg text-white font-medium">
              Join our Discord
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
