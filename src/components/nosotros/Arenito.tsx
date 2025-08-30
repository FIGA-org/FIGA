import Image from "next/image";
import { User, Handshake, ShieldCheck, Home, Shield, ShoppingCart } from "lucide-react";

export default function ArenitoSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left: Image */}
            <div className="relative min-h-[320px] md:min-h-[420px] bg-gray-50 flex flex-col items-center justify-center">
              <Image
                src="/images/arenito.png"
                alt="Arenito, nuestra mascota contra el abuso infantil"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
              {/* Button */}
              <a
                href="https://arenito.mercadoshops.com.mx/MLM-2133842979-peluche-de-arenito-fundacion-granito-de-arena-_JM?searchVariation=181543136446#polycard_client=search-nordic-mshops&searchVariation=181543136446&position=1&search_layout=grid&type=item&tracking_id=b69e0486-3437-4c7d-91fc-58ea097aa263"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Adquiere a Arenito
              </a>
            </div>

            {/* Right: Copy */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Arenito,{" "}
                <span className="text-blue-700">
                  nuestra mascota contra el abuso infantil
                </span>
              </h2>
              <p className="mt-3 text-gray-600">
                Arenito enseña reglas simples y poderosas para que niñas y niños se mantengan seguros.
              </p>

              <ol className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <User className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">1. Mi Cuerpo</p>
                    <p className="text-gray-600 text-sm">
                      Nadie puede ver ni tocar mis partes privadas.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Handshake className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">2. Personas de confianza</p>
                    <p className="text-gray-600 text-sm">
                      Aquellas que me cuidan, creen y protegen.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">3. Secretos</p>
                    <p className="text-gray-600 text-sm">
                      Nadie debe pedirme guardar secretos que me lastimen a mí o a otros.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Home className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">4. Protección</p>
                    <p className="text-gray-600 text-sm">
                      Existen lugares y personas que me protegen.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Shield className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">5. Blindaje</p>
                    <p className="text-gray-600 text-sm">
                      Mi blindaje es mi escudo protector contra el abuso.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/HApsj0vj3fU?autoplay=1&mute=1"
              title="Arenito Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}