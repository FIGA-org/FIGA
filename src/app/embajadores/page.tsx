import ProfileSection from "@/components/embajadores/ProfileSection";
import CTAStripe from "@/components/nosotros/CTAStripe";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Embajadores | Fundación Granito de Arena",
  description: "Conoce a las personalidades que respaldan nuestra misión de proteger a la infancia, como la Dra. Silvia Olmedo.",
};

export default function EmbajadoresPage() {
  return (
    <>
      <main className="bg-white text-gray-900">
        <ProfileSection />
        <CTAStripe />
      </main>
      <Footer />
    </>
  );
}