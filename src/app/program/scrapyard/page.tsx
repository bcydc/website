"use client";
import { Gallery } from "react-grid-gallery";

import Program from "../components/Program";

export default function scrapyard() {
  return (
    <Program
      name="Scrapyard Vancouver 2025"
      description="Welcome to British Columbia's biggest upcoming youth hackathon! Scrapyard is a hackathon for high schoolers in the lower mainland, where you can make the stupidest things you can think of! Anything, from a lamp that flashes faster the slower you type to those ideas you wouldn't dare to consider useful goes at Scrapyard. No matter your experience, Scrapyard Vancouver need you and your scrappy ideas! 
The hackathon will take place at the Vancouver Independent School for Science and Technology (VISST) at 1490 W Broadway, Vancouver! This hackathon is only open to students who registered on our website prior to the registration deadline."
      meta={{
        when: "Saturday, March 15th, 2025",
        where:
          "Vancouver Independent School for Science and Technology (VISST)",
        who: "Any high school student in British Columbia",
        prize: "TBD!",
      }}
      banner="scrapyard.png"
    />
  );
}
