import Link from "next/link";
import { GlobeLock, ReceiptText, Home } from "lucide-react";
import { sat } from "@/data/transparencia";

export default function Hero() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">Transparencia</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
            Cuentas claras, <span className="text-blue-700">confianza total</span>
          </h1>
          <p className="mt-4 text-gray-700">
            Somos donataria autorizada y publicamos estados financieros, informes y resultados de impacto
            para que cualquier persona pueda verificarlos.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href={sat.portalUrl}
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
            >
              <GlobeLock className="w-5 h-5" />
              Portal SAT
            </Link>
            <Link
              href="/docs/a03-informe-de-transparencia-sat.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md font-semibold hover:bg-gray-50"
            >
              <ReceiptText className="w-5 h-5" />
              Instrucciones SAT
            </Link>
            <Link
              href="https://sii.bienestar.gob.mx/portal/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700"
            >
              <Home className="w-5 h-5" />
              Portal bienestar
            </Link>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            RFC: <span className="font-semibold">{sat.rfc}</span> · Denominación: {sat.denomination}
          </p>
        </div>

        {/* Visual summary card */}
        <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
          <h3 className="font-semibold text-gray-900">Resumen de autorización</h3>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Oficio</dt>
              <dd className="font-medium">{sat.oficio}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Fecha</dt>
              <dd className="font-medium">{sat.oficioDate}</dd>
            </div>
            <div>
              <dt className="text-gray-500">RFC</dt>
              <dd className="font-medium">{sat.rfc}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Entidad</dt>
              <dd className="font-medium">SAT / Donatarias</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
