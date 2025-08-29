import Link from "next/link";
import {
  FileText,
  HandCoins,
  Award,
  FileCheck,
  Handshake,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function FinalTransparencyCTA() {
  return (
    <section className="bg-blue-50 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 px-8 py-10 text-center">
          <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2">
            Transparencia total en cada donación
          </h3>
          <p className="font-sans text-gray-600 mb-8">
            Accede a nuestros reportes financieros, auditorías y documentos de autorización.
            Tu confianza es nuestra prioridad.
          </p>

          {/* Primary actions */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/transparencia"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md 
                         font-display font-semibold hover:bg-blue-700 transition"
            >
              <FileText className="h-5 w-5" />
              Ver documentos
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/donar"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-md 
                         font-display font-semibold hover:bg-orange-700 transition"
            >
              <HandCoins className="h-5 w-5" />
              Donar ahora
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mini stat cards */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "12+ años de experiencia",
                Icon: Award,
                tint: "text-blue-600",
              },
              {
                label: "Auditorías anuales",
                Icon: FileCheck,
                tint: "text-emerald-600",
              },
              {
                label: "Alianzas estratégicas",
                Icon: Handshake,
                tint: "text-indigo-600",
              },
              {
                label: "Presencia regional",
                Icon: MapPin,
                tint: "text-rose-600",
              },
            ].map(({ label, Icon, tint }, i) => (
              <article
                key={i}
                className="bg-white rounded-xl px-4 py-3 shadow-md ring-1 ring-black/5 
                           flex items-center justify-center gap-2 text-center
                           transition-all duration-300 hover:-translate-y-0.5 
                           hover:shadow-[0_0_24px_rgba(37,99,235,0.25)]"
              >
                <Icon className={`h-5 w-5 ${tint}`} aria-hidden />
                <span className="font-sans text-sm text-gray-700">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
