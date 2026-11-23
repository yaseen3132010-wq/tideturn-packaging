const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { Image } from "@/components/ui/image";

const HERO_IMAGE =
  "https://media.db.com/images/public/6b0378300059819e5bcae312/2a7fbe207_generated_image.png";

const HERO_FACTS = [
  { label: "Ocean plastic inflow", value: "11,000,000 t / yr" },
  { label: "Packaging share of plastic waste", value: "≈ 40%" },
  { label: "Ever recycled", value: "9%" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="A monolithic ocean wave frozen at the moment of breaking above dark water"
          className="h-full w-full object-cover"
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.45}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/25 to-transparent" />
      </div>

      <div className="shell w-full pb-10 pt-28 sm:pb-14">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="micro text-primary">54°N 12°W · North Atlantic</span>
          <span className="micro">Field report 001</span>
          <span className="micro text-accent">Status: accelerating</span>
        </div>

        <h1 className="mt-8 font-heading text-[clamp(2.7rem,8.4vw,8.4rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em] text-foreground">
          The tide is turning.
          <span className="mt-1 block text-primary">But not for us.</span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-border/70 pt-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-16">
          <p className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Tideturn Packaging is a reusable packaging studio with a single brief: build containers that come back
            instead of drifting out. Not recycled plastic. Not recyclable plastic. Returned, washed, refilled.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row md:justify-end">
            <a
              href="#crisis"
              className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Read the evidence
            </a>
            <a
              href="#blueprint"
              className="inline-flex items-center gap-3 border border-border px-6 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              The blueprint
            </a>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-px border border-border/70 bg-border/70 sm:grid-cols-3">
          {HERO_FACTS.map((fact) => (
            <div key={fact.label} className="bg-background/80 px-5 py-4 backdrop-blur-sm">
              <dt className="micro">{fact.label}</dt>
              <dd className="mt-2 font-mono text-lg text-foreground sm:text-xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}