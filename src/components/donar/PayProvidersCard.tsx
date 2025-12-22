"use client";

import React, { useEffect, useRef } from "react";
import { CreditCard } from "lucide-react";

type Props = {
  stripeBuyButtonId: string;
  stripePublishableKey: string;
  paypalClientId: string;
  paypalCurrency?: string;
  paypalAmount?: string;
};

type PayPalActions = {
  order: {
    create: (data: unknown) => Promise<string>;
    capture: () => Promise<void>;
  };
};

function StripeBuyButton({
  buyButtonId,
  publishableKey,
}: {
  buyButtonId: string;
  publishableKey: string;
}) {
  return React.createElement("stripe-buy-button", {
    "buy-button-id": buyButtonId,
    "publishable-key": publishableKey,
  });
}

export default function PayProvidersCard({
  stripeBuyButtonId = process.env.NEXT_PUBLIC_STRIPE_BUTTON_ID || "",
  stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  paypalCurrency = "MXN",
  paypalAmount = "50.00",
}: Props) {
  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const paypalRenderedRef = useRef(false);

  // Carga de scripts originales
  useEffect(() => {
    if (document.getElementById("stripe-buybutton-js")) return;
    const s = document.createElement("script");
    s.id = "stripe-buybutton-js";
    s.src = "https://js.stripe.com/v3/buy-button.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    const renderButtons = () => {
      // @ts-expect-error
      if (window.paypal && paypalContainerRef.current && !paypalRenderedRef.current) {
        // @ts-expect-error
        window.paypal
          .Buttons({
            style: { shape: "pill", color: "gold", label: "donate", layout: "vertical" },
            createOrder: (_data: unknown, actions: PayPalActions) =>
              actions.order.create({
                purchase_units: [{ amount: { value: paypalAmount, currency_code: paypalCurrency } }],
              }),
            onApprove: (_data: unknown, actions: PayPalActions) => actions.order.capture(),
          })
          .render(paypalContainerRef.current);
        paypalRenderedRef.current = true;
      }
    };

    if (document.getElementById("paypal-sdk")) {
      renderButtons();
      return;
    }

    const s = document.createElement("script");
    s.id = "paypal-sdk";
    s.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(paypalClientId)}&currency=${encodeURIComponent(paypalCurrency)}`;
    s.async = true;
    s.onload = renderButtons;
    document.body.appendChild(s);
  }, [paypalClientId, paypalCurrency, paypalAmount]);

  const handleDisabledClick = () => {
    alert("Esta opción aún no ha sido configurada.");
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <h3 className="font-display text-xl font-bold text-gray-900">Otras formas de donar</h3>
      <p className="mt-1 text-sm text-gray-600">
        Próximamente podrás donar mediante estos proveedores.
      </p>

      {/* Bloque Stripe */}
      <div className="mt-5 rounded-lg border border-gray-200 p-4 bg-gray-50/30">
        <div className="mb-2 flex items-center gap-2 font-medium text-gray-400">
          <CreditCard className="h-4 w-4" />
          Stripe (En desarrollo)
        </div>
        <div className="relative">
          {/* Capa invisible que bloquea el botón */}
          <div 
            className="absolute inset-0 z-20 cursor-not-allowed" 
            onClick={handleDisabledClick}
            title="Opción no configurada"
          />
          <div className="opacity-40 grayscale">
            {stripeBuyButtonId && stripePublishableKey ? (
              <StripeBuyButton buyButtonId={stripeBuyButtonId} publishableKey={stripePublishableKey} />
            ) : (
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Bloque PayPal */}
      <div className="mt-5 rounded-lg border border-gray-200 p-4 bg-gray-50/30">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-400">
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 18l1.2-8.4C5.5 6 7.1 5 9.4 5h6.3c1.8 0 3 .7 3.5 1.8.4.8.4 1.8.2 2.8-.5 2.3-2.2 3.4-4.8 3.4h-3.2l-.4 2.5H7.2L6.8 18H4z" />
          </svg>
          PayPal (En desarrollo)
        </div>
        <div className="relative">
          <div 
            className="absolute inset-0 z-20 cursor-not-allowed" 
            onClick={handleDisabledClick}
            title="Opción no configurada"
          />
          <div className="opacity-40 grayscale">
            <div ref={paypalContainerRef} className="min-h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}