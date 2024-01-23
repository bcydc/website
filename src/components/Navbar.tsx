export default function Navbar() {
  return (
    <div className="flex items-center w-full py-10 justify-between">
      <div className="flex item-center">
        <h1 className="text-3xl text-white font-medium">
          British Columbia Youth Developer Collective
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <h1 className="text-3xl text-white">Clubs</h1>
        <h1 className="text-3xl text-white">Events</h1>
        <h1 className="text-3xl text-white">Sponsors</h1>
      </div>
    </div>
  );
}
