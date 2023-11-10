import Image from "next/image";

export default function Vision() {
  return (
    <div className="relative flex w-11/12 flex-row justify-between pt-20 md:w-8/12 md:pt-32">
      <div className="flex max-w-lg flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            What is BCYDC?
          </h2>
          <p className="text-white md:text-lg md:font-extralight">
            We are a collective of students from across British Columbia who
            have a shared passion for computer science, software development,
            and technology. We are working towards creating a connected
            community for all young developers to learn, network, and grow;
            essentially creating more opportunities for passionate youth to
            excel, and improving the computer science field in all high schools
            around BC.
          </p>
          <p className="text-white md:text-lg md:font-extralight">
            We hope to connect all computer science, programming and robotics
            clubs to create a network of student developers, mentors and
            teachers across the province.
          </p>
        </div>
      </div>
      <div className="absolute -right-16 top-20 z-20 hidden h-[440px] w-[550px] md:block">
        <Image src="/map.svg" alt="Map of British Columbia" fill={true} />
      </div>
    </div>
  );
}
