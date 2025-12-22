import Image from "next/image";
import {
    HeartHandshake,
    Brain,
    ShieldCheck,
    HandHeart,
    MessageSquareHeart,
} from "lucide-react";

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
            <div className="max-w-7xl mx-auto">
                {/* First row: grid for the first three cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        icon={HeartHandshake}
                        title="Acompañamiento terapéutico especializado"
                        image="/images/personal-therapy.png"
                    >
                        Atendemos a niñas, niños y adolescentes sobrevivientes de ASI con
                        acompañamiento clínico sensible al trauma. Priorizamos el vínculo
                        terapéutico, la contención emocional y el restablecimiento de la seguridad.
                    </Card>
                    <Card
                        icon={Brain}
                        title="Enfoques basados en evidencia"
                        image="/images/arenito-evidence.png"
                    >
                        Utilizamos metodologías respaldadas por evidencia y adaptadas a cada
                        proceso: psicoeducación, regulación emocional, abordajes de trauma
                        y trabajo con familia como red de apoyo.
                    </Card>
                    <Card
                        icon={MessageSquareHeart}
                        title="Trabajo con cuidadores y escuela"
                        image="/images/actividad7.png"
                    >
                        Involucramos a madres, padres, tutores y al entorno escolar para reforzar
                        las estrategias de protección y bienestar, siempre con enfoque de derechos
                        y perspectiva de la niñez.
                    </Card>
                </div>
                {/* Second row: flex for the last two cards, centered */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-6">
                    <Card
                        icon={ShieldCheck}
                        title="Espacios seguros y confidenciales"
                    >
                        Creamos condiciones de confianza y confidencialidad para que cada persona
                        pueda expresar sus sentimientos, poner en palabras lo vivido y avanzar
                        hacia su recuperación sin revictimización.
                    </Card>
<Card
    icon={HandHeart}
    title="Terapia particular con doble beneficio"
>
    <p>
        Invierte en tu bienestar y, al mismo tiempo, ayuda a alguien más. Con tu aportación en una terapia particular, nos permites ofrecer <strong>terapia gratuita</strong> a personas que no pueden costearla.
    </p>
    <a 
        href="https://api.whatsapp.com/send?phone=5219613697151&text=Hola%2C%20me%20interesa%20agendar%20una%20terapia%20particular%20con%20el%20modelo%20de%20doble%20beneficio.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F%20%F0%9F%98%8A"
        target="_blank" 
        rel="noopener noreferrer"
        style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#25D366',
            color: 'white',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold'
        }}
    >
        Agendar terapia por WhatsApp
    </a>
</Card>
                </div>
            </div>
        </section>
    );
}
