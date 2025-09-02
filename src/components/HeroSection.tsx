import Image from "next/image";
import { Award, HeartHandshake, Users, ShieldCheck, FileText, MapPin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] bg-gray-900 text-white overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <Image src="/images/hero-bg.png" alt="Fondo de un nino levantando la mano en senal de protección" fill className="object-cover opacity-95" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#001f3f]/80 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center h-full">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
                        Protegemos la <span className="text-orange-500">infancia</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 max-w-xl">
                        Prevención del abuso sexual infantil y apoyo psicológico especializado para construir comunidades más seguras.
                    </p>
                    <p className="mt-2 text-sm text-orange-300">
                        Donaciones deducibles de impuestos. ¡Únete a nuestra misión!
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex gap-4 flex-wrap">
                        <Link
                            href="/donar"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-gray-900"
                        >
                            <HeartHandshake className="h-5 w-5" aria-hidden />
                            Ayúdanos donando
                        </Link>

                        <Link
                            href="https://fundaciongranitodearena.ipzmarketing.com/f/QjJs1yuomuA"
                            className="inline-flex items-center gap-2 border border-white/80 px-5 py-2 rounded-md text-white font-semibold hover:bg-white hover:text-blue-900 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
                        >
                            <Users className="h-5 w-5" aria-hidden />
                            Únete a la causa
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-orange-200/90">
                        <span className="inline-flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-emerald-400" aria-hidden />
                            Fundación autorizada
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <FileText className="h-5 w-5 text-sky-300" aria-hidden />
                            Transparencia total
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-orange-300" aria-hidden />
                            Chiapas, México
                        </span>
                    </div>
                </div>

                {/* Right-side image */}
                <div className="mt-10 md:mt-0 md:flex justify-end hidden">
                    <div className="relative w-[540px] h-[350px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 group hover:rotate-3 hover:-rotate-3">
                        <Image
                            src="/images/team.jpeg"
                            alt="Niña en consulta"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-5 py-3 text-xs rounded-lg font-bold shadow-md inline-flex items-center gap-2">
                            {/* Example with icon */}
                            <Award className="h-4 w-4 text-white" strokeWidth={2} aria-hidden />
                            12+ años de experiencia
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
