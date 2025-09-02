"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide on scroll down
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScrollY && y > 50);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

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
      className={`relative z-[9999] shadow-md sticky top-0 transform transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } bg-gradient-to-r from-blue-700/30 via-blue-500/10 to-red-400/30 backdrop-blur-md`}
      style={{ WebkitBackdropFilter: "saturate(120%) blur(4px)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-16 lg:h-18 flex items-center">
        {/* DESKTOP (lg+) */}
        <div className="hidden lg:flex w-full items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={170}
              height={54}
              className="h-12 w-auto lg:h-12 xl:h-14"
              priority
            />
          </Link>

          <nav className="flex-1 flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8 font-medium text-white">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] xl:text-sm whitespace-nowrap transition-colors duration-200 hover:text-white hover:font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/donar"
            className="shrink-0 bg-white text-blue-700 font-semibold px-3 py-1.5 xl:px-4 xl:py-2 rounded-md hover:bg-gray-100 transition text-sm"
          >
            Donar ahora
          </Link>
        </div>

        {/* MOBILE / TABLET (<lg) */}
        <div className="flex lg:hidden w-full items-center justify-between relative">
          <button
            type="button"
            className="h-12 w-12 -ml-1 inline-flex items-center justify-center text-white rounded-md active:scale-95 relative z-[100]"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Tiny center logo on md (optional) */}
          <Link href="/" className="hidden md:block pointer-events-auto">
            <Image src="/images/logo.png" alt="Logo" width={140} height={40} className="h-10 w-auto" priority />
          </Link>

          <Link
            href="/donar"
            className="bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition text-sm px-3 py-1.5 md:px-4 md:py-2"
            onClick={() => setMobileOpen(false)}
          >
            Donar ahora
          </Link>

          {/* DROPDOWN: lives INSIDE the header, under the bar */}
          <div
            className={`absolute top-full left-0 right-0 origin-top transition-transform ${
              mobileOpen ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ transformOrigin: "top" }}
          >
            <nav className="bg-[#001f3f] text-white px-4 pb-4 pt-2 space-y-2 shadow-xl rounded-b-md">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-base font-medium hover:text-blue-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
