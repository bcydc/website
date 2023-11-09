import Image from "next/image";

import LandingBackground from "./components/LandingBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <LandingBackground />
      <div className="z-10 flex w-10/12 flex-col py-16 md:w-8/12 md:flex-row md:py-48">
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
          <div className="from-g-700 to-g-800 flex items-center rounded-lg bg-gradient-to-r px-4 py-1.5 md:px-6 md:py-2">
            <p className="text-md text-white md:text-xl">join now</p>
          </div>
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
      <div className="bg-dark-700 z-10 flex w-full flex-row justify-center py-4 md:py-8">
        <div className="flex w-10/12 flex-row justify-between md:w-8/12">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              draggable={false}
            />
            <h1 className="text-xl font-bold text-white md:text-4xl">bcydc</h1>
          </div>
          <div className="flex items-center gap-x-5">
            <p className="text-md text-white md:text-2xl">clubs</p>
            <p className="text-md text-white md:text-2xl">mentors</p>
            <div className="from-g-700 to-g-800 hidden items-center rounded-md bg-gradient-to-r px-5 py-2 md:flex">
              <p className="whitespace-nowrap text-xs text-white md:text-xl">
                join now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
