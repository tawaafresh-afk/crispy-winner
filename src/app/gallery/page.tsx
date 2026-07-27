import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse moments from Tawaa Fresh weddings, live cooking stations, ceremonial thaal service and corporate events.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the celebrations we've catered"
        description="A look at our live stations, ceremonial platters and events — filter by category to see what suits your occasion."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
