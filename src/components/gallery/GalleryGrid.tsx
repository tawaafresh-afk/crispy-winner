"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PatternTile } from "@/components/ui/PatternTile";
import { galleryCategories, galleryImages } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const goTo = (delta: number) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + delta + filtered.length) % filtered.length;
    setLightboxIndex(next);
  };

  return (
    <div>
      <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setLightboxIndex(null);
            }}
            className={cn(
              "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
              activeCategory === category
                ? "bg-brand-900 text-cream-50"
                : "bg-white text-ink-600 ring-1 ring-ink-100 hover:text-brand-800"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img, index) => (
          <motion.button
            key={img.id}
            layout
            onClick={() => setLightboxIndex(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="group aspect-square overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
          >
            <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
              <PatternTile tone={img.tone} patternId={`gg-${img.id}`} label={img.title} />
            </div>
          </motion.button>
        ))}
      </motion.div>

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
              key={filtered[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl"
            >
              <PatternTile
                tone={filtered[lightboxIndex].tone}
                patternId={`lb-${filtered[lightboxIndex].id}`}
                label={filtered[lightboxIndex].title}
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
