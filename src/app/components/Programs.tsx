import Program from "./Program";

export default function Programs() {
  const programs = [
    {
      name: "Study Meets",
      image: "study-meets.svg",
      duration: "Weekly",
      complete: false,
    },
    {
      name: "Boba Drops",
      image: "boba-drops.svg",
      duration: "June 2024",
      complete: true,
    },
    {
      name: "Advent of Code",
      image: "advent-of-code.png",
      duration: "December 2023",
      complete: true,
    },
  ];

  return (
    <div className="relative flex flex-col items-center w-screen h-screen px-6">
      <div className="flex flex-col gap-4 md:w-[1024px] md:max-w-[1024px]">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl text-white font-bold">
            Meet like-minded students
          </h1>
          <p className="text-w-300 text-sm md:text-base">
            Join us in events and programs to meet other high school developers
            from around British Columbia
          </p>
        </div>
        <div className="flex flex-col w-full gap-4">
          {programs.map((program, i) => (
            <Program key={i} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}
