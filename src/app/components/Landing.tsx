import Image from "next/image";
import { Fragment } from "react";

export default function Landing() {
  return (
    <div className="flex w-full items-center justify-between py-12 md:py-20">
      <div className="flex w-full flex-grow flex-col items-start justify-start gap-3">
        <h1 className="max-w-md text-3xl font-bold text-w-300 md:text-4xl xl:max-w-xl">
          <span className="inline-block">British Columbia&apos;s</span>{" "}
          <span className="inline-block">Largest High School</span>{" "}
          <span className="inline-block">Developer Community</span>
        </h1>
        <h6 className="text-xs text-w-500 md:max-w-lg md:text-sm xl:max-w-xl xl:text-base">
          <span className="inline-block">
            We are a collective of over 300 high school students with a
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
          className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white px-6 py-2 duration-300 hover:scale-[1.03]"
        >
          <div className="relative h-4 w-4 md:h-5 md:w-5">
            <Image alt="Discord Logo" src="/icons/discord.svg" fill={true} />
          </div>
          <p className="font-medium text-g-800 md:text-lg">Join our Discord</p>
        </a>
      </div>
      <div className="flex w-11/12 flex-col items-center justify-center">
        <img src="/images/banner.png" className="w-full rounded-md" />
      </div>
    </div>
  );
}
