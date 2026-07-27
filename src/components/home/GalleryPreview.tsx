import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { galleryImages } from "@/lib/site-config";

export function GalleryPreview() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Gallery" title="Our catering in photos" />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {galleryImages.map((img) => (
            <RevealItem key={img.id}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
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
