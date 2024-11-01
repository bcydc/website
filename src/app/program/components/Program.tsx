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
    when?: string;
    where?: string;
    who?: string;
    cost?: string;
    prize?: string;
  };
  children: React.ReactNode;
  banner: string;
  description: string;
}) {
  return (
    <div className="z-30 flex h-full w-full flex-col items-start justify-start gap-6">
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
        {meta.when && (
          <p>
            <span className="font-bold">When:</span> {meta.when}
          </p>
        )}
        {meta.where && (
          <p>
            <span className="font-bold">Where:</span> {meta.where}
          </p>
        )}
        {meta.who && (
          <p>
            <span className="font-bold">Who:</span> {meta.who}
          </p>
        )}
        {meta.cost && (
          <p>
            <span className="font-bold">Cost:</span> {meta.cost}
          </p>
        )}
        {meta.prize && (
          <p>
            <span className="font-bold">Prizes:</span> {meta.prize}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
