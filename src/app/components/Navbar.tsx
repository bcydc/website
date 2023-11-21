import Image from "next/image";

export default function Navbar() {
  return (
    <div className="z-10 flex w-full flex-row justify-center py-4 md:py-8">
      <div className="flex w-11/12 flex-row justify-between md:w-8/12">
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://discord.bcydc.ca/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/discord.svg"
                className="opacity-75 transition duration-300 hover:opacity-100"
                width={28}
                height={28}
                alt="Discord"
              />
            </a>
            <a
              href="https://instagram.com/bcydc"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                className="opacity-75 transition duration-300 hover:opacity-100"
                width={24}
                height={24}
                alt="Instagram"
              />
            </a>
          </div>
          {/* <p className="text-md text-white md:text-2xl">clubs</p>
          <p className="text-md text-white md:text-2xl">mentors</p> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.bcydc.ca/"
            className="hidden transform items-center rounded-md bg-gradient-to-r from-g-700 to-g-800 px-5 py-2 duration-300 hover:scale-[1.02] md:flex"
          >
            <p className="whitespace-nowrap text-xs text-white md:text-xl">
              Join now
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
