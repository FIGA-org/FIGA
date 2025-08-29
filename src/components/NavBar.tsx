"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`shadow-md sticky top-0 z-50 transform transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        background:
          "linear-gradient(to right, rgba(38,87,235,0.3), rgba(222,97,97,0.3))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 font-medium text-white">
          {[
            { label: "Nosotros", href: "/nosotros" },
            { label: "Nuestro Impacto", href: "/#impacto" },
            { label: "Programas", href: "/#programas" },
            { label: "Transparencia", href: "/transparencia" },
            { label: "Tiendita Con Causa", href: "https://arenito.mercadoshops.com.mx/" },
            { label: "Participa", href: "https://fundaciongranitodearena.ipzmarketing.com/f/QjJs1yuomuA" },
            { label: "Noticias", href: "/nosotros" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors duration-200 hover:text-white hover:font-bold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/donar"
          className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition text-sm"
        >
          Donar Ahora
        </Link>
      </div>
    </header>
  );
}