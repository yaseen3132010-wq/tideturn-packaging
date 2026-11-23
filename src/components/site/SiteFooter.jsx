const LINKS = [
  { label: "The Crisis", href: "#crisis" },
  { label: "The Archive", href: "#archive" },
  { label: "Blueprint", href: "#blueprint" },
  { label: "Materials", href: "#materials" },
  { label: "Manifesto", href: "#manifesto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-background/15 bg-foreground text-background">
      <div className="shell py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-xl font-semibold uppercase tracking-[-0.02em]">Tideturn Packaging</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/60">
              A reusable packaging studio in development. Glass, aluminium and fibre — never film.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background/60 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:hello@tideturnpackaging.com"
              className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background transition-colors hover:text-primary"
            >
              hello@tideturnpackaging.com
            </a>
            <a
              href="#top"
              className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background/50 transition-colors hover:text-primary"
            >
              Back to the surface ↑
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-background/45">
            © 2026 Tideturn Packaging
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-background/45">
            Figures: UNEP · OECD · NOAA
          </p>
        </div>
      </div>
    </footer>
  );
}