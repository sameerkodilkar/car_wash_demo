import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import GallerySection from "@/components/sections/GallerySection";
import BookingCTASection from "@/components/sections/BookingCTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <BookingCTASection />
    </main>
  );
}
