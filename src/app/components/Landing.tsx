import Image from "next/image";
import { Fragment } from "react";

import Contributions from "./Contributions";
import LandingBackground from "./LandingBackground";

export default function Landing() {
  return (
    <Fragment>
      <LandingBackground />
      <div className="z-10 flex w-11/12 flex-col pb-20 pt-16 md:w-8/12 md:flex-row md:py-24">
        <div className="flex flex-col items-start justify-start gap-y-2 md:gap-y-4">
          <div className="flex flex-col gap-y-1 md:gap-y-2">
            <h2 className="text-xs text-white text-opacity-75 md:text-xl">
              british columbia youth developer collective
            </h2>
            <h1 className="max-w-2xl text-3xl font-extrabold text-white md:text-6xl">
              <span className="inline-block">BC&apos;s student-led</span>{" "}
              <span className="inline-block">high school dev</span>{" "}
              <span className="inline-block">collective</span>
            </h1>
          </div>
          <h3 className="max-w-lg text-sm text-white md:text-lg">
            hackathons, mentors, guest speakers, perks, jobs, events and many
            more networking opportunities
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.bcydc.ca/"
            className="flex transform items-center rounded-lg bg-gradient-to-r from-g-700 to-g-800 px-4 py-1.5 duration-300 hover:scale-[1.02] md:px-6 md:py-2"
          >
            <p className="text-md text-white md:text-xl">join now</p>
          </a>
        </div>
        <div>
          <Image
            src="/rocket.png"
            className="hidden md:inline"
            alt="Rocket"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col gap-y-1.5 px-1.5 opacity-40 md:gap-y-2 md:px-2">
        <Contributions />
        <Contributions />
        <Contributions />
        <Contributions />
        <Contributions />
        <div className="contribution-gradient absolute right-0 top-0 h-full w-full"></div>
      </div>
    </Fragment>
  );
}
