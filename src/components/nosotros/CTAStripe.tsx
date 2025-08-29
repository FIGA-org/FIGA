import Link from "next/link";
import { founder } from "@/data/founder";
import { Shield, HandCoins, User } from "lucide-react";

export default function CTAStripe() {
  return (
    <section className="px-6 pb-20 pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-10 md:p-14 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white shadow-2xl">
          {/* Heading */}
          <h3 className="text-xl md:text-2xl font-display font-extrabold mb-3 flex items-center gap-3">
            <Shield className="h-6 w-6 text-white/90" />
            Tu apoyo protege la infancia hoy
          </h3>

          {/* Body */}
          <p className="font-sans text-white/90 max-w-3xl">
            Súmate a la prevención, apoyo psicológico y fortalecimiento comunitario.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/donar"
              className="inline-flex items-center gap-2 bg-white text-blue-800 font-display font-semibold px-6 py-3 rounded-md 
                         shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <HandCoins className="h-5 w-5" />
              Donar
            </Link>
            <Link
              href={founder.carrd}
              target="_blank"
              className="inline-flex items-center gap-2 bg-transparent border border-white px-6 py-3 rounded-md 
                         font-display font-semibold hover:bg-white hover:text-blue-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <User className="h-5 w-5" />
              Ver perfil de la fundadora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
