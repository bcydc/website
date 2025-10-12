"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="z-40 flex w-full items-start justify-between pt-8 -pb-4 md:hidden">
      <div className="flex flex-col gap-1">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image src="/icons/logo.svg" alt="Logo" fill={true} />
          </div>
          <h1 className="max-w-[200px] text-lg font-semibold leading-tight text-white">
            British Columbia Youth Developer Collective
          </h1>
        </Link>
        <div className="flex flex-col gap-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xs text-white hover:text-g-300 transition duration-300 flex items-center gap-1 ml-[0px]"
          >
            Links <i className={`fas fa-chevron-${isMenuOpen ? 'up' : 'down'} text-xs`} />
          </button>
          <div className={`flex flex-col gap-1 mt-1 ml-[0px] overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
            <Link href="/finances" className="text-xs text-white hover:text-g-300 transition duration-300">
              Finances
            </Link>
            <a href="https://daydream.bcydc.ca/" target="_blank" className="text-xs text-white hover:text-g-300 transition duration-300">
              Daydream
            </a>
            <a href="https://scrapyard.bcydc.ca/" target="_blank" className="text-xs text-white hover:text-g-300 transition duration-300">
              Scrapyard
            </a>
            <a href="https://yvrHacks.bcydc.ca/" target="_blank" className="text-xs text-white hover:text-g-300 transition duration-300 mb-2">
              yvrHacks
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a
          href="https://discord.bcydc.ca/"
          target="_blank"
          className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white bg-gradient-to-r px-4 py-2 duration-300 hover:scale-105"
        >
          <i className="fab fa-discord text-g-800" />
          <p className="font-medium text-g-800">Join</p>
        </a>
        <div className="flex gap-3 pr-2 justify-end">
          <a href="https://github.com/bcydc" target="_blank">
            <i className="fab fa-github text-lg text-white transition duration-300 hover:text-g-300" />
          </a>
          <a href="https://instagram.com/bcydc" target="_blank">
            <i className="fab fa-instagram text-lg text-white transition duration-300 hover:text-g-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
