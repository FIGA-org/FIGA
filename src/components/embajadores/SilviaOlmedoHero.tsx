import Image from "next/image";
import Link from "next/link";
import { Award, HandCoins, MessageCircle } from "lucide-react";

export default function SilviaOlmedoHero() {
  return (
    <section className="relative">
      {/* Fondo degradado sutil */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(38,87,235,.12), rgba(222,97,97,.12))",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-700" />
            Nuestra Embajadora
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold mt-2">
            Silvia Olmedo:{" "}
            <span className="text-blue-700">
              Una voz por la salud emocional
            </span>
          </h1>
          <p className="mt-3 text-gray-600">
            Psicóloga (PhD), sexóloga, escritora y divulgadora.
          </p>
          <p className="mt-4 text-lg text-gray-800 font-sans">
            Estamos increíblemente orgullosos de contar con Silvia Olmedo como
            embajadora. Su destacada trayectoria y su profundo compromiso con
            la salud mental y el bienestar la convierten en una aliada
            fundamental para amplificar nuestro mensaje de protección a la
            infancia.
          </p>

          {/* Botones */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/donar"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-display font-semibold px-5 py-2 rounded-md shadow-md 
                         hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <HandCoins className="h-5 w-5" />
              Apoya nuestra causa
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=529613697151&text&type=phone_number&app_absent=0"
              target="_blank"
              className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-md font-display font-semibold 
             hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-full h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/silvia.jpeg"
            alt="Silvia Olmedo"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay opcional */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Etiqueta */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold text-blue-800 shadow-lg flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-700" />
            Embajadora FIGA
          </div>
        </div>
      </div>
    </section>
  );
}