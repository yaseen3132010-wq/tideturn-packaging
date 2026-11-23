const EVIDENCE = [
  {
    figure: "11 Mt",
    claim: "Plastic entering the ocean every year. Roughly one garbage truck per minute, all year, every year.",
    source: "UNEP, 2021",
  },
  {
    figure: "40%",
    claim:
      "Packaging is the single largest source of plastic waste. The material is designed to be used once and last forever.",
    source: "UNEP",
  },
  {
    figure: "9%",
    claim: "Of all the plastic ever produced has actually been recycled. The rest is landfill, incineration, or loose.",
    source: "OECD, 2022",
  },
  {
    figure: "450 yr",
    claim: "How long a single PET bottle can persist in seawater, fragmenting into microplastic the entire time.",
    source: "NOAA",
  },
  {
    figure: "3×",
    claim: "Projected growth in plastic flowing into aquatic ecosystems by 2040 if production continues as it is.",
    source: "UNEP",
  },
  {
    figure: "1,500+",
    claim: "Marine species recorded ingesting or becoming entangled in plastic. Most of them we have not counted yet.",
    source: "Marine pollution surveys",
  },
];

export function CrisisSection() {
  return (
    <section id="crisis" className="shell py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="micro text-primary">01 / The Crisis</span>
          <h2 className="mt-6 font-heading text-[clamp(2rem,4.6vw,3.9rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
            The ocean is not
            <br />
            a rubbish bin
            <br />
            <span className="text-muted-foreground">with nice views.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Plastic does not sink politely and wait. It drifts, fractures, and enters the food chain at the smallest
            possible scale — then comes back to us on the plate. The material that made packaging cheap is now the
            most expensive thing we produce.
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground/80">
            Figures below are the widely cited global estimates. They are not projections of what could happen. They
            are the record of what already has.
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {EVIDENCE.map((item) => (
            <li
              key={item.figure}
              className="group grid gap-4 py-7 transition-colors hover:bg-secondary/40 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 sm:px-4"
            >
              <div className="font-mono text-2xl text-accent sm:text-[1.7rem]">{item.figure}</div>
              <div>
                <p className="text-[0.98rem] leading-relaxed text-foreground/90">{item.claim}</p>
                <p className="micro mt-3">{item.source}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}