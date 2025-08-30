"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient bg */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(38,87,235,.10) 0%, rgba(222,97,97,.10) 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">
            Programa
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Prevención educativa <span className="text-blue-700">para un futuro seguro</span>
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            En Fundación Granito de Arena, creemos que la educación es la herramienta más poderosa para
            proteger a la niñez. Nuestro programa de prevención educativa está diseñado para construir
            entornos seguros y conscientes, libres de abuso sexual infantil (ASI). Creamos una cultura de
            protección a través de la información y la formación, dirigida a todas las personas que
            rodean a un niño, niña o adolescente.
          </p>
        </div>

        {/* optional hero image */}
        <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/actividad3.jpeg"
            alt="Prevención educativa"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
