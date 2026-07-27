"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/site-config";

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goTo = (delta: number) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + delta + galleryImages.length) % galleryImages.length;
    setLightboxIndex(next);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/95 p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-cream-50/80 hover:text-gold-300"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-7 w-7" />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              className="absolute left-4 text-cream-50/80 hover:text-gold-300 sm:left-8"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <motion.div
              key={galleryImages[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                sizes="(min-width: 768px) 42rem, 100vw"
                className="object-cover"
              />
            </motion.div>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              className="absolute right-4 text-cream-50/80 hover:text-gold-300 sm:right-8"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
