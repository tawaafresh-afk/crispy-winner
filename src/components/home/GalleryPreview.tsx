import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PatternTile } from "@/components/ui/PatternTile";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { galleryImages } from "@/lib/site-config";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Moments We've Catered" title="A glimpse into our events" />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {preview.map((img, i) => (
            <RevealItem key={img.id}>
              <div
                className={`aspect-square overflow-hidden rounded-2xl ${
                  i === 0 || i === 5 ? "sm:col-span-1 sm:row-span-1" : ""
                }`}
              >
                <PatternTile tone={img.tone} patternId={`gp-${img.id}`} />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
