import {
    ShieldCheck,
    GraduationCap,
    Landmark,
    BadgeCheck,
    Users,
    Target,
    LineChart,
  } from "lucide-react";
  
  export default function AboutBlock() {
    return (
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About copy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-blue-700">
              ¿Quiénes somos?
            </h2>
  
            <p className="mt-4 font-sans text-gray-800">
              Somos una fundación con sede en Chiapas que brinda atención a niñas y niños
              sobrevivientes de abuso sexual —incluyendo menores con discapacidad— e impulsa
              políticas públicas y proyectos de protección a la niñez y juventud. Somos la única
              organización en el estado con este enfoque, registrada y acreditada ante el Sistema DIF
              Nacional y Estatal.
            </p>
  
            <ul className="mt-6 space-y-3 font-sans text-gray-800">
              <li className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Atención especializada</strong> y enfoque integral.</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span><strong>Prevención y educación</strong> con apoyo psicológico.</span>
              </li>
              <li className="flex items-start gap-2">
                <Landmark className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Trabajo en redes</strong> y políticas públicas.</span>
              </li>
            </ul>
          </div>
  
          {/* Right: stat/info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                k: "Acreditación",
                v: "Sistema DIF Nacional y Estatal",
                color: "border-blue-500",
                Icon: BadgeCheck,
              },
              {
                k: "Alcance",
                v: "Única en Chiapas con este modelo",
                color: "border-orange-500",
                Icon: Users,
              },
              {
                k: "Misión",
                v: "Proteger la infancia y construir comunidades seguras",
                color: "border-red-500",
                Icon: Target,
              },
              {
                k: "Compromiso",
                v: "Transparencia y resultados medibles",
                color: "border-emerald-500",
                Icon: LineChart,
              },
            ].map((it, i) => (
              <article
                key={i}
                className={`bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border-l-4 ${it.color} p-5`}
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <it.Icon className="h-5 w-5 text-blue-700" aria-hidden />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-gray-500">{it.k}</p>
                    <p className="font-display font-semibold text-gray-900">
                      {it.v}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  