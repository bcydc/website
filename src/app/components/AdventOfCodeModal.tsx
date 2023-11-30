"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AdventOfCodeModal({ showModal }: { showModal: any }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={() => showModal(false)}
      className="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center overflow-hidden bg-black bg-opacity-70"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-11/12 flex-col gap-1 rounded-xl border-2 border-g-700 bg-g-800 p-4 md:w-8/12 md:gap-3 md:p-10 2xl:gap-6"
      >
        <div className="flex w-full justify-between">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Advent of Code 2023
          </h1>
          <Image
            onClick={() => showModal(false)}
            className="cursor-pointer"
            src="/icons/x.svg"
            height={24}
            width={24}
            alt="Close"
          />
        </div>
        <div className="flex flex-col gap-0.5 text-xs text-white md:gap-1 md:text-base 2xl:gap-2 2xl:text-lg">
          <div className="flex flex-col gap-0.5 md:gap-1 2xl:gap-2">
            <p>Hello British Columbia!</p>
            <p>
              Over the next 25 days of the advent calendar, a small programming
              challenge will be posted by Advent of Code every day at 9pm. You
              don&apos;t need a computer science background to participate -
              just a little programming knowledge and some problem solving
              skills will get you pretty far.
            </p>
            <p>
              The earlier you complete every challenge, the higher you rank on
              the BCYDC leaderboard. Just tune in whenever you&apos;re free and
              make sure you&apos;re faster than other participants! Here are the
              prizes open for all high school students in British Columbia: 💵
            </p>
          </div>
          <div className="flex flex-col gap-0.5 py-1 md:gap-1 md:py-2 md:text-lg 2xl:gap-2 2xl:py-4 2xl:text-xl">
            <p>
              <span className="font-bold">$75 Cash</span> - First place on
              December 25th
            </p>
            <p>
              <span className="font-bold">$50 Cash</span> - First place on
              December 10th
            </p>
          </div>
          <p>Here is how you can begin :)</p>
          <ol className="flex list-inside list-decimal flex-col gap-0.5 py-1 md:gap-1 md:py-2 2xl:gap-2 2xl:py-4">
            <li>
              Quickly sign in at{" "}
              <a
                className="text-g-300 underline"
                href="https://adventofcode.com/2023/auth/login"
                target="_blank"
                rel="noreferrer"
              >
                adventofcode.com
              </a>
            </li>
            <li>
              Click on the{" "}
              <a
                className="text-g-300 underline"
                href="https://adventofcode.com/2023/leaderboard/private"
                target="_blank"
                rel="noreferrer"
              >
                Leaderboard tab
              </a>{" "}
              and join our private leaderboard:{" "}
              <code
                className="cursor-pointer bg-green-950 px-2 py-1"
                onClick={() => {
                  navigator.clipboard.writeText("3283017-df318187");
                }}
              >
                3283017-df318187
              </code>
            </li>
            <li>
              Join our{" "}
              <a
                className="text-g-300 underline"
                href="https://discord.bcydc.ca"
                target="_blank"
                rel="noreferrer"
              >
                Discord server
              </a>{" "}
              to be a part of our community and to be eligible for prizes
            </li>
            <li>
              Do the challenges whenever you can, and keep checking the
              leaderboard!
            </li>
          </ol>
          <p className="text-[0.5rem] leading-tight md:text-xs md:leading-normal">
            While anyone in the BCYDC Discord server is welcome to join our
            leaderboard, only high school students in British Columbia are
            eligible for the prizes. Also, I&apos;m going to work on contacting
            sponsors to increase our prize pool and maybe reward more students!
            If you&apos;re interested in sponsoring Canadian high school
            developers, reach out on Discord or at hello@bcydc.ca!
          </p>
        </div>
      </div>
    </div>
  );
}
