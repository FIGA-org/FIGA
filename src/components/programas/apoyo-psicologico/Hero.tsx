"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
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
            Apoyo psicológico <span className="text-blue-700">para sanar y renacer</span>
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            El camino de la sanación después de una experiencia de abuso sexual infantil requiere
            acompañamiento profesional y empático. En Fundación Granito de Arena, ofrecemos un
            servicio de apoyo psicológico especializado para ayudar a niños, niñas y adolescentes
            a procesar el trauma, reconstruir su confianza y recuperar su bienestar emocional.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Nuestro equipo de terapeutas utiliza enfoques basados en la evidencia y adaptados a las
            necesidades individuales de cada paciente, creando un espacio seguro y confidencial
            donde pueden expresar sus sentimientos y comenzar a sanar.
          </p>
        </div>

        {/* optional hero image */}
        <div className="relative h-100 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/actividad10.jpg"
            alt="Apoyo psicológico especializado"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
