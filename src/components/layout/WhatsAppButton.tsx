"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tawaa Fresh on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
