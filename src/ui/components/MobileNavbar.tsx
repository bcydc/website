"use client";

import Link from "next/link";
import Image from "next/image";

export default function MobileNavbar() {
  return (
    <div className="z-40 flex w-full items-center justify-between py-8 md:hidden">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <Image src="/icons/logo.svg" alt="Logo" fill={true} />
        </div>
        <h1 className="max-w-[200px] text-lg font-semibold leading-tight text-white">
          British Columbia Youth Developer Collective
        </h1>
      </Link>
      <div className="flex items-center gap-3 xl:gap-6">
        <a
          href="https://discord.bcydc.ca/"
          target="_blank"
          className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white bg-gradient-to-r px-4 py-2 duration-300 hover:scale-105"
        >
          <i className="fab fa-discord text-g-800" />
          <p className="font-medium text-g-800">Join</p>
        </a>
      </div>
    </div>
  );
}
