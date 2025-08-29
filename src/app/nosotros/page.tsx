import FounderHero from "@/components/nosotros/FounderHero";
import AboutBlock from "@/components/nosotros/AboutBlock";
import Recognitions from "@/components/nosotros/Recognitions";
import CTAStripe from "@/components/nosotros/CTAStripe";
import ArenitoSection from "@/components/nosotros/Arenito";

export const metadata = {
  title: "Nosotros | Fundación Granito de Arena",
  description: "Conoce a nuestra fundadora y la misión de proteger a la infancia en Chiapas.",
};

export default function NosotrosPage() {
  return (
    <main className="bg-white text-gray-900">
      <FounderHero />
      <AboutBlock />
      <ArenitoSection/>
      <Recognitions />
      <CTAStripe />
    </main>
  );
}
