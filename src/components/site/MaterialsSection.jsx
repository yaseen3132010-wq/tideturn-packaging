const PRINCIPLES = [
  {
    index: "01",
    title: "Built for a thousand trips",
    body: "Returnable formats in standard sizes, engineered for industrial wash lines. The unit is an asset, not a wrapper.",
  },
  {
    index: "02",
    title: "One material per unit",
    body: "Glass, aluminium and pressed fibre. No laminates, no liners, no mixed construction that quietly ends up in the ocean.",
  },
  {
    index: "03",
    title: "The loop is the product",
    body: "Deposits, collection routes and refill points designed alongside the container. If the return does not work, the packaging does not exist.",
  },
];

const MATERIALS = [
  { format: "Refill bottle", material: "Returnable glass", cycles: "40+", stage: "Pilot" },
  { format: "Pantry tin", material: "Mono-material aluminium", cycles: "100+", stage: "Pilot" },
  { format: "Bulk crate", material: "Moulded recycled fibre", cycles: "25", stage: "Pilot" },
  { format: "Refill vessel", material: "Stainless steel", cycles: "200+", stage: "Lab" },
  { format: "Tamper seal", material: "Seaweed film", cycles: "Single use", stage: "Lab" },
];

export function MaterialsSection() {
  return (
    <section id="materials" className="border-t border-border py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="micro text-primary">04 / Materials</span>
            <h2 className="mt-6 max-w-xl font-heading text-[clamp(2rem,4.6vw,3.9rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
              The studio is the
              <br />
              product
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-right">
            Tideturn is a reusable packaging studio, not a catalogue. The formats below are the current work in
            progress. Nothing is for sale yet — we would rather publish the process than a promise.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div key={item.index} className="bg-background p-7 sm:p-9">
              <span className="font-mono text-xs text-accent">{item.index}</span>
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase leading-snug tracking-[-0.01em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="micro py-3 pr-4 font-normal">Format</th>
                <th className="micro py-3 pr-4 font-normal">Material</th>
                <th className="micro py-3 pr-4 font-normal">Designed return cycles</th>
                <th className="micro py-3 font-normal">Stage</th>
              </tr>
            </thead>
            <tbody>
              {MATERIALS.map((row) => (
                <tr key={row.format} className="border-b border-border/70 transition-colors hover:bg-secondary/40">
                  <td className="py-4 pr-4 font-heading text-sm font-medium uppercase tracking-[0.02em] text-foreground">
                    {row.format}
                  </td>
                  <td className="py-4 pr-4 text-sm text-muted-foreground">{row.material}</td>
                  <td className="py-4 pr-4 font-mono text-sm text-foreground/80">{row.cycles}</td>
                  <td className="py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary">{row.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}