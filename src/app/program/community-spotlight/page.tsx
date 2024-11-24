"use client";

import Program from "../components/Program";

export default function AlgorithmExplainers() {
  return (
    <Program
      name="Community Spotlight"
      description="Watch our videos to learn more about the projects that students and developers in British Columbia are working on! We interview and showcase the projects of our students—all posted on Linkedin and Instagram!"
      meta={{
        when: "Regular",
        where: "Instagram, Linkedin, and YouTube",
      }}
      banner="community-spotlight.svg"
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
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white">
            Current community spotlight episodes include:
          </p>
          <ul className="flex list-inside list-disc flex-col gap-0.5 text-white">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C_JDMlcvqmQ/"
                className="underline"
              >
                Yejoon: &quot;Connected&quot; Browser Interface
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C9NhOuAPQdP/"
                className="underline"
              >
                Prajwal: &quot;Jarvis&quot; AI Assistant
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Program>
  );
}
