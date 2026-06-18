import { CertificationsSection } from "@/components/main/CertificationsSection";
import { ContactSection } from "@/components/main/ContactSection";
import { GallerySection } from "@/components/main/GallerySection";
import { HeroSection } from "@/components/main/HeroSection";
import { InnovationSection } from "@/components/main/InnovationSection";
import { MisionVisionSection } from "@/components/main/MisionVisionSection";
import { QuoteSection } from "@/components/main/QuoteSection";
import { ServicesSection } from "@/components/main/ServicesSection";

export default function MainPage() {
  return (
    <>
      <HeroSection/>
      <CertificationsSection/>
      <ServicesSection/>
      <MisionVisionSection/>
      <InnovationSection/>
      <GallerySection/>
      <QuoteSection/>
      <ContactSection/>
    </>
  );
}
