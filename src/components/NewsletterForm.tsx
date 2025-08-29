"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
        disabled={status==="loading"}
        className="px-4 py-2 rounded-r-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
      >
        {status==="loading" ? "Enviando..." : "Suscribirme"}
      </button>
      {status==="ok" && <span className="ml-3 text-sm text-green-600">¡Gracias!</span>}
      {status==="error" && <span className="ml-3 text-sm text-red-600">Error, intenta de nuevo</span>}
    </form>
  );
}
