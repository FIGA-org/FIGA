import Hero from "@/components/programas/fortalecimiento-comunitario/Hero";
import Blocks from "@/components/programas/fortalecimiento-comunitario/Blocks";
import CTAStrip from "@/components/programas/fortalecimiento-comunitario/CTAStrip";

export const metadata = {
  title: "Fortalecimiento comunitario para una protección integral | Fundación Granito de Arena",
  description:
    "Capacitaciones institucionales, redes de protección con personas voluntarias y campañas de concientización para una infancia segura.",
};

export default function FortalecimientoComunitarioPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Blocks />
      <CTAStrip />
    </main>
  );
}
