"use client";

import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { TextField, TextareaField } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { useFormSubmit } from "@/lib/use-form-submit";

export function EnquiryForm() {
  const { status, errorMessage, submit } = useFormSubmit("/api/enquiry");

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-brand-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-700" />
        <h3 className="font-serif text-xl text-ink-900">Thank you — message sent!</h3>
        <p className="max-w-sm text-sm text-ink-600">
          We&apos;ve received your enquiry and will get back to you within 24 hours. For anything urgent, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        submit(Object.fromEntries(form.entries()));
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="name" label="Full name" required placeholder="Your name" />
        <TextField id="email" label="Email address" type="email" required placeholder="you@email.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="phone" label="Phone number" type="tel" placeholder="07xxx xxxxxx" />
        <TextField id="eventDate" label="Event date (if known)" type="date" />
      </div>
      <TextareaField id="message" label="Your message" required placeholder="Tell us about your event, guest count and anything else we should know." />

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-maroon-600">
          <AlertCircle className="h-4 w-4" /> {errorMessage}
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send Enquiry
      </Button>
    </form>
  );
}
