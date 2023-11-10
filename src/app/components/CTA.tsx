import Image from "next/image";

export default function CTA() {
  return (
    <div className="relative my-8 flex h-64 w-11/12 items-center justify-between rounded-lg bg-gradient-to-b from-green-800 to-green-900 p-8 md:my-12 md:w-8/12 md:pr-0">
      <div className="flex w-full flex-col items-start gap-2">
        <h3 className="text-2xl font-bold text-white md:text-4xl">
          Join our community :)
        </h3>
        <p className="font-extralight text-white md:max-w-md md:text-lg">
          We&apos;re looking for high school students, club presidents,
          university mentors and anyone else interested in joining us! Join our
          Discord now!
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.bcydc.ca/"
          className="mt-2 flex rounded-lg bg-white bg-opacity-80 px-8 py-2 transition duration-300 hover:bg-opacity-100"
        >
          <p className="font-semibold text-g-800">Join now</p>
        </a>
      </div>
      <Image
        src="/banner.svg"
        height={256}
        width={500}
        alt="Map of British Columbia"
        className="hidden"
      />
    </div>
  );
}
