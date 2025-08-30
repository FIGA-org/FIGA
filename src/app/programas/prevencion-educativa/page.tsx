import Hero from "@/components/programas/prevencion-educativa/Hero";
import Blocks from "@/components/programas/prevencion-educativa/Blocks";
import CTAStrip from "@/components/programas/prevencion-educativa/CTAStrip";

export const metadata = {
  title: "Prevención educativa para un futuro seguro | Fundación Granito de Arena",
  description:
    "Programa de prevención educativa para crear entornos seguros y conscientes, libres de abuso sexual infantil.",
};

export default function PrevencionEducativaPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Blocks />
      <CTAStrip />
    </main>
  );
}
