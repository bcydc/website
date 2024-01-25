import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Image
        src="/backgrounds/home.svg"
        fill={true}
        alt="Background Image"
        className="object-cover hidden md:inline -z-10 min-h-[calc(100vw*0.6)]"
      />
      <Image
        src="/backgrounds/home-mobile.svg"
        fill={true}
        alt="Background Image"
        className="object-cover inline md:hidden -z-10 min-h-[calc(100vw*0.6)]"
      />
      <div className="flex w-full py-32 md:py-10 xl:py-28 justify-start">
        <div className="flex flex-col gap-3 xl:gap-6 items-start">
          <p className="font-semibold text-opacity-60 text-2xl xl:text-3xl text-white">
            Welcome to BCYDC
          </p>
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-w-300 font-bold max-w-md xl:max-w-2xl md:leading-[2.6rem] xl:leading-[4.2rem]">
            <span className="inline-block">British Columbia&apos;s</span>{" "}
            <span className="inline-block">Largest High School</span>{" "}
            <span className="inline-block">Developer Community</span>
          </h1>
          <h6 className="text-w-500 text-xs md:text-sm xl:text-xl md:max-w-lg xl:max-w-2xl">
            <span className="inline-block">
              We are a collective of over 120 high school students with a
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
            className="overflow-hidden relative select-none flex items-center px-6 xl:px-10 gap-2 xl:gap-2.5 rounded-full py-2 xl:py-3 bg-gradient-to-r from-g-700 to-g-500"
          >
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300" />
            <div className="relative w-5 xl:w-7 h-5 xl:h-7">
              <Image alt="Discord Logo" src="/icons/discord.svg" fill={true} />
            </div>
            <p className="text-base xl:text-2xl text-white font-medium">
              Join our Discord
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
