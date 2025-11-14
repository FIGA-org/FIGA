import Image from "next/image";
import Link from "next/link";
import { Award, HandCoins, User, MessageCircle, Heart, Tv, BookOpen } from "lucide-react";

// Datos de la embajadora
const ambassador = {
  name: "Dra. Silvia Olmedo",
  title: "Psicóloga, PhD, Sexóloga y Autora",
  bio: `Como una de las psicólogas más influyentes de habla hispana, Silvia Olmedo ha dedicado su carrera a la divulgación de la salud mental y emocional. Afincada en México, ha sido productora y presentadora de programas de gran impacto en Televisa, como "Amordidas".
  
Es autora de múltiples best sellers, incluyendo "Pregúntale a Silvia", "Mis sentimientos erróneos" y "Detox emocional". Su destacada trayectoria ha sido reconocida con prestigiosos galardones, como el premio a la "Mujer del Año" por la Cámara de Comercio de México y el nombramiento de "Embajadora de la Salud" por la Secretaría de Salud de México.`,
  photo: "/images/silvia.jpeg",
  externalLink: "https://silviaolmedo.com", // Puedes cambiar esto por el enlace que prefieras
};

export default function ProfileSection() {
  return (
    <section className="relative">
      {/* Fondo con gradiente suave */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(38,87,235,.12), rgba(222,97,97,.12))",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto del perfil */}
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-700" />
            Embajadora de Alto Perfil
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold mt-2">
            <span className="text-blue-700">{ambassador.name}</span>
          </h1>
          <p className="mt-3 text-gray-600">{ambassador.title}</p>
          <p className="mt-4 text-lg text-gray-800 font-sans whitespace-pre-line">
            {ambassador.bio}
          </p>

          {/* Iconos de trayectoria */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2">
              <Tv className="h-5 w-5 text-blue-600" aria-hidden />
              Presentadora y Productora
            </span>
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" aria-hidden />
              Autora Best Seller
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart className="h-5 w-5 text-blue-600" aria-hidden />
              Divulgadora de Psicología
            </span>
          </div>
          
          {/* Botones de acción */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={ambassador.externalLink}
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md font-display font-semibold 
                         shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <User className="h-5 w-5" />
              Conocer su trabajo
            </Link>
            <Link
              href="/donar"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-display font-semibold px-5 py-2 rounded-md shadow-md 
                         hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <HandCoins className="h-5 w-5" />
              Donar a la causa
            </Link>
          </div>
        </div>

        {/* Imagen del perfil */}
        <div className="relative w-full h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={ambassador.photo}
            alt={ambassador.name}
            fill
            className="object-cover"
            priority
          />
          {/* Insignia */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold text-blue-800 shadow-lg flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-700" />
            Voz aliada de la infancia
          </div>
        </div>
      </div>
    </section>
  );
}