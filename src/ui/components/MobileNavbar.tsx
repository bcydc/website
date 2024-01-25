"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNavbar({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex md:hidden items-center w-full justify-between py-8">
      <AnimatePresence>
        {sidebar && (
          <motion.div
            className="absolute top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-80"
            onClick={() => setSidebar(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="flex flex-col p-8 justify-between gap-6 w-5/6 h-full bg-g-800 border-r-2 border-g-700"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
            >
              <div className="gap-6 flex flex-col">
                <div className="relative w-12 h-12">
                  <Image src="/icons/logo.svg" alt="Logo" fill={true} />
                </div>
                <div className="flex flex-col gap-3">
                  {links.map((link, i) => (
                    <a href={link.href} key={i}>
                      <p className="text-3xl text-white">{link.label}</p>
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="https://discord.bcydc.ca/"
                target="_blank"
                className="flex w-full items-center rounded-lg justify-center bg-g-700 py-4 gap-2.5"
              >
                <div className="relative w-5 h-5">
                  <Image
                    alt="Discord Logo"
                    src="/icons/discord.svg"
                    fill={true}
                  />
                </div>
                <p className="text-xl text-white font-medium">
                  Join our Discord
                </p>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-9 h-9">
          <Image src="/icons/logo.svg" alt="Logo" fill={true} />
        </div>
        <h1 className="text-4xl text-white font-semibold">BCYDC</h1>
      </Link>
      <div className="w-9 h-9 relative" onClick={() => setSidebar(true)}>
        <Image src="/icons/bars.svg" fill={true} alt="Hamburger" />
      </div>
    </div>
  );
}
