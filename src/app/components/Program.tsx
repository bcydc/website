import Link from "next/link";
import { Fragment } from "react";

export default function Program({
  name,
  href,
  image,
  complete,
  duration,
}: {
  name: string;
  href: string;
  image: string;
  complete: boolean;
  duration: string;
}) {
  return (
    <Link
      href={href}
      className="group relative w-full transform overflow-hidden rounded-lg border border-white border-opacity-40 shadow duration-300 hover:scale-[1.01]"
    >
      {complete && (
        <Fragment>
          <div className="absolute left-0 top-0 h-full w-full" />
          <div className="absolute -left-[27.2rem] flex w-full -rotate-45 items-center justify-center bg-g-500 py-1.5 pr-24">
            <p className="text-xs font-bold text-white">{duration}</p>
          </div>
        </Fragment>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        draggable="false"
        className="select-none"
        src={`/banners/programs/${image}`}
        alt={name}
      />
    </Link>
  );
}
