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

export default function PayProvidersCard({
  stripeBuyButtonId = process.env.NEXT_PUBLIC_STRIPE_BUTTON_ID || "",
  stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  paypalCurrency = "MXN",
  paypalAmount = "50.00",
}: Props) {
  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const paypalRenderedRef = useRef(false);

  /** * NOTA: Se ha desactivado la carga del script de Stripe y su botón real 
   * para que quede como una opción a implementar en el futuro.
   */

  // Lógica de PayPal (Se mantiene activa)
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
                purchase_units: [
                  { amount: { value: paypalAmount, currency_code: paypalCurrency } },
                ],
              }),
            onApprove: (_data: unknown, actions: PayPalActions) =>
              actions.order.capture(),
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
    s.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
      paypalClientId
    )}&currency=${encodeURIComponent(paypalCurrency)}`;
    s.async = true;
    s.onload = renderButtons;
    document.body.appendChild(s);
  }, [paypalClientId, paypalCurrency, paypalAmount]);

  // Manejador para el clic en la opción no configurada
  const handleStripePlaceholderClick = () => {
    alert("Esta opción no ha sido configurada aún.");
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <h3 className="font-display text-xl font-bold text-gray-900">Métodos de Pago</h3>
      <p className="mt-1 text-sm text-gray-600">
        Elige tu proveedor preferido para donar de forma segura.
      </p>

      {/* Opción de Stripe (En desarrollo/No configurada) */}
      <div className="mt-5 rounded-lg border border-gray-200 p-4 bg-gray-50/50">
        <div className="mb-3 flex items-center gap-2 font-medium text-gray-400">
          <CreditCard className="h-4 w-4" />
          Stripe (Próximamente)
        </div>

        <button
          onClick={handleStripePlaceholderClick}
          className="w-full bg-[#635bff] opacity-60 text-white py-2 px-4 rounded-md font-medium cursor-pointer hover:bg-[#5851e0] transition-colors"
        >
          Donar con Tarjeta
        </button>
        <p className="mt-2 text-[10px] text-gray-400 text-center uppercase tracking-widest font-semibold">
          Opción en desarrollo
        </p>
      </div>

      {/* Botones de PayPal (Activos) */}
      <div className="mt-5 rounded-lg border border-gray-200 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 18l1.2-8.4C5.5 6 7.1 5 9.4 5h6.3c1.8 0 3 .7 3.5 1.8.4.8.4 1.8.2 2.8-.5 2.3-2.2 3.4-4.8 3.4h-3.2l-.4 2.5H7.2L6.8 18H4z" />
          </svg>
          PayPal
        </div>
        {paypalClientId ? (
          <div ref={paypalContainerRef} />
        ) : (
          <p className="text-sm text-gray-500">
            Agrega tu <code>paypalClientId</code> para mostrar los botones.
          </p>
        )}
      </div>
    </div>
  );
}