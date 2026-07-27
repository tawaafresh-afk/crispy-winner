"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroHighlights, whatsappLink, defaultWhatsappMessage } from "@/lib/site-config";
import { iconMap } from "@/lib/icon-map";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.webp"
          alt="Tawaa Fresh catering buffet with chafing dishes, rice, naan and branded signage"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay so the heading and buttons stay legible over the photo. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/40" />
      </div>

      <Container className="relative">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl leading-[1.08] text-cream-50 text-balance sm:text-5xl md:text-6xl"
          >
            Authentic Pakistani Catering for Every Occasion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200/80"
          >
            Freshly prepared catering for birthdays, weddings, family
            gatherings, corporate events and private celebrations across
            Medway and surrounding areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/quote" variant="gold" size="lg">
              Request a Quote <ArrowRight className="h-4 w-4" />
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-cream-100/10 pt-8 sm:grid-cols-4"
          >
            {heroHighlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.label} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span className="text-sm leading-snug text-cream-200/80">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
