// components/DonorboxEmbed.tsx
"use client";

export default function DonorboxEmbed() {
  return (
    <div className="relative w-full" style={{ paddingTop: "1600px" }}>
      <iframe
        src="https://donorbox.org/embed/fundacion-internacional-granito-de-arena"
        title="Donar a Fundación Granito de Arena"
        className="absolute inset-0 h-full w-full rounded-lg border-0"
        allow="payment *; clipboard-write"
        // allowPaymentRequest
        loading="lazy"
      />
    </div>
  );
}
