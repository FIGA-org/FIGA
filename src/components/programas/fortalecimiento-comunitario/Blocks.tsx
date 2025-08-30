import Image from "next/image";
import { Building2, BriefcaseBusiness, UsersRound, Network, Megaphone } from "lucide-react";

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
        <div className="relative h-40 sm:h-48 w-full">
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
          icon={BriefcaseBusiness}
          title="Capacitación institucional y empresarial"
          image="/images/actividad9.jpg"
        >
          Ofrecemos capacitación con cuota de recuperación para empresas e instituciones comprometidas
          con entornos laborales seguros. Nuestras terapeutas abordan retos clave de RR. HH. —como
          la alta rotación vinculada a problemáticas no visibles— y brindan herramientas para el
          bienestar psicosocial del personal y la prevención de riesgos.
        </Card>

        <Card
          icon={Network}
          title="Redes de protección de personas voluntarias"
          image="/images/actividad4.jpeg"
        >
          Fomentamos redes integradas por personas voluntarias, talleristas y profesionales que comparten
          nuestro compromiso con la infancia. Compartimos información, recursos y promovemos procesos de
          investigación científica para comprender y fortalecer el compromiso de las personas cuidadoras.
        </Card>

        <Card
          icon={Megaphone}
          title="Campañas de concientización"
          image="/images/actividad1.webp"
        >
          Desarrollamos campañas dinámicas y constantes en redes sociales, eventos presenciales y
          acciones de ciberactivismo para informar, sensibilizar y movilizar a la sociedad: derribar mitos,
          promover crianza respetuosa y posicionar la protección de la niñez en la agenda pública.
        </Card>
      </div>
    </section>
  );
}
