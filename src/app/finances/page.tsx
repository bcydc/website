"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Finances() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#125636";
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="z-30 flex h-full w-full flex-col items-start justify-start gap-6">
      <Link href="/">
        <p className="-mb-2 text-white hover:underline">← Go back</p>
      </Link>
      <div className="flex w-full flex-col items-start gap-2">
        <h1 className="text-center text-4xl font-bold text-white">Finances</h1>
        <p className="text-lg text-white text-opacity-70">Financial transparency and fiscal sponsorship information for the British Columbia Youth Developer Collective.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-white">
            Fiscal Sponsorship
          </h2>
          <p className="text-white">
            The British Columbia Youth Developer Collective is fiscally sponsored by The Hack Foundation (d.b.a Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499)
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-white">
            Transparency
          </h2>
          <p className="text-white">
            All of our financial transactions are done on{" "}
            <a href="https://hcb.hackclub.com/" target="_blank" rel="noopener noreferrer" className="underline">
              HCB
            </a>
            . We have made a commitment to keeping our finances transparent. You can view our finances for the following programs:
          </p>
          <ul className="flex list-inside list-disc flex-col gap-0.5 text-white">
            <li>
              <a href="https://hcb.hackclub.com/bcydc" target="_blank" rel="noopener noreferrer" className="underline">
                BCYDC
              </a>
            </li>
            <li>
              <a href="https://hcb.hackclub.com/daydream-vancouver" target="_blank" rel="noopener noreferrer" className="underline">
                Daydream Vancouver
              </a>
            </li>
            <li>
              <a href="https://hcb.hackclub.com/scrapyard-vancouver" target="_blank" rel="noopener noreferrer" className="underline">
                Scrapyard Vancouver
              </a>
            </li>
            <li>
              <a href="https://hcb.hackclub.com/yvrhacks" target="_blank" rel="noopener noreferrer" className="underline">
                yvrHacks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
