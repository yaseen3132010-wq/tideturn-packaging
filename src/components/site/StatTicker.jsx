const ITEMS = [
  "11 million tonnes of plastic enter the ocean every year",
  "Packaging is the largest single source of plastic waste",
  "Only 9% of all plastic ever made has been recycled",
  "A PET bottle outlives the person who drank from it by centuries",
  "Plastic production is set to double again by 2050",
];

export function StatTicker() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-border bg-secondary/40 py-3">
      <div className="flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {track.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center">
              <span className="micro px-6 text-foreground/75">{item}</span>
              <span aria-hidden="true" className="text-primary">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}