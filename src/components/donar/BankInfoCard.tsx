"use client";
import { Copy, Mail } from "lucide-react";
import { useState } from "react";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="flex items-center justify-between rounded-md bg-blue-50/60 px-3 py-2">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-blue-700/80">{label}</p>
        <p className="font-mono text-sm text-blue-900">{value}</p>
      </div>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(value.replace(/\s+/g, " "));
          setOk(true);
          setTimeout(() => setOk(false), 1200);
        }}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium
                   text-blue-700 hover:bg-blue-100 active:scale-[0.98] transition"
        aria-label={`Copiar ${label}`}
      >
        <Copy className="h-4 w-4" />
        {ok ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

export default function BankInfoCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <h3 className="font-display text-xl font-bold text-gray-900">Datos bancarios</h3>
      <p className="mt-1 text-sm text-gray-500">Banco BBVA Bancomer</p>

      <div className="mt-4 space-y-3">
        <CopyRow label="Recipiente" value="Fundación Internacional Granito de Arena" />
        <CopyRow label="Cuenta" value="01 10 51 30 67" />
        <CopyRow label="CLABE" value="01 21 00 00 11 05 13 06 78" />
      </div>

      <p className="mt-4 text-sm text-gray-700">
        Puedes donar por transferencia directamente o continuar con el formulario.
        Recuerda seleccionar la <strong>moneda correcta</strong>.
      </p>

      <a
        href="mailto:donantes@fundaciongranitodearena.org"
        className="mt-5 inline-flex items-center gap-2 rounded-md border border-blue-200 px-3 py-2
                   font-display text-sm font-semibold text-blue-700 hover:bg-blue-50"
      >
        <Mail className="h-4 w-4" />
        donantes@fundaciongranitodearena.org
      </a>

      {/* YouTube Video */}
      <div className="mt-6" style={{ height: "400px" }}>
        <iframe
          src="https://www.youtube.com/embed/pDYgx0bsU4w?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
}