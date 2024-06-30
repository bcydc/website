export default function ProgramLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full w-[1024px] flex-col overflow-hidden pb-10">
      <img
        src="/backgrounds/background.svg"
        alt="Background Image"
        className="absolute left-0 top-0 -z-20 hidden w-screen overflow-hidden md:inline"
      />
      {children}
    </div>
  );
}
