import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { CtaBanner } from "@/components/home/CtaBanner";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The Tawaa Fresh catering menu — chicken karahi, butter chicken, chicken curry, lamb curry, mixed vegetable curry, pilau rice, samosas, onion bhajis, naan, and mint and coriander sauce.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Freshly prepared Pakistani dishes"
        description="Available as disposable tray catering or a complete buffet setup."
        image={{
          src: "/images/menu-banner.webp",
          alt: "Close-up of Tawaa Fresh naan, rice and curry dishes on a buffet table",
        }}
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <MenuExplorer />

          <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl bg-cream-100 p-10 text-center">
            <h3 className="font-serif text-2xl text-ink-900">Have a question about a dish?</h3>
            <p className="max-w-md text-sm text-ink-600">
              Get in touch and we&apos;ll be happy to help.
            </p>
            <Button href={whatsappLink("Hi Tawaa Fresh, I have a question about the menu.")} variant="primary">
              <MessageCircle className="h-4 w-4" /> Ask Us
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
