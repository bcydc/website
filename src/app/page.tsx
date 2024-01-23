import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Image
        src="/backgrounds/home.svg"
        fill={true}
        alt="Background Image"
        className="object-cover -z-10"
      />
      <div className="flex w-full py-32 justify-start">
        <div className="flex flex-col gap-2 items-start">
          <p className="font-semibold text-opacity-60 text-3xl text-white">
            Welcome to BCYDC
          </p>
          <h1 className="text-6xl text-white font-bold max-w-2xl leading-[4.2rem]">
            <span className="inline-block">British Columbia's</span>{" "}
            <span className="inline-block">Largest High School</span>{" "}
            <span className="inline-block">Developer Community</span>
          </h1>
          <h6 className="text-white text-xl max-w-2xl">
            We are a collective of over 120 high school students with a shared
            passion for computer science, software development, robotics, and
            technology. Join us for hackathons, competitions, mentorship, and
            more!
          </h6>
          <a
            href="https://discord.bcydc.ca/"
            target="_blank"
            className="select-none mt-2 flex items-center px-8 gap-2 rounded-full py-3 bg-gradient-to-r from-g-700 to-g-500"
          >
            <Image
              alt="Discord Logo"
              src="/icons/discord.svg"
              width={24}
              height={24}
            />
            <p className="text-xl text-white font-medium">Join our Discord</p>
          </a>
        </div>
      </div>
    </div>
  );
}
