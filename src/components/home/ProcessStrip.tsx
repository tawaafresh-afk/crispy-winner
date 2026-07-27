import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { bookingProcess } from "@/lib/site-config";

export function ProcessStrip() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From first message to the final course"
          description="A simple, transparent process so you always know what happens next."
        />

        <RevealGroup className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bookingProcess.map((step, i) => (
            <RevealItem key={step.step}>
              <div className="relative pl-2">
                <span className="font-serif text-5xl text-gold-300">{step.step}</span>
                <h3 className="mt-3 font-serif text-lg text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
                {i < bookingProcess.length - 1 ? (
                  <span className="absolute right-[-2rem] top-6 hidden h-px w-8 bg-gradient-to-r from-gold-300 to-transparent lg:block" />
                ) : null}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
