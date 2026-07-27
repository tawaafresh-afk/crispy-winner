"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PatternTile } from "@/components/ui/PatternTile";
import { siteConfig, whatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(203,153,40,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(51,127,90,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-noise opacity-40" />
        <svg
          className="absolute -right-32 -top-32 h-[560px] w-[560px] text-gold-500/10 paisley-mask"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          <path
            d="M100 20c30 0 40 34 20 54-17 17-45 10-48-14-3 20 20 40 46 34 30-8 34-50 4-70-34-20-80 0-80 46 0 40 36 66 76 60"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300"
          >
            <Star className="h-3.5 w-3.5 fill-gold-300 text-gold-300" />
            Rated 4.9/5 by 2,400+ events
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-serif text-4xl leading-[1.08] text-cream-50 text-balance sm:text-5xl md:text-6xl"
          >
            Luxury Pakistani catering,{" "}
            <span className="text-gradient-gold italic font-accent">served fresh</span> off the tawaa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200/80"
          >
            From grand walimas to intimate family gatherings, Tawaa Fresh brings
            live cooking stations, slow-simmered curries and hand-pressed breads
            straight to your celebration — cooked fresh, not reheated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/quote" variant="gold" size="lg">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={whatsappLink(defaultWhatsappMessage)}
              variant="outline"
              size="lg"
              className="border-cream-100/25 text-cream-50 hover:bg-cream-50 hover:text-brand-950"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-cream-100/10 pt-8 sm:grid-cols-4"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-2xl text-gold-300 sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-wide text-cream-200/60">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-[2.5rem] border border-gold-400/20" />
          <div className="absolute -left-6 top-10 h-40 w-40 rotate-[-8deg] rounded-3xl shadow-2xl ring-1 ring-cream-50/10 animate-float">
            <PatternTile tone="gold" patternId="hero-1" label="Live Tawaa Station" />
          </div>
          <div className="absolute right-0 top-0 h-56 w-44 rotate-[6deg] rounded-3xl shadow-2xl ring-1 ring-cream-50/10">
            <PatternTile tone="maroon" patternId="hero-2" label="Ceremonial Thaal" />
          </div>
          <div className="absolute bottom-0 left-6 h-48 w-52 rotate-[3deg] rounded-3xl shadow-2xl ring-1 ring-cream-50/10 animate-float [animation-delay:1.2s]">
            <PatternTile tone="brand" patternId="hero-3" label="Sindhi Biryani" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
