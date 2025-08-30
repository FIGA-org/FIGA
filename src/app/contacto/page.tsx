import ContactInfo from "@/components/contacto/ContactInfo";
import SocialLinks from "@/components/contacto/SocialLinks";

export const metadata = {
  title: "Contacto | Fundación Granito de Arena",
  description:
    "Escríbenos por WhatsApp o correo. Estamos en Tuxtla Gutiérrez, Chiapas. También puedes seguirnos en redes sociales.",
};

export default function ContactoPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(38,87,235,.10) 0%, rgba(222,97,97,.10) 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">Contacto</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Estamos aquí para <span className="text-blue-700">ayudarte</span>
          </h1>
          <p className="mt-3 text-gray-700">
            Escríbenos para solicitar apoyo, coordinar capacitaciones o unirte como voluntario/a.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <ContactInfo />
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
