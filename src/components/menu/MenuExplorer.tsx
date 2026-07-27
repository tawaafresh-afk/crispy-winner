"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DishTag } from "@/components/menu/DishTag";
import { menu } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MenuExplorer() {
  const [activeId, setActiveId] = useState<string>("all");

  const categories = useMemo(() => [{ id: "all", title: "Full Menu", subtitle: "", items: [] }, ...menu], []);

  const visibleCategories = activeId === "all" ? menu : menu.filter((c) => c.id === activeId);

  return (
    <div>
      <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={cn(
              "relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
              activeId === category.id
                ? "bg-brand-900 text-cream-50"
                : "bg-white text-ink-600 ring-1 ring-ink-100 hover:text-brand-800"
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-16">
        {visibleCategories.map((category) => (
          <motion.section
            key={category.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl text-ink-900 sm:text-3xl">{category.title}</h2>
              <p className="mt-1.5 text-sm text-ink-500">{category.subtitle}</p>
            </div>
            <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <RevealItem key={item.name}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg text-ink-900">{item.name}</h3>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{item.description}</p>
                    {item.tags && item.tags.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <DishTag key={tag} tag={tag} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
