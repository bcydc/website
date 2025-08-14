"use client";

import { useEffect } from "react";
import Program from "../components/Program";

export default function AdventOfCode() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#125636";
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (
    <Program
      name="Advent of Code"
      description="Our first community event – an advent calendar of two daily coding challenges, everyday from December 1st to December 25th. In less than one week, our community grew from just 1 member to over 120 high school student developers from across British Columbia."
      meta={{
        when: "December 1st → 25th, 2023",
        where: "adventofcode.com",
        who: "Any high school student in British Columbia",
        prize: "$125",
      }}
      banner="advent-of-code.png"
    >
      <ul className="list-inside list-disc font-light text-white text-opacity-90">
        <li>
          Over <span className="px-1 font-semibold text-white">61 members</span>{" "}
          participated in our Advent of Code event
        </li>
        <li>
          As a community, we attempted and succeeded in a total of{" "}
          <span className="px-1 font-semibold text-white">614 challenges</span>
        </li>
        <li>
          In total, we spent over{" "}
          <span className="px-1 font-semibold text-white">236 hours</span>{" "}
          coding and over{" "}
          <span className="px-1 font-semibold text-white">5000+ messages</span>{" "}
          discussing problems
        </li>
        <li>
          Our top two competitors received a total of{" "}
          <span className="px-1 font-semibold text-white">$125</span> in prizes
          <ol className="ml-6 list-inside list-disc">
            <li>
              on December 10th, Sam Liu from Eric Hamber Secondary School won
              the first prize
            </li>
            <li>
              on December 25th, William Yan from New Westminster Secondary
              School won the final prize
            </li>
          </ol>
        </li>
      </ul>
      <p className="text-white">
        This is the final top 15 leaderboard for BCYDC participants from across
        British Columbia
      </p>
      <img src="/images/advent-of-code/leaderboard.png" alt="Leaderboard" />
    </Program>
  );
}
