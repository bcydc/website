import Image from "next/image";
import { Fragment } from "react";

export default function Landing() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10 py-12 pt-0 md:flex-row md:gap-0 md:py-20">
      <div className="order-2 flex w-full flex-grow flex-col items-start justify-start gap-3 md:order-1">
        <h1 className="max-w-md text-3xl font-bold text-w-300 md:text-4xl xl:max-w-xl">
          <span className="inline-block">British Columbia&apos;s</span>{" "}
          <span className="inline-block">Largest High School</span>{" "}
          <span className="inline-block">Developer Community</span>
        </h1>
        <h6 className="text-sm text-w-500 md:max-w-lg xl:max-w-xl xl:text-base">
          <span className="md:inline-block">
            We are a collective of over 300 high school students with a
          </span>{" "}
          <span className="md:inline-block">
            shared passion for computer science, software development,
          </span>{" "}
          <span className="md:inline-block">
            robotics, and technology. Join us for hackathons,
          </span>{" "}
          <span className="md:inline-block">
            competitions, mentorship, and more!
          </span>
        </h6>
        <a
          href="https://discord.bcydc.ca/"
          target="_blank"
          className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white px-6 py-2 duration-300 hover:scale-[1.03]"
        >
          <i className="fab fa-discord text-g-800 md:text-lg" />
          <p className="font-medium text-g-800 md:text-lg">Join our Discord</p>
        </a>
        <div className="mt-2 flex flex-row gap-2 md:mt-4">
          <a href="https://scrapyard.bcydc.ca/" target="_blank">
            <p className="text-xs text-white underline">See Scrapyard</p>
          </a>
          <p className="text-xs text-white">x</p>
          <a href="https://hcb.hackclub.com/scrapyard-vancouver" target="_blank">
            <p className="text-xs text-white underline">See our finances</p>
          </a>
        </div>
      </div>
      <div className="order-1 flex w-full flex-col items-center justify-center md:order-2 md:w-11/12">
        <img src="/images/banner.png" className="w-full rounded-md" />
      </div>
    </div>
  );
}
