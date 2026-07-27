"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

/**
 * Static, styled placeholder for the area map — no API key required.
 * To use a live embed, replace this component's contents with:
 *
 *   <iframe
 *     src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(siteConfig.location.display)}`}
 *     className="h-full w-full border-0"
 *     loading="lazy"
 *     referrerPolicy="no-referrer-when-downgrade"
 *   />
 *
 * and set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment.
 */
export function MapPlaceholder() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.location.display
  )}`;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-brand-100 sm:aspect-[16/8]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,46,31,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(14,46,31,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-200/40 via-transparent to-brand-300/40" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-800 text-cream-50 shadow-lg ring-4 ring-white">
            <MapPin className="h-6 w-6" />
          </span>
          <span className="mt-1 h-3 w-3 rounded-full bg-brand-800/30 blur-[2px]" />
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink-900">Tawaa Fresh</p>
          <p className="text-xs text-ink-500">{siteConfig.location.display}</p>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-800 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:bg-brand-700"
        >
          View Area <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
