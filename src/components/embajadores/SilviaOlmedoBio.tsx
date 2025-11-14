import {
  Award,
  BookOpen,
  Tv,
  HeartHandshake,
  Brain,
  Globe,
} from "lucide-react";

// Información biográfica clave
const bioItems = [
  {
    icon: Brain,
    title: "Formación Académica",
    text: "Psicóloga (PhD) con Máster en Sexología y formación en psicología forense. Es miembro de la American Psychological Association.",
  },
  {
    icon: Tv,
    title: "Divulgadora Influyente",
    text: "Considerada una de las psicólogas más influyentes en español, con millones de seguidores. Ha conducido exitosos programas en Televisa como 'Amordidas' y 'Terapia de Shock'.",
  },
  {
    icon: BookOpen,
    title: "Autora de Bestsellers",
    text: "Autora de varios libros de gran éxito, entre ellos 'Pregúntale a Silvia', 'Los misterios del amor y el sexo' y 'Mis sentimientos erróneos'.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso Social",
    text: "Colabora activamente con ONGs como México Vivo (prevención de VIH) y forma parte del comité de Vive Consciente (lucha contra VPH).",
  },
  {
    icon: Award,
    title: "Reconocimientos",
    text: "Nombrada 'Embajadora de la Salud' por la Secretaría de Salud de México y reconocida por la Cámara de Comercio de México por su aporte a la psicología.",
  },
  {
    icon: Globe,
    title: "Impacto Global",
    text: "Además de su labor en México, entrena a líderes y startups en Estados Unidos, siendo Vicepresidenta de training en la aceleradora Expert Dojo.",
  },
];

export default function SilviaOlmedoBio() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
          <Award className="h-7 w-7 text-yellow-500" />
          Una Trayectoria de Impacto
        </h2>
        <p className="mt-2 text-gray-700 max-w-2xl">
          La Dra. Olmedo ha dedicado su carrera a la divulgación de la
          psicología, las relaciones y la salud emocional, impactando
          positivamente a millones de personas en el mundo de habla hispana.
        </p>

        {/* Tarjetas de biografía */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bioItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 
                         hover:shadow-lg hover:-translate-y-1 hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <item.icon
                  className="h-7 w-7 text-blue-600 flex-shrink-0"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg font-display font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed mt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}