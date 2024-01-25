import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      label: "Mentors",
      href: "https://bcydc.notion.site/722bfaf9474e480a8e9d56cc3a428e84",
    },
    {
      label: "Clubs",
      href: "https://bcydc.notion.site/26dd1ac1d08744b8b8701b8182c89f87",
    },
    {
      label: "Events",
      href: "https://bcydc.notion.site/e5ac620b89884b47b53fc68370415334?",
    },
    {
      label: "Sponsors",
      href: "https://bcydc.notion.site/8b2a28e5f3124d0d896dbd22388e7316?",
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
          <a href={link.href} key={i}>
            <h1 className="text-lg xl:text-2xl text-white">{link.label}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}
