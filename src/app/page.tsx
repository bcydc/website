import Team from "./components/Team";
import Landing from "./components/Landing";
import Programs from "./components/Programs";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Landing />
      <Programs />
      <Team />
      <GoogleTagManager gtmId="G-JD2FNNVXTR"/>
    </div>
  );
}
