import { Fragment } from "react";

export default function LandingBackground() {
  return (
    <Fragment>
      <div className="bg-gradient absolute -top-1/2 h-screen w-full" />
      <div className="absolute left-0 top-0 flex h-screen w-screen overflow-x-hidden opacity-[0.04]">
        <div className="flex gap-20">
          {Array(20)
            .fill(0)
            .map((x, i) => (
              <div key={i} className="h-screen w-[1px] bg-white" />
            ))}
        </div>
        <div className="absolute left-0 top-0 flex w-full flex-col gap-20">
          {Array(10)
            .fill(0)
            .map((x, i) => (
              <div key={i} className="h-[1px] w-full bg-white" />
            ))}
        </div>
      </div>
    </Fragment>
  );
}
