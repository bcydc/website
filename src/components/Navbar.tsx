import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center w-full py-10 justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-6 xl:w-8 h-6 xl:h-8">
          <Image src="/icons/logo.svg" alt="Logo" fill={true} />
        </div>
        <h1 className="text-xl xl:text-3xl text-white font-medium">
          British Columbia Youth Developer Collective
        </h1>
      </div>
      <div className="flex items-center gap-3 xl:gap-6">
        <h1 className="text-lg xl:text-2xl text-white">Mentors</h1>
        <h1 className="text-lg xl:text-2xl text-white">Clubs</h1>
        <h1 className="text-lg xl:text-2xl text-white">Events</h1>
        <h1 className="text-lg xl:text-2xl text-white">Sponsors</h1>
      </div>
    </div>
  );
}
