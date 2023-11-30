"use client";

import CTA from "./components/CTA";
import Goals from "./components/Goals";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import AdventOfCodeModal from "./components/AdventOfCodeModal";

import { useState } from "react";

export default function Home() {
  const [modal, showmModal] = useState(true);
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center bg-black">
      <div className="z-30 flex w-screen items-center justify-center gap-x-4 bg-g-500 py-4">
        <p className="text-lg font-medium text-white">
          We are currently hosting our very first event!
        </p>
        <div
          onClick={() => showmModal(true)}
          className="flex cursor-pointer rounded-lg bg-white bg-opacity-90 px-4 py-2 transition duration-300 hover:bg-opacity-100"
        >
          <p className="select-none text-sm font-semibold text-g-700">
            Learn More
          </p>
        </div>
      </div>
      {modal && <AdventOfCodeModal showModal={showmModal} />}
      <Navbar />
      <Landing />
      <Vision />
      <Goals />
      <CTA />
      <Footer />
    </div>
  );
}
