"use client";

import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { TextField, TextareaField, SelectField } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { useFormSubmit } from "@/lib/use-form-submit";
import { serviceTypes } from "@/lib/site-config";

const guestRanges = ["Under 50", "50 – 100", "100 – 250", "250 – 500", "500+"];
const budgetRanges = ["Under £2,000", "£2,000 – £5,000", "£5,000 – £10,000", "£10,000 – £20,000", "£20,000+", "Not sure yet"];

export function QuoteForm() {
  const { status, errorMessage, submit } = useFormSubmit("/api/quote");

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-brand-50 p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-700" />
        <h3 className="font-serif text-2xl text-ink-900">Quote request received!</h3>
        <p className="max-w-md text-sm text-ink-600">
          Thank you for the details. Our team will review your event and send a tailored quote to your email within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6"
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
        <TextField id="phone" label="Phone number" type="tel" required placeholder="07xxx xxxxxx" />
        <SelectField id="eventType" label="Event type" required options={[...serviceTypes]} />
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <TextField id="eventDate" label="Event date" type="date" required />
        <SelectField id="guestCount" label="Estimated guests" required options={guestRanges} />
        <SelectField id="budget" label="Budget range" options={budgetRanges} />
      </div>
      <TextField id="location" label="Event location / venue" required placeholder="City or venue name" />
      <TextareaField
        id="message"
        label="Tell us about your event"
        rows={5}
        placeholder="Menu preferences, dietary requirements, live stations you'd like, or anything else that helps us quote accurately."
      />

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-maroon-600">
          <AlertCircle className="h-4 w-4" /> {errorMessage}
        </p>
      ) : null}

      <Button type="submit" variant="gold" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Request My Quote
      </Button>
    </form>
  );
}
