import Image from "next/image";

import LandingBackground from "./components/LandingBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <LandingBackground />
      <div className="z-10 flex w-8/12 py-48">
        <div className="flex flex-col items-start justify-start gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl text-white text-opacity-75">
              british columbia youth developer collective
            </h2>
            <h1 className="max-w-2xl text-6xl font-extrabold text-white">
              <span className="inline-block">BC&apos;s student-led</span>{" "}
              <span className="inline-block">high school dev</span>{" "}
              <span className="inline-block">collective</span>
            </h1>
          </div>
          <h3 className="max-w-lg text-lg text-white">
            hackathons, mentors, guest speakers, perks, jobs, events and many
            more networking opportunities
          </h3>
          <div className="from-g-700 to-g-800 flex items-center rounded-lg bg-gradient-to-r px-6 py-2">
            <p className="text-xl text-white">join now</p>
          </div>
        </div>
        <div className="h-80 w-80"></div>
      </div>
      <div className="bg-dark-700 z-10 flex w-full flex-row justify-center py-8">
        <div className="flex w-8/12 flex-row justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <h1 className="text-4xl font-bold text-white">bcydc</h1>
          </div>
          <div className="flex items-center gap-x-5">
            <p className="text-2xl text-white">clubs</p>
            <p className="text-2xl text-white">mentors</p>
            <div className="from-g-700 to-g-800 flex items-center rounded bg-gradient-to-r px-4 py-1.5">
              <p className="text-xl text-white">join now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
