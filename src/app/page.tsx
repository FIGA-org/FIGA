import AmbassadorsBanner from "@/components/AmbassadorsBanner";
import BottomBanner from "@/components/BottomBanner";
import FinalTransparencyCTA from "@/components/FinalTransparencyCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ProgramsSection from "@/components/ProgramsSection";
import TransparencySection from "@/components/TransparencySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <ProgramsSection />
      <AmbassadorsBanner />
      <TransparencySection />
      <FinalTransparencyCTA />
      <BottomBanner />
      <Footer />
    </>
  );
}