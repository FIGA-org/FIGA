"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Nuestro Impacto", href: "/#impacto" },
    { label: "Programas", href: "/#programas" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Tiendita con causa", href: "https://tienda.fundaciongranitodearena.org" },
    { label: "Participa", href: "https://fundaciongranitodearena.ipzmarketing.com/f/QjJs1yuomuA" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r
                 from-slate-950/95 via-blue-950/95 to-slate-900/95
                 backdrop-blur-md shadow-lg"
      style={{ WebkitBackdropFilter: "saturate(120%) blur(4px)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* LOGO — auto-size by screen height classes */}
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
        >
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
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-5 text-white font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-sm text-sm text-white/95 transition-colors hover:text-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 xl:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DONATE BUTTON (always visible) */}
        <Link
          href="/donar"
          className="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 sm:px-4 sm:py-2 sm:text-sm"
        >
          Donar ahora
        </Link>
      </div>
    </header>
  );
}
