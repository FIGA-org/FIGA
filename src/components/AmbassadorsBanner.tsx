import Image from "next/image";
import Link from "next/link";

export default function AmbassadorsBanner() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-10 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 text-white shadow-lg relative overflow-hidden">
          {/* subtle circles like the reference */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-white/30" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-white/30" />

          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Embajadores de alto perfil
          </h3>

          {/* Content with image */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Text */}
            <div className="flex-1">
              <p className="text-white/90 max-w-3xl">
                Contamos con el respaldo de personalidades reconocidas y otros
                embajadores como <strong>Silvia Olmedo</strong> comprometidos con la protección infantil, amplificando
                nuestro mensaje y alcance.
              </p>
              <div className="flex gap-4 flex-wrap mt-6">
                <Link
                  href="/noticias"
                  className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Ver noticias
                </Link>
                <Link
                  href="https://fundaciongranitodearena.ipzmarketing.com/f/QjJs1yuomuA"
                  className="bg-transparent border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition"
                >
                  Únete como embajador
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/silvia.jpeg"
                alt="Silvia Olmedo"
                className="w-60 h-65 md:w-60 md:h-65 rounded-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}