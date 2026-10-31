import Hero from "./components/Hero";
import Techstackcovered from "./components/Techstackcovered";
import FeaturedRoadmaps from "./components/FeaturedRoadmaps";
import FeaturesComparison from "./components/FeaturesComparison";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Techstackcovered />
      <FeaturedRoadmaps />
      <FeaturesComparison />
      <FAQSection />
      <CTASection />
    </main>
  );
}
