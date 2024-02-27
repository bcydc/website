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
      href: "https://bcydc.notion.site/722bfaf9474e480a8e9d56cc3a428e84",
    },
    {
      label: "Clubs",
      href: "/clubs",
    },
    {
      label: "Events",
      href: "https://bcydc.notion.site/e5ac620b89884b47b53fc68370415334?",
    },
    {
      label: "Sponsors",
      href: "https://bcydc.notion.site/8b2a28e5f3124d0d896dbd22388e7316?",
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
            <a href={link.href} key={i}>
              <h1 className="text-lg xl:text-2xl text-white">{link.label}</h1>
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
