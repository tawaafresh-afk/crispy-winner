"use client";

import { useState } from "react";
import { Loader2, Send, AlertCircle } from "lucide-react";
import { TextField, TextareaField, SelectField } from "@/components/forms/fields";
import { HoneypotField } from "@/components/forms/HoneypotField";
import { Button } from "@/components/ui/Button";
import { useFormSubmit } from "@/lib/use-form-submit";
import { occasionTypes, siteConfig } from "@/lib/site-config";

const guestRanges = ["Under 20", "20 – 50", "50 – 100", "100 – 250", "250+"];
const cateringOptions = ["Disposable Tray Catering", "Complete Buffet Setup", "Not sure yet"];
const budgetRanges = ["Under £250", "£250 – £500", "£500 – £1,000", "£1,000 – £2,500", "£2,500+", "Not sure yet"];

export function QuoteForm() {
  const { status, errorMessage, submit } = useFormSubmit("/api/quote");
  const [eventType, setEventType] = useState("");

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-brand-50 p-12 text-center">
        <h3 className="font-serif text-2xl text-ink-900">Thank you!</h3>
        <p className="text-sm text-ink-600">Your enquiry has been sent successfully.</p>
        <p className="text-sm text-ink-600">We&apos;ll contact you within 24 hours.</p>
        <p className="text-sm text-ink-600">
          For urgent enquiries please call or WhatsApp <br />
          <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-brand-800">
            {siteConfig.phoneDisplay}
          </a>
          .
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
      <HoneypotField />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="name" label="Full name" required placeholder="Your name" />
        <TextField id="email" label="Email address" type="email" required placeholder="you@email.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="phone" label="Phone number" type="tel" required placeholder="07xxx xxxxxx" />
        <SelectField
          id="eventType"
          label="Event type"
          required
          options={[...occasionTypes]}
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <TextField id="eventDate" label="Event date" type="date" required />
        <SelectField id="guestCount" label="Estimated guests" required options={guestRanges} />
        <SelectField id="budgetRange" label="Budget range" options={budgetRanges} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="venue" label="Venue" placeholder="Town, postcode or venue name" />
        <SelectField id="cateringOption" label="Catering option" options={cateringOptions} />
      </div>
      <TextareaField
        id="message"
        label="Tell us about your event"
        required={eventType === "Other"}
        rows={5}
        placeholder="Dish preferences, dietary requirements, or anything else that helps us quote accurately."
      />
      {eventType === "Other" ? (
        <p className="-mt-4 text-sm text-gold-700">Please tell us about your event.</p>
      ) : null}

      {status === "error" ? (
        <div className="flex items-start gap-2 rounded-xl bg-maroon-500/5 p-4 text-sm text-maroon-600">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="font-semibold">We&apos;re sorry.</p>
            <p>{errorMessage || "There was a problem sending your enquiry."}</p>
            <p>
              Please try again or contact us on{" "}
              <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold underline">
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      ) : null}

      <Button type="submit" variant="gold" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Request My Quote
      </Button>
    </form>
  );
}
