import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Circle,
  ChevronRight,
} from "lucide-react";

const programs = [
  {
    title: "Prevención educativa",
    description:
      "Talleres especializados para niños, padres y educadores sobre identificación de riesgos, límites corporales y comunicación segura.",
    bullets: [
      "Talleres para la infancia",
      "Capacitación para cuidadores y tutores",
      "Formación docente especializada",
    ],
    icon: ShieldCheck,
    link: "/programas/prevencion-educativa",
    gradient: "from-blue-500 to-blue-700",
    dot: "text-blue-500",
  },
  {
    title: "Apoyo psicológico",
    description:
      "Atención psicológica especializada para sobrevivientes y sus familias, con enfoque en recuperación y fortalecimiento emocional.",
    bullets: [
      "Terapia individual especializada",
      "Apoyo familiar integral",
      "Grupos de apoyo",
      "Terapia a bajo costo"
    ],
    icon: HeartHandshake,
    link: "/programas/apoyo-psicologico",
    gradient: "from-rose-500 to-rose-700",
    dot: "text-rose-500",
  },
  {
    title: "Fortalecimiento comunitario",
    description:
      "Programas de sensibilización y capacitación para líderes comunitarios, instituciones y organizaciones aliadas.",
    bullets: [
      "Capacitación institucional/empresarial",
      "Redes de protección",
      "Campañas de concientización",
    ],
    icon: Users,
    link: "/programas/fortalecimiento-comunitario",
    gradient: "from-orange-500 to-orange-700",
    dot: "text-orange-500",
  },
];

export default function ProgramsSection() {
  return (
    <section
      className="
        relative py-16 px-6
        bg-white
        /* subtle grid background */
        before:absolute before:inset-0 before:-z-10
        before:bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
        before:bg-[size:36px_36px]
      "
      id="programas"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-3">
          Nuestros <span className="text-blue-600">programas</span>
        </h2>
        <p className="font-sans text-gray-600 max-w-2xl mx-auto mb-10">
          Programas integrales diseñados para prevenir, proteger y sanar. Cada
          iniciativa está respaldada por años de experiencia y un enfoque
          especializado.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 border-t4 border-gray-300 pt-6">   
          {programs.map((p, i) => (
            <article
              key={i}
              className="
                bg-sky-50/70 rounded-2xl
                shadow-lg ring-1 ring-black/5
                text-left flex flex-col
                transition-all duration-300
                hover:shadow-2xl hover:-translate-y-0.5
              "
            >
              {/* Icon pill */}
              <div className="p-6">
                <div
                  className={`
                    h-12 w-12 rounded-xl bg-gradient-to-br ${p.gradient}
                    flex items-center justify-center text-white
                    shadow-md ring-1 ring-white/40
                  `}
                >
                  <p.icon className="h-6 w-6" aria-hidden />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 flex-grow">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-gray-700 mb-4">
                  {p.description}
                </p>

                <ul className="font-sans text-sm text-gray-800 space-y-2">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Circle className={`h-3 w-3 mt-1 ${p.dot}`} fill="currentColor" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              <div className="px-6 pb-5 pt-3 mt-auto">
                <Link
                  href={p.link}
                  className="inline-flex items-center gap-1 font-display font-semibold text-blue-600 hover:text-blue-700"
                >
                  Conocer más
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
