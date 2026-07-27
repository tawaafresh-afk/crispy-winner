import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyUs } from "@/components/home/WhyUs";
import { SignatureMenu } from "@/components/home/SignatureMenu";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <SignatureMenu />
      <ProcessStrip />
      <TestimonialsPreview />
      <GalleryPreview />
      <CtaBanner />
    </>
  );
}
