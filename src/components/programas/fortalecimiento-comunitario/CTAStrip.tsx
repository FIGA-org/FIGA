import Link from "next/link";
import { Building2, UsersRound } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white shadow-lg">
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">
            ¿Tu organización o comunidad quiere sumarse?
          </h3>
          <p className="text-white/90">
            Organizamos capacitaciones para empresas e instituciones y articulamos redes de voluntariado.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition inline-flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              Solicitar capacitación
            </Link>
            <Link
              href="/participa"
              className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition inline-flex items-center gap-2"
            >
              <UsersRound className="w-4 h-4" />
              Unirme como voluntario/a
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
