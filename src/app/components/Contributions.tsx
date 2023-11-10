export default function () {
  const colors = [
    "bg-g-300",
    "bg-g-500",
    "bg-g-700",
    "bg-g-700",
    "bg-g-800",
    "bg-g-800",
    "bg-g-800",
  ];

  return (
    <div className="flex flex-row gap-1.5 md:gap-2">
      {Array(75)
        .fill(0)
        .map((x, i) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              className={`h-3 min-w-[12px] rounded-sm md:h-4 md:min-w-[16px] ${color}`}
            />
          );
        })}
    </div>
  );
}
