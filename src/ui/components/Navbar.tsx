"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <Fragment>
      <MobileNavbar />
      <div className="z-40 hidden items-center justify-between py-10 md:flex md:w-[1024px] md:max-w-[1024px]">
        <div className="flex flex-col gap-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-6 w-6">
              <Image src="/icons/logo.svg" alt="Logo" fill={true} />
            </div>
            <h1 className="text-2xl font-medium text-white">
              British Columbia Youth Developer Collective
            </h1>
          </Link>
          <div className="flex flex-row gap-2">
            <a href="https://hcb.hackclub.com/scrapyard-vancouver" target="_blank" className="text-xs text-white hover:text-g-300 transition duration-300 underline">
              Finances
            </a>
            <p className="text-xs text-white">x</p>
            <a href="https://scrapyard.bcydc.ca/" target="_blank" className="text-xs text-white hover:text-g-300 transition duration-300 underline">
              Scrapyard
            </a>
            <p className="text-xs text-white">x</p>
            <a href="https://yvrHacks.bcydc.ca/" target="_blank" className="text-xs text-white hover:text-g-300 transition duration-300 underline">
              yvrHacks
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bcydc" target="_blank">
            <i className="fab fa-github text-xl text-white transition duration-300 hover:text-g-300" />
          </a>
          <a href="https://instagram.com/bcydc" target="_blank">
            <i className="fab fa-instagram text-xl text-white transition duration-300 hover:text-g-300" />
          </a>
          <a
            href="https://discord.bcydc.ca/"
            target="_blank"
            className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white bg-gradient-to-r px-5 py-2 duration-300 hover:scale-105"
          >
            <i className="fab fa-discord text-g-800" />
            <p className="font-medium text-g-800">Join</p>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
