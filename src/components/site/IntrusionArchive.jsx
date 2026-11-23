const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const ITEMS = [
  {
    index: "01",
    name: "PET bottles",
    polymer: "Polyethylene terephthalate",
    persistence: "450+ years",
    detail:
      "The most recovered item on European beaches. Transparent, lightweight, and effectively immortal once it reaches salt water.",
    image: "https://media.db.com/images/public/6b0378300059819e5bcae312/b1e680eaa_generated_image.png",
  },
  {
    index: "02",
    name: "Ghost nets",
    polymer: "Nylon & HDPE gear",
    persistence: "600 years",
    detail:
      "Abandoned fishing gear is the deadliest plastic in the sea. It does not need a boat to keep catching fish, seals and turtles.",
    image: "https://media.db.com/images/public/6b0378300059819e5bcae312/115784e0b_generated_image.png",
  },
  {
    index: "03",
    name: "Microplastics",
    polymer: "Fragments under 5 mm",
    persistence: "Indefinite",
    detail:
      "Too small to collect and small enough to cross into tissue. Found in sea ice, trench sediment, rain and human blood.",
    image: "https://media.db.com/images/public/6b0378300059819e5bcae312/54fc93de5_generated_image.png",
  },
  {
    index: "04",
    name: "EPS foam",
    polymer: "Expanded polystyrene",
    persistence: "500 years",
    detail:
      "Breaks into beads that birds take for eggs and fish take for food. Practically impossible to recover once it crumbles.",
    image: null,
  },
  {
    index: "05",
    name: "Sachets & films",
    polymer: "Multi-layer laminate",
    persistence: "400 years",
    detail:
      "The hardest format to recycle and the fastest growing. Sold as convenience, left behind as permanent litter.",
    image: null,
  },
];

export function IntrusionArchive() {
  const scroller = useRef(null);

  const scrollByCard = (direction) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 420), behavior: "smooth" });
  };

  return (
    <section id="archive" className="border-y border-border bg-secondary/25 py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="micro text-primary">02 / The Archive of Intrusion</span>
            <h2 className="mt-6 max-w-2xl font-heading text-[clamp(2rem,4.6vw,3.9rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
              What the ocean is made of now
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Five formats account for most of what washes ashore. Every one of them exists because packaging was
              designed for a single use and a single century.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="micro mr-2 hidden sm:inline">Scroll</span>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous entries"
              className="border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next entries"
              className="border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-6 sm:px-8 lg:px-12"
      >
        {ITEMS.map((item) => (
          <article
            key={item.index}
            className="w-[80vw] shrink-0 snap-start border border-border bg-card sm:w-[24rem]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.name} in the marine environment`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  fittingType="fill"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,theme(colors.accent/25),transparent_60%)]">
                  <span className="font-heading text-6xl font-semibold uppercase tracking-[-0.04em] text-foreground/15">
                    {item.index}
                  </span>
                </div>
              )}
              <span className="absolute left-4 top-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/80">
                {item.index} / In the water
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-foreground">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              <dl className="mt-6 space-y-2 border-t border-border pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="micro">Polymer</dt>
                  <dd className="text-right text-xs text-foreground/80">{item.polymer}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="micro">Persistence</dt>
                  <dd className="text-right font-mono text-xs text-accent">{item.persistence}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}