import Landing from "./components/Landing";
import Programs from "./components/Programs";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img
        src="/backgrounds/home.svg"
        alt="Background Image"
        className="absolute left-0 top-0 -z-10 hidden w-screen overflow-hidden md:inline"
      />
      <img
        src="/backgrounds/home-mobile.svg"
        alt="Background Image"
        className="absolute -z-10 inline min-h-[calc(100vw*0.6)] w-screen md:hidden"
      />
      <Landing />
      <Programs />
    </div>
  );
}
