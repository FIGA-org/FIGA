import { recognitions } from "@/data/recognitions";
import { Award } from "lucide-react";

export default function Recognitions() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
          <Award className="h-7 w-7 text-yellow-500" />
          Reconocimientos
        </h2>
        <p className="mt-2 text-gray-700 max-w-2xl">
          La trayectoria de nuestra fundadora ha sido reconocida por distintas instituciones.
        </p>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {recognitions.map((text, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 
                         hover:shadow-lg hover:-translate-y-1 hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-800 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
