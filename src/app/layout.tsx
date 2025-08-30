import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/NavBar";
import { DM_Sans, Playfair_Display } from "next/font/google";

export const metadata = {
  title: "Fundación Granito de Arena",
  description: "Protegiendo la infancia con amor y compromiso.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
