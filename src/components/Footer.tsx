import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-10 lg:gap-12">
        {/* Brand */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              width={220}
              height={70}
              alt="Fundación Granito"
              className="h-14 w-auto"
            />
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Protegiendo la infancia con prevención, apoyo psicológico y alianzas comunitarias.
          </p>
        </div>

        {/* Navegación */}
        <div className="min-w-0">
          <h4 className="font-semibold mb-4 text-sm tracking-wide">Navegación</h4>
          <ul className="space-y-2 text-white/90 text-sm">
            {[
              { label: "Nosotros", href: "/nosotros" },
              { label: "Programas", href: "/#programas" },
              { label: "Impacto", href: "/#impacto" },
              { label: "Transparencia", href: "/transparencia" },
              { label: "Donar", href: "/donar" },
              { label: "Tiendita Con Causa", href: "https://arenito.mercadoshops.com.mx/" },
              { label: "Contacto", href: "/contacto" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-white transition"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="min-w-0">
          <h4 className="font-semibold mb-4 text-sm tracking-wide">Contacto</h4>
          <ul className="space-y-3 text-white/90 text-sm">
            <li>Tuxtla Gutiérrez, Chiapas</li>
            <li className="break-all">contacto@fundaciongranito.org</li>
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
          <div className="flex flex-wrap gap-3 mt-5">
            {[
              { href: "https://www.facebook.com/granitodarena", Icon: FaFacebookF, hover: "hover:bg-blue-600" },
              { href: "https://www.instagram.com/fgranitodearena", Icon: FaInstagram, hover: "hover:bg-pink-500" },
              { href: "https://x.com/Elena_Fundacion", Icon: FaTwitter, hover: "hover:bg-blue-400" },
              { href: "https://www.linkedin.com/in/fundaci%C3%B3n-internacional-granito-de-arena-82653a366/", Icon: FaLinkedinIn, hover: "hover:bg-blue-700" },
              { href: "https://www.tiktok.com/@elena_fundacion", Icon: FaTiktok, hover: "hover:bg-black" },
              { href: "https://www.youtube.com/@fgranitodearena", Icon: FaYoutube, hover: "hover:bg-red-600" },
            ].map(({ href, Icon, hover }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all hover:scale-110 ${hover}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="min-w-0 lg:max-w-sm xl:max-w-md">
          <h4 className="font-semibold mb-4 text-sm tracking-wide">Boletín</h4>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/70">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Fundación Granito de Arena. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
