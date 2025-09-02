import Image from "next/image";
import {
  ShieldCheck,
  BarChart3,
  LineChart,
  ChevronRight,
  BadgeDollarSign,
  Building2,
} from "lucide-react";

type Item = {
  title: string;
  subtitle: string;
  body: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  {
    title: "Fundación autorizada",
    subtitle: "Oficio 600-01-06-00-00-2021-1525",
    body:
      "Autorización oficial desde diciembre 10, 2022. Tus donaciones son 100% deducibles de impuestos.",
    icon: ShieldCheck,
  },
  {
    title: "Transparencia financiera",
    subtitle: "Reportes anuales disponibles",
    body:
      "Publicamos informes financieros anuales detallados. Cada donación es rastreada y utilizada exclusivamente para nuestros programas.",
    icon: BarChart3,
  },
  {
    title: "Seguimiento de impacto",
    subtitle: "Resultados medibles",
    body:
      "Proporcionamos métricas claras del impacto en beneficiarios y resultados alcanzados en nuestras comunidades.",
    icon: LineChart,
  },
];

export default function TransparencySection() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: cards */}
        <div>
          <h2 className="text-4xl font-display font-extrabold text-blue-700 text-center md:text-left">
            Transparencia <span className="text-gray-900">y confianza</span>
          </h2>
          <p className="font-sans text-gray-700 mt-3 mb-8 text-center md:text-left">
            Somos una fundación autorizada que opera con total transparencia.
            Tus donaciones son <strong>deducibles de impuestos</strong> y cada
            peso se invierte directamente en proteger a la infancia.
          </p>

          <div className="space-y-5">
            {items.map((it, i) => (
              <article
                key={i}
                className={`
                  group bg-white rounded-2xl
                  shadow-lg ring-1 ring-black/5
                  transition-all duration-300
                  hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]
                  hover:-translate-y-0.5
                  p-5 flex items-start gap-4
                `}
              >
                {/* Icon pill */}
                <div
                  className={`
                    h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700
                    text-white flex items-center justify-center
                    shadow-md ring-1 ring-white/40
                  `}
                >
                  <it.icon className="h-6 w-6" aria-hidden />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-semibold text-gray-900">
                    {it.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500">
                    {it.subtitle}
                  </p>
                  <p className="font-sans text-sm text-gray-700 mt-2">
                    {it.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right: image with corner badges */}
        <div className="relative">
          <div className="relative w-full h-64 md:h-[320px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-100">
            <Image
              src="/images/actividad5.jpeg"
              alt="Sesión con familia"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -right-3 -top-3 bg-blue-600 text-white text-sm px-4 py-3 rounded-lg shadow-md flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            <span className="font-display font-semibold">
              Fundación autorizada
            </span>
          </div>
          <div className="absolute -left-3 -bottom-3 bg-orange-500 text-white text-sm px-4 py-3 rounded-lg shadow-md flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            <span className="font-display font-semibold">
              Deducible de impuestos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
