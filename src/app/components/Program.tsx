import { Fragment } from "react";

export default function Program({
  name,
  image,
  complete,
  duration,
}: {
  name: string;
  image: string;
  complete: boolean;
  duration: string;
}) {
  return (
    <div className="group relative w-full transform overflow-hidden rounded-lg border border-white border-opacity-40 shadow duration-300 hover:scale-[1.01]">
      {complete && (
        <Fragment>
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30 transition duration-500 group-hover:opacity-0" />
          <div className="absolute -left-[27.2rem] flex w-full -rotate-45 items-center justify-center bg-g-500 py-1.5 pr-24">
            <p className="text-xs font-bold text-white">{duration}</p>
          </div>
        </Fragment>
      )}
      <img
        draggable="false"
        className="select-none"
        src={`/banners/programs/${image}`}
        alt="Advent of Code"
      />
    </div>
  );
}
