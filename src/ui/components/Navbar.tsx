"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const path = usePathname();

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
      label: "Events",
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
        className={`hidden md:flex z-10 ${
          path !== "/" && "bg-g-800"
        } items-center w-full py-10 justify-between px-4 md:px-8`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-6 xl:w-8 h-6 xl:h-8">
            <Image src="/icons/logo.svg" alt="Logo" fill={true} />
          </div>
          <h1 className="text-xl xl:text-3xl text-white font-medium">
            British Columbia Youth Developer Collective
          </h1>
        </Link>
        <div className="flex items-center gap-3 xl:gap-6">
          {links.map((link, i) => (
            <a href={link.href} key={i} target="_blank">
              <h1 className="text-lg xl:text-2xl text-white">{link.label}</h1>
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
