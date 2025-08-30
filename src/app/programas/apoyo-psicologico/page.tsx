import Hero from "@/components/programas/apoyo-psicologico/Hero";
import Blocks from "@/components/programas/apoyo-psicologico/Blocks";
import CTAStrip from "@/components/programas/apoyo-psicologico/CTAStrip";

export const metadata = {
  title: "Apoyo psicológico para sanar y renacer | Fundación Granito de Arena",
  description:
    "Acompañamiento terapéutico especializado para niñas, niños y adolescentes sobrevivientes de ASI. Espacios seguros, enfoques basados en evidencia y cuota de recuperación solidaria.",
};

export default function ApoyoPsicologicoPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Blocks />
      <CTAStrip />
    </main>
  );
}
