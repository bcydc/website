"use client";

import Card from "card-vibes";
import Image from "next/image";

export default function FeatureCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <Card style={{}}>
      <div className="relative flex h-40 overflow-hidden rounded-lg border border-green-300 border-opacity-10 bg-green-300 bg-opacity-[0.15] p-6 md:h-44">
        <div className="z-20 flex flex-col gap-1">
          <h1 className="text-xl font-medium text-white">{title}</h1>
          <h3 className="max-w-xs leading-relaxed text-white text-opacity-75 ">
            {description}
          </h3>
        </div>
        <Image
          src={image}
          alt="Embedded Image"
          className="absolute right-0 top-2 opacity-25 saturate-0"
          width={200}
          height={200}
        />
      </div>
    </Card>
  );
}
