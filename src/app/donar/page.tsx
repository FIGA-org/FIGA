import DonorboxEmbed from "@/components/donar/DonorboxEmbed";
import BankInfoCard from "@/components/donar/BankInfoCard";
import PayProvidersCard from "@/components/donar/PayProvidersCard";

export default function DonarPage() {
    return (
        <main className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 text-center md:text-left">
                    <h1 className="font-display text-4xl font-bold text-gray-900">
                        Dona a Fundación Granito de Arena
                    </h1>
                    <p className="mt-4 font-sans text-lg text-gray-600">
                        Tu apoyo protege la infancia a través de prevención, apoyo psicológico y comunidad.
                    </p>
                </header>

                {/* Donation Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Donorbox Embed */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/10 flex flex-col">
                        <DonorboxEmbed />
                    </div>

                    {/* Bank Information */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/10 flex flex-col">
                        <BankInfoCard />
                    </div>

                    {/* Payment Providers */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/10 flex flex-col">
                        <PayProvidersCard
                            stripeBuyButtonId={process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID!}
                            stripePublishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
                            paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}