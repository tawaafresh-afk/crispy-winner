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
    "Explore the full Tawaa Fresh catering menu — canapés, live tawaa & BBQ stations, signature curries, biryani, desserts and a mocktail bar, all halal certified.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="A menu built on generations of home cooking"
        description="Every dish is fully customisable for your guest list — swap spice levels, add dietary variations, or ask us to bring a family recipe of your own to life."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <MenuExplorer />

          <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl bg-cream-100 p-10 text-center">
            <h3 className="font-serif text-2xl text-ink-900">Don&apos;t see what you&apos;re after?</h3>
            <p className="max-w-md text-sm text-ink-600">
              Our chefs love a challenge — send us a family recipe or a dish you tasted on your last trip home and we&apos;ll work it into your menu.
            </p>
            <Button href={whatsappLink("Hi Tawaa Fresh, I have a specific dish request for my menu.")} variant="primary">
              <MessageCircle className="h-4 w-4" /> Ask Our Chefs
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
