import { MessageSquareText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Placeholder for customer reviews. Intentionally contains no names,
 * ratings or quotations — replace with real, verifiable reviews only.
 */
export function ReviewsPlaceholder() {
  return (
    <div>
      <SectionHeading eyebrow="Reviews" title="Customer reviews" />
      <Reveal className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-dashed border-ink-100 bg-white p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-800/5 text-brand-800">
          <MessageSquareText className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-xl text-ink-900">Reviews coming soon</h3>
        <p className="text-sm leading-relaxed text-ink-600">
          We&apos;re in the process of collecting genuine customer reviews. This
          section will be updated with real feedback as it comes in.
        </p>
      </Reveal>
    </div>
  );
}
