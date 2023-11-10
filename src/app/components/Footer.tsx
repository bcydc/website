import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-4 flex w-11/12 items-center justify-between border-t border-white border-opacity-20 py-4 md:w-8/12 md:py-8">
      <p className="text-sm text-white md:text-xl">
        british columbia youth developer collective
      </p>
      <div className="flex items-center gap-3">
        <a href="https://discord.bcydc.ca/" target="_blank" rel="noreferrer">
          <Image
            src="/icons/discord.svg"
            className="opacity-75 transition duration-300 hover:opacity-100"
            width={28}
            height={28}
            alt="Discord"
          />
        </a>
        <a href="https://instagram.com/bcydc" target="_blank" rel="noreferrer">
          <Image
            src="/icons/instagram.svg"
            className="opacity-75 transition duration-300 hover:opacity-100"
            width={24}
            height={24}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}
