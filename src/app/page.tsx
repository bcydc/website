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
