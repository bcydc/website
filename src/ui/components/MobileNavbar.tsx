"use client";

import Link from "next/link";
import Image from "next/image";

export default function MobileNavbar() {
  return (
    <div className="flex w-full items-center justify-between py-8 md:hidden">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <Image src="/icons/logo.svg" alt="Logo" fill={true} />
        </div>
        <h1 className="max-w-[200px] text-lg font-semibold leading-tight text-white">
          British Columbia Youth Developer Collective
        </h1>
      </Link>
      <div className="relative h-8 w-8">
        <Image alt="Discord Logo" src="/icons/discord.svg" fill={true} />
      </div>
    </div>
  );
}
