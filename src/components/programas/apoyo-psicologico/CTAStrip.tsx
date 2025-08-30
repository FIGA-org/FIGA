import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white shadow-lg">
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">
            ¿Buscas apoyo o quieres ayudar a financiar una terapia?
          </h3>
          <p className="text-white/90">
            Agenda una valoración, solicita información de la cuota de recuperación o
            apoya para que otra niña, niño o adolescente reciba atención gratuita.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Solicitar atención
            </Link>
            <Link
              href="/donar"
              className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition"
            >
              Apoyar terapias gratuitas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
