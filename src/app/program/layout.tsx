export default function ProgramLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col overflow-hidden pb-10 md:w-[1024px]">
      {children}
    </div>
  );
}
