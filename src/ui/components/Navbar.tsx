import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "Clubs",
      href: "/clubs",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Sponsors",
      href: "/sponsors",
    },
  ];

  return (
    <div className="flex  items-center w-full py-10 justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-6 xl:w-8 h-6 xl:h-8">
          <Image src="/icons/logo.svg" alt="Logo" fill={true} />
        </div>
        <h1 className="text-xl xl:text-3xl text-white font-medium">
          British Columbia Youth Developer Collective
        </h1>
      </Link>
      <div className="flex items-center gap-3 xl:gap-6">
        {links.map((link, i) => (
          <Link href={link.href} key={i}>
            <h1 className="text-lg xl:text-2xl text-white">{link.label}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
