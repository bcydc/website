import CTA from "./components/CTA";
import Goals from "./components/Goals";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center bg-black">
      <Navbar />
      <Landing />
      <Vision />
      <Goals />
      <CTA />
      <Footer />
    </div>
  );
}
