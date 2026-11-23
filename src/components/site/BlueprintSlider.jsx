const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { Image } from "@/components/ui/image";

const SYNTHETIC =
  "https://media.db.com/images/public/6b0378300059819e5bcae312/54fc93de5_generated_image.png";
const BIOLOGICAL =
  "https://media.db.com/images/public/6b0378300059819e5bcae312/3e3390220_generated_image.png";

export function BlueprintSlider() {
  const [position, setPosition] = useState(52);

  return (
    <section id="blueprint" className="shell py-24 sm:py-32">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <div>
          <span className="micro text-primary">03 / The Tideturn Blueprint</span>
          <h2 className="mt-6 font-heading text-[clamp(2rem,4.6vw,3.9rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
            Built to
            <br />
            come back
          </h2>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:justify-self-end">
          Drag the line. On one side is the packaging we were given: a fossil polymer engineered for one trip and
          built to survive for centuries. On the other is what we are building instead: returnable glass, aluminium
          and pressed fibre that come home to be washed and filled again.
        </p>
      </div>

      <div className="relative mt-12 aspect-[16/11] w-full overflow-hidden border border-border sm:aspect-[16/8]">
        <Image
          src={BIOLOGICAL}
          alt="Pressed organic fibre forming a packaging tray"
          className="absolute inset-0 h-full w-full object-cover"
          fittingType="fill"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={SYNTHETIC}
            alt="Microplastic fragments suspended in dark water"
            className="h-full w-full object-cover"
            fittingType="fill"
            style={{ width: `calc(100% * ${100 / Math.max(position, 1)})`, maxWidth: "none" }}
          />
          <div className="absolute inset-0 bg-background/20" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-20 w-px bg-primary"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background/80">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-primary">Drag</span>
          </span>
        </div>

        <span className="pointer-events-none absolute bottom-4 left-4 z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground/90">
          The synthetic past
        </span>
        <span className="pointer-events-none absolute bottom-4 right-4 z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
          The biological future
        </span>

        <label htmlFor="blueprint-slider" className="sr-only">
          Reveal the biological future
        </label>
        <input
          id="blueprint-slider"
          type="range"
          min="4"
          max="96"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <p className="micro mt-4">One material ends in the trench. The other ends back on the shelf, for the fortieth time.</p>
    </section>
  );
}