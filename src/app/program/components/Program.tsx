import Image from "next/image";

export default function Program({
  name,
  meta,
  banner,
  description,
  children,
}: {
  name: string;
  meta: {
    when: string;
    where: string;
    who: string;
    cost: string;
  };
  children: React.ReactNode;
  banner: string;
  description: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-6">
      <Image
        width={1024}
        height={300}
        draggable={false}
        className="select-none rounded-lg border border-white border-opacity-40 shadow"
        src={`/banners/programs/${banner}`}
        alt="Program Banner"
      />
      <div className="flex w-full flex-col items-start gap-2">
        <h1 className="text-center text-4xl font-bold text-white">{name}</h1>
        <p className="text-lg text-white text-opacity-70">{description}</p>
      </div>
      <div className="flex w-full flex-col items-start gap-2 text-white">
        <p>
          <span className="font-bold">When:</span> {meta.when}
        </p>
        <p>
          <span className="font-bold">Where:</span> {meta.where}
        </p>
        <p>
          <span className="font-bold">Who:</span> {meta.who}
        </p>
        <p>
          <span className="font-bold">Cost:</span> {meta.cost}
        </p>
      </div>
      {children}
    </div>
  );
}
