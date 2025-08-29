import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              alt="Fundación Granito"
              className="h-22 w-auto"
            />
          </div>
          <p className="font-sans text-white/80 text-sm leading-relaxed">
            Protegiendo la infancia con prevención, apoyo psicológico y
            alianzas comunitarias.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wide">
            Navegación
          </h4>
          <ul className="space-y-2 text-white/90 font-sans text-sm">
            {[
              { label: "Nosotros", href: "/nosotros" },
              { label: "Programas", href: "#programas" },
              { label: "Impacto", href: "#impacto" },
              { label: "Transparencia", href: "/transparencia" },
              { label: "Donar", href: "/donar" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wide">
            Contacto
          </h4>
          <ul className="space-y-3 text-white/90 font-sans text-sm">
            <li>Tuxtla Gutiérrez, Chiapas</li>
            <li>contacto@fundaciongranito.org</li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=529613697151&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <FaWhatsapp className="h-5 w-5 text-green-500" />
                +52 961-230-7734
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://facebook.com/595462060642009"
              aria-label="Facebook"
              className="p-2 bg-white/10 rounded-lg hover:bg-blue-600 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/elenafundacion"
              aria-label="Instagram"
              className="p-2 bg-white/10 rounded-lg hover:bg-pink-500 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Elena_Fundacion"
              aria-label="Twitter"
              className="p-2 bg-white/10 rounded-lg hover:bg-blue-400 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/elena-torres-villanueva"
              aria-label="LinkedIn"
              className="p-2 bg-white/10 rounded-lg hover:bg-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@elena_fundacion"
              aria-label="TikTok"
              className="p-2 bg-white/10 rounded-lg hover:bg-black transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDiXt1lqvI1zxfKTSeO3_AA"
              aria-label="YouTube"
              className="p-2 bg-white/10 rounded-lg hover:bg-red-600 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wide">
            Boletín
          </h4>
          <p className="font-sans text-white/80 text-sm mb-4">
            Recibe noticias e impacto mensual.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 font-sans">
          <p>
            © {new Date().getFullYear()} Fundación Granito de Arena. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacidad" className="hover:text-white">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}