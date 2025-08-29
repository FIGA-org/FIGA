import Hero from "@/components/transparencia/Hero";
import KPICards from "@/components/transparencia/KPICards";
import CommitmentsStrip from "@/components/transparencia/CommitmentsStrip";

export const metadata = {
  title: "Transparencia | Fundación Granito de Arena",
  description:
    "Estados financieros, informes y portal SAT. Nuestra rendición de cuentas en un solo lugar.",
};

export default function TransparenciaPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <KPICards />
      <CommitmentsStrip />
    </main>
  );
}
