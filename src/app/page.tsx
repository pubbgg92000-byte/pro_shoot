import { HeroSection } from '@/components/home/HeroSection';
import { DSLRShowcase } from '@/components/home/DSLRShowcase';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { PortfolioShowcase } from '@/components/home/PortfolioShowcase';
import { StatsSection } from '@/components/home/StatsSection';
import { DroneExperience } from '@/components/home/DroneExperience';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { BehindTheLens } from '@/components/home/BehindTheLens';
import { BlogHighlights } from '@/components/home/BlogHighlights';
import { FAQPreview } from '@/components/home/FAQPreview';
import { BookingCTA } from '@/components/home/BookingCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DSLRShowcase />
      <FeaturedServices />
      <PortfolioShowcase />
      <StatsSection />
      <DroneExperience />
      <TestimonialsCarousel />
      <BehindTheLens />
      <BlogHighlights />
      <FAQPreview />
      <BookingCTA />
    </>
  );
}
