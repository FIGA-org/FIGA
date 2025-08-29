import Link from "next/link";
import { HandCoins, Users, Shield } from "lucide-react";

export default function BottomBanner() {
  return (
    <section className="px-6 pb-20 pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-10 md:p-14 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white shadow-2xl">
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-4 flex items-center gap-3">
            <Shield className="h-8 w-8 text-white/90" />
            Tu apoyo protege la infancia hoy
          </h3>

          {/* Body */}
          <p className="font-sans text-white/90 mb-8 max-w-3xl">
            Cada donación impulsa programas de prevención, apoyo psicológico y fortalecimiento comunitario.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/donar"
              className="inline-flex items-center gap-2 bg-white text-blue-800 font-display font-semibold px-6 py-3 rounded-md 
                         shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <HandCoins className="h-5 w-5" />
              Donar ahora
            </Link>
            <Link
              href="https://fundaciongranitodearena.ipzmarketing.com/f/QjJs1yuomuA"
              className="inline-flex items-center gap-2 bg-transparent border border-white px-6 py-3 rounded-md 
                         font-display font-semibold hover:bg-white hover:text-blue-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Users className="h-5 w-5" />
              Participa como voluntario
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
