"use client";

import { useEffect } from "react";
import Program from "../components/Program";

export default function AlgorithmExplainers() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#125636";
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (
    <Program
      name="Algorithm Explainers"
      description="Watch our videos to learn about all kinds of technology—revolutionary Al research, graph algorithms, competitive programming tactics! Produced by executives, using Manim and other tools! All animations are open-source and available on our GitHub."
      meta={{
        when: "Regular",
        where: "Instagram, Linkedin, and YouTube",
      }}
      banner="algorithm-explainers.svg"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <a href="https://instagram.com/bcydc/" target="_blank">
            <p className="text-white underline">See our Instagram</p>
          </a>
          <p className="text-white">x</p>
          <a href="https://linkedin.com/company/bcydc/" target="_blank">
            <p className="text-white underline">See our Linkedin</p>
          </a>
          <p className="text-white">x</p>
          <a href="https://hcb.hackclub.com/yvrhacks" target="_blank">
            <p className="text-white underline">See our GitHub</p>
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white">Current algorithm explainers include:</p>
          <ul className="flex list-inside list-disc flex-col gap-0.5 text-white">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C9q6D-URcH1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                className="underline"
              >
                Detecting Individual Decision-Making Style: Exploring Behavioral
                Stylometry in Chess
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C9dagjVSMNg"
                className="underline"
              >
                The Perceptron
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C7e83XLSnkD"
                className="underline"
              >
                Djikstra&apos;s Algorithm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Program>
  );
}
