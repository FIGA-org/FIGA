import { commitments } from "@/data/transparencia";
import { ClipboardList, FileCheck2, Building2 } from "lucide-react";

const stripIcons = [ClipboardList, FileCheck2, Building2];

export default function CommitmentsStrip() {
  return (
    <section className="px-6 pb-4">
      <div className="max-w-7xl mx-auto rounded-2xl p-8 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white shadow-lg">
        <h2 className="text-xl md:text-2xl font-extrabold">Nuestros compromisos de transparencia</h2>
        <ul className="mt-4 grid md:grid-cols-3 gap-4 text-white/95">
          {commitments.map((c, i) => {
            const Icon = stripIcons[i % stripIcons.length];
            return (
              <li key={c.title} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm">{c.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
