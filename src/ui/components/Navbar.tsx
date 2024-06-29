"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const links = [
    {
      label: "Mentors",
      href: "https://bcydc.notion.site/4609daa4db8043519e2b615574ff09ec",
    },
    {
      label: "Clubs",
      href: "https://bcydc.notion.site/09cfba7470824077b94d2d98d50708b3",
    },
    {
      label: "Programs",
      href: "https://bcydc.notion.site/0577cb29f6d54cf0a345c58eb9b127fd",
    },
    {
      label: "Sponsors",
      href: "https://bcydc.notion.site/9aa22a54c8754544bb49e7e9818fb403",
    },
  ];

  return (
    <Fragment>
      <MobileNavbar links={links} />
      <div
        className={`z-10 hidden items-center justify-between py-10 md:flex md:w-[1024px] md:max-w-[1024px]`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-6 w-6">
            <Image src="/icons/logo.svg" alt="Logo" fill={true} />
          </div>
          <h1 className="text-2xl font-medium text-white">
            British Columbia Youth Developer Collective
          </h1>
        </Link>
        <div className="flex items-center gap-3 xl:gap-6">
          <a
            href="https://discord.bcydc.ca/"
            target="_blank"
            className="relative flex select-none items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-g-700 to-g-500 px-5 py-2"
          >
            <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-0 transition duration-300 hover:bg-opacity-10" />
            <div className="relative h-4 w-4">
              <Image alt="Discord Logo" src="/icons/discord.svg" fill={true} />
            </div>
            <p className="font-medium text-white">Join</p>
          </a>
          {/* {links.map((link, i) => (
            <a href={link.href} key={i} target="_blank">
              <h1 className="text-lg text-white">{link.label}</h1>
            </a>
          ))} */}
        </div>
      </div>
    </Fragment>
  );
}
