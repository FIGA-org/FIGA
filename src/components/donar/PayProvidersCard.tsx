"use client";

import React, { useEffect, useRef } from "react";
import { CreditCard } from "lucide-react";

type Props = {
  stripeBuyButtonId: string;      // e.g. "buy_btn_XXXX"
  stripePublishableKey: string;   // e.g. "pk_live_XXXX"
  paypalClientId: string;         // e.g. process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  paypalCurrency?: string;        // default: MXN
  paypalAmount?: string;          // default: "250.00"
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
  // no JSX for the custom element — avoids TS intrinsic error
  return React.createElement("stripe-buy-button", {
    "buy-button-id": buyButtonId,
    "publishable-key": publishableKey,
  });
}

export default function PayProvidersCard({
  stripeBuyButtonId,
  stripePublishableKey,
  paypalClientId,
  paypalCurrency = "MXN",
  paypalAmount = "250.00",
}: Props) {
  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const paypalRenderedRef = useRef(false);

  // Load Stripe Buy Button script once
  useEffect(() => {
    if (document.getElementById("stripe-buybutton-js")) return;
    const s = document.createElement("script");
    s.id = "stripe-buybutton-js";
    s.src = "https://js.stripe.com/v3/buy-button.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Load PayPal SDK once, then render buttons once
  useEffect(() => {
    const renderButtons = () => {
      // @ts-expect-error - PayPal adds a global `paypal` object
      if (window.paypal && paypalContainerRef.current && !paypalRenderedRef.current) {
        // @ts-expect-error - PayPal's `Buttons` method is dynamically added
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

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <h3 className="font-display text-xl font-bold text-gray-900">Stripe o PayPal</h3>
      <p className="mt-1 text-sm text-gray-600">
        Elige tu proveedor preferido para donar de forma segura.
      </p>

      {/* Stripe Buy Button */}
      <div className="mt-5 rounded-lg border border-gray-200 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
          <CreditCard className="h-4 w-4" />
          Stripe
        </div>

        {stripeBuyButtonId && stripePublishableKey ? (
          <StripeBuyButton
            buyButtonId={stripeBuyButtonId}
            publishableKey={stripePublishableKey}
          />
        ) : (
          <p className="text-sm text-gray-500">
            Configura tu <code>stripeBuyButtonId</code> y <code>stripePublishableKey</code>.
          </p>
        )}
      </div>

      {/* PayPal Buttons */}
      <div className="mt-5 rounded-lg border border-gray-200 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
          {/* Simple PP glyph */}
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