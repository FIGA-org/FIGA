import {
    ShieldCheck,
    Banknote,
    ChartBar,
    MapPinned,
  } from "lucide-react";
  import { kpis } from "@/data/transparencia";
  
  const iconMap = {
    ShieldCheck,
    Banknote,
    ChartBar,
    MapPinned,
  };
  
  export default function KPICards() {
    return (
      <section className="px-6 pb-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map(({ title, subtitle, icon }, i) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
              <div key={i} className="rounded-xl border border-gray-100 p-5 shadow-sm bg-white">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <p className="font-semibold">{title}</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">{subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  