export default function LandingBackground() {
  return (
    <div className="w-full">
      <div className="bg-gradient absolute -top-1/2 h-screen w-full" />
      <div className="bg-grid absolute left-0 top-0 h-screen w-full opacity-[0.04]">
        <div className="absolute left-0 top-0 flex w-full flex-col gap-20">
          {Array(10)
            .fill(0)
            .map((x) => (
              <div className="h-[1px] w-full bg-white" />
            ))}
        </div>
        <div className="absolute left-0 top-0 flex flex-row gap-20">
          {Array(20)
            .fill(0)
            .map((x) => (
              <div className="h-screen w-[1px] bg-white" />
            ))}
        </div>
      </div>
    </div>
  );
}
