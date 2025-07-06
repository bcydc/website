import Program from "./Program";

export default function Programs() {
  const programs = [
    {
      name: "Scrapyard Vancouver",
      image: "scrapyard.png",
      href: "/program/scrapyard",
      duration: "March 2025",
      complete: true,
    },
    {
      name: "yvrHacks 2024",
      image: "yvrhacks.svg",
      href: "/program/yvrhacks",
      duration: "September 2024",
      complete: true,
    },
    {
      name: "Community Spotlight",
      image: "community-spotlight.svg",
      href: "/program/community-spotlight",
      duration: "Regularly",
      complete: false,
    },
    {
      name: "Boba Drops",
      image: "boba-drops.svg",
      href: "/program/boba-drops",
      duration: "June 2024",
      complete: true,
    },
    {
      name: "Study Meets",
      image: "study-meets.svg",
      href: "/program/study-meets",
      duration: "Regularly",
      complete: false,
    },
    {
      name: "Advent of Code",
      image: "advent-of-code.png",
      href: "/program/advent-of-code",
      duration: "December 2023",
      complete: true,
    },
    {
      name: "Algorithm Explainers",
      image: "algorithm-explainers.svg",
      href: "/program/algorithm-explainers",
      duration: "Regularly",
      complete: false,
    },
  ];

  return (
    <div className="relative flex h-full w-screen flex-col items-center px-4 py-12 md:py-0">
      <div className="flex flex-col gap-4 md:w-[1024px] md:max-w-[1024px]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Meet like-minded students
          </h1>
          <p className="text-sm text-w-300 md:text-base">
            Join us in events and programs to meet other high school developers
            from around British Columbia
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          {programs.map((program, i) => (
            <Program key={i} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}
