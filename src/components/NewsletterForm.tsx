"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "loading" | "ok" | "error">("idle");

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
    <form onSubmit={onSubmit} className="w-full">
      {/* Stack until xl; inline on xl+ */}
      <div className="flex flex-col xl:flex-row items-stretch gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          className="
            flex-1 min-w-0
            rounded-md xl:rounded-l-md xl:rounded-r-none
            border border-white/20 bg-white/10
            text-white placeholder-white/70
            px-3 py-2
            focus:outline-none focus:ring-2 focus:ring-white/50
          "
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            w-full xl:w-auto
            rounded-md xl:rounded-r-md xl:rounded-l-none
            bg-white text-blue-700 font-semibold
            px-4 py-2
            hover:bg-gray-100 transition
            disabled:opacity-60
          "
        >
          {status === "loading" ? "Enviando..." : "Suscribirme"}
        </button>
      </div>

      {/* Messages below so they don't push layout sideways */}
      <div className="mt-2 text-sm" aria-live="polite" role="status">
        {status === "ok" && (
          <span className="text-green-400">¡Gracias! Revisa tu correo.</span>
        )}
        {status === "error" && (
          <span className="text-red-300">
            Ocurrió un error, intenta de nuevo.
          </span>
        )}
      </div>
    </form>
  );
}
