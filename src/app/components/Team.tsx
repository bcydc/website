export default function Team() {
  return (
    <div className="flex w-full flex-col items-center gap-10 py-12 md:py-24">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-center text-3xl font-bold text-white md:text-4xl">
          The Team
        </h3>
        <h6 className="max-w-sm text-center text-lg font-light text-white md:text-xl">
          Leading the British Columbia Youth Developer Collective
        </h6>
      </div>
      <div className="flex w-full flex-col gap-4 md:gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-40">
          <Member
            name="Kevin Thomas"
            image="kevin.png"
            role="President"
            href="https://kevinjosethomas.com/"
          />
          <Member
            name="Vuk Tacic"
            image="vuk.png"
            role="Vice President"
            href="https://www.linkedin.com/in/vuktacic/"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-40">
          <Member
            name="Ethan Jin"
            image="ethan.png"
            role="Marketing"
            href="https://www.linkedin.com/in/ethan-jin-0743722ab/"
          />
          <Member name="Freddie Zhang" image="freddie.png" role="Marketing" />
          <Member name="Simon Wong" image="simon.png" role="Sponsorship" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-40">
          <Member
            name="Johnny Dong"
            image="johnny.png"
            role="Treasury"
            href="https://www.linkedin.com/in/johnny-dong2007/"
          />
          <Member name="Shanvanth A" image="shaun.png" role="Logistics" />
          <Member name="Carol Wu" image="carol.png" role="Logistics" />
        </div>
      </div>
    </div>
  );
}

function Member({
  name,
  image,
  role,
  href,
}: {
  name: string;
  image: string;
  role: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/team/${image}`} alt={name} className="w-40" />
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold text-white">{name}</p>
          {href && (
            <a href={href} target="_blank">
              <i className="fas fa-external-link-alt text-xl text-white" />
            </a>
          )}
        </div>
        <p className="text-lg text-white">{role}</p>
      </div>
    </div>
  );
}
