import Image from "next/image";
import {
    Baby,
    Users,
    GraduationCap,
    Home,
    ShieldCheck,
    Brain,
    Handshake,
    Award
} from "lucide-react";

const stats = [
    { number: "500+", label: "Niños protegidos", icon: Baby },
    { number: "200+", label: "Familias apoyadas", icon: Users },
    { number: "50+", label: "Talleres impartidos", icon: GraduationCap },
    { number: "15+", label: "Comunidades atendidas", icon: Home },
];

export default function ImpactSection() {
    return (
        <section className="bg-blue-50 py-20 px-6" id="impacto">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-4xl font-display font-bold text-blue-700 mb-4">
                    Nuestro <span className="text-black">impacto</span>
                </h2>
                <p className="font-sans text-gray-700 max-w-2xl mx-auto mb-12">
                    Más de una década protegiendo a la infancia y construyendo comunidades más seguras a través de prevención, apoyo y educación especializada.
                </p>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg shadow-xl ring-1 ring-blue-100 p-6 flex flex-col items-center text-center 
             hover:shadow-2xl hover:ring-blue-200 transition-all duration-300"
                        >
                            <stat.icon
                                className="h-10 w-10 text-blue-600 mb-3"
                                strokeWidth={2}
                                aria-hidden
                            />
                            <div className="text-2xl font-display font-bold text-blue-700">
                                {stat.number}
                            </div>
                            <div className="text-sm font-sans text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Impact Image + Text */}
                <div className="grid md:grid-cols-2 items-center gap-12 text-left">
                    {/* Image */}
                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/impact-photo.png"
                            alt="Voluntarios ayudando en comunidad"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm">
                                <Award className="h-5 w-5 text-white drop-shadow" strokeWidth={2} />
                                <span className="text-white font-display font-bold text-lg drop-shadow">
                                    12+ Años
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
                            Transformando vidas,{" "}
                            <span className="text-blue-600">Construyendo esperanza</span>
                        </h3>
                        <p className="font-sans text-gray-700 mb-6">
                            Desde Tuxtla Gutiérrez, Chiapas, extendemos nuestro alcance a
                            comunidades vulnerables, zonas fronterizas y poblaciones
                            migrantes. Nuestro enfoque integral combina prevención, educación
                            y apoyo psicológico especializado.
                        </p>

                        <ul className="font-sans text-sm text-gray-700 space-y-3">
                            <li className="flex items-start gap-2">
                                <ShieldCheck className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                <span>
                                    <strong>Prevención especializada:</strong> Educación para
                                    niños, familias y comunidades.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Brain className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                                <span>
                                    <strong>Apoyo psicológico:</strong> Atención a sobrevivientes
                                    y familias.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Handshake className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>
                                    <strong>Alianzas estratégicas:</strong> Trabajo con
                                    instituciones y embajadores.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
