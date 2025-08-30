import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white shadow-lg">
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">
            ¿Quieres llevar este programa a tu escuela o comunidad?
          </h3>
          <p className="text-white/90">
            Coordinamos talleres presenciales y en línea, adaptados por edades y perfiles.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Contáctanos
            </Link>
            <Link
              href="/donar"
              className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition"
            >
              Apoya el programa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
