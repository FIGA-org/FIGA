"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between rounded-md bg-blue-50/60 px-3 py-2">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-blue-700/80">{label}</p>
        <p className="font-mono text-sm text-blue-900 break-all">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium
                 text-blue-700 hover:bg-blue-100 transition"
      >
        <Copy className="h-4 w-4" />
        {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <aside className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 space-y-4">
      <h2 className="text-xl font-extrabold">Información de contacto</h2>

      <CopyRow label="Ubicación" value="Tuxtla Gutiérrez, Chiapas" />
      <CopyRow label="Correo" value="contacto@fundaciongranito.org" />
      <CopyRow label="Donantes" value="donantes@fundaciongranitodearena.org" />
      <CopyRow label="WhatsApp" value="+52 961-230-7734" />
    </aside>
  );
}
