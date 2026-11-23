import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { StatTicker } from "@/components/site/StatTicker";
import { CrisisSection } from "@/components/site/CrisisSection";
import { IntrusionArchive } from "@/components/site/IntrusionArchive";
import { BlueprintSlider } from "@/components/site/BlueprintSlider";
import { MaterialsSection } from "@/components/site/MaterialsSection";
import { ManifestoSection } from "@/components/site/ManifestoSection";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tideturn Packaging — Packaging that never becomes ocean plastic" },
      {
        name: "description",
        content:
          "Tideturn Packaging is a materials studio building packaging from fibre, seaweed and paper — never film. The evidence on ocean plastic, the archive of what we are replacing, and the blueprint.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StatTicker />
        <CrisisSection />
        <IntrusionArchive />
        <BlueprintSlider />
        <MaterialsSection />
        <ManifestoSection />
      </main>
      <SiteFooter />
    </div>
  );
}