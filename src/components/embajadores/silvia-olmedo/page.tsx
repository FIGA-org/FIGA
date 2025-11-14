import SilviaOlmedoHero from "@/components/embajadores/SilviaOlmedoHero";
import SilviaOlmedoBio from "@/components/embajadores/SilviaOlmedoBio";
import CTAStripe from "@/components/nosotros/CTAStripe";

export const metadata = {
  title: "Embajadora: Silvia Olmedo | Fundación Granito de Arena",
  description:
    "Conoce la trayectoria de Silvia Olmedo, psicóloga, escritora y embajadora de nuestra causa por la protección infantil.",
};

export default function SilviaOlmedoPage() {
  return (
    <main className="bg-white text-gray-900">
      <SilviaOlmedoHero />
      <SilviaOlmedoBio />
      <CTAStripe />
    </main>
  );
}