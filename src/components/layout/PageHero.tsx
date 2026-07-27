import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(203,153,40,0.16),_transparent_55%)]" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <Container className="relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            <span className="h-px w-6 bg-gold-500" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream-50 text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
