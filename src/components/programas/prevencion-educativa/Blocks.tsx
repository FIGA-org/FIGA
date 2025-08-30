import Image from "next/image";
import { Users, GraduationCap, School } from "lucide-react";

function Card({
  icon: Icon,
  title,
  children,
  image,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <article className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden">
      {image && (
        <div className="relative h-80 sm:h-64 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-extrabold">{title}</h3>
        </div>
        <div className="mt-3 text-gray-700 leading-relaxed">{children}</div>
      </div>
    </article>
  );
}

export default function Blocks() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          icon={Users}
          title="Talleres para la infancia"
          image="/images/actividad5.jpeg"
        >
          Ofrecemos talleres lúdicos y educativos adaptados a cada etapa del desarrollo,
          comenzando desde la primera infancia. A través de actividades apropiadas para su
          edad, enseñamos a niñas y niños a reconocer sus emociones, establecer límites
          personales y saber cómo y a quién pedir ayuda. Nuestro objetivo es empoderarles
          con herramientas de autoprotección en un lenguaje que puedan comprender y aplicar.
        </Card>

        <Card
          icon={GraduationCap}
          title="Capacitación para personas cuidadoras y tutoras"
          image="/images/actividad7.png"
        >
          Madres, padres, familiares y tutores son la primera línea de defensa. Impartimos
          capacitaciones especializadas para fortalecer sus habilidades de cuidado y
          protección. Estos espacios se ofrecen principalmente en centros educativos
          que nos abren sus puertas, con flexibilidad para formatos en línea. Juntos,
          creamos una red de adultos informados y preparados para actuar.
        </Card>

        <Card
          icon={School}
          title="Formación docente especializada"
          image="/images/actividad2.webp"
        >
          El personal docente y las instituciones educativas son aliados clave. Nuestro
          programa dota a las y los profesionales de la educación con herramientas para la
          prevención del ASI, con enfoque en derechos humanos: identificar señales de alerta,
          actuar de manera adecuada y evitar la revictimización, asegurando que la escuela
          sea siempre un lugar seguro.
        </Card>
      </div>
    </section>
  );
}
