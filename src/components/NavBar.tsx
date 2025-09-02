"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Nuestro Impacto", href: "/#impacto" },
    { label: "Programas", href: "/#programas" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Tiendita Con Causa", href: "https://arenito.mercadoshops.com.mx/" },
    { label: "Participa", href: "https://fundaciongranitodearena.ipzmarketing.com/f/QjJs1yuomuA" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-gradient-to-r
                 from-blue-700/30 via-blue-500/10 to-red-400/30
                 backdrop-blur-md shadow-md"
      style={{ WebkitBackdropFilter: "saturate(120%) blur(4px)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* LOGO — auto-size by screen height classes */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Fundación Granito de Arena"
            width={420}              // large intrinsic for crispness
            height={120}
            priority
            className="h-8 sm:h-10 md:h-12 w-auto"
            // h-8 on phones, h-10 on small tablets, h-12 on md+
          />
        </Link>

        {/* DESKTOP NAV (hidden on mobile/tablet) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7 text-white font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm xl:text-base whitespace-nowrap transition-colors hover:text-white hover:font-bold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DONATE BUTTON (always visible) */}
        <Link
          href="/donar"
          className="bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition
                     text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
        >
          Donar ahora
        </Link>
      </div>
    </header>
  );
}
