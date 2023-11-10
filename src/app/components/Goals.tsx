import FeatureCard from "./FeatureCard";

export default function Goals() {
  const features = [
    {
      title: "Tech Talks and Seminars",
      image: "/goals/microphone.png",
      description:
        "Regular tech talks and seminars frsom experienced individuals in the computer science field!",
    },
    {
      title: "Alumni & Mentor Presence",
      image: "/goals/heart.png",
      description:
        "Active community of alumni and university mentors from all around to world to learn and network with",
    },
    {
      title: "Events & Hackathons",
      image: "/goals/calendar.png",
      description:
        "Join teams that represent BCYDC at hackathons, and also participate in our own events and hackathons",
    },
    {
      title: "CCC & Contest Prep",
      image: "/goals/medal.png",
      description:
        "Collaborate and prepare for the CCC and other prestigious computing contests and tournaments",
    },
    {
      title: "Active Community",
      image: "/goals/chat.png",
      description:
        "Regular discussion and meetups with student developers from all around British Columbia",
    },
    {
      title: "Perks & Partners",
      image: "/goals/fire.png",
      description:
        "Exclusive discounts and services from partnered brands and companies with dev-tools and other products",
    },
  ];

  return (
    <div className="items-left z-10 flex w-11/12 flex-col gap-4 pt-20 md:w-8/12 md:pt-32">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Our Goals for the Future
        </h2>
        <p className="text-lg text-white md:text-xl">
          Our roadmap towards improving the high school computer science scene
          in BC
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </div>
  );
}
