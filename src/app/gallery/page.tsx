import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at Tawaa Fresh's tray catering, buffet setup and dishes.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our catering in photos"
        description="A look at our buffet setups, tray catering and dishes."
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
