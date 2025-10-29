import { Scissors, Sparkles, Star, Calendar } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cut & Style",
    desc: "Precision haircuts tailored to your face shape with a professional blowout.",
    price: "$45+",
  },
  {
    icon: Sparkles,
    title: "Color & Highlights",
    desc: "Dimension, shine, and tone with single-process color, balayage, or foils.",
    price: "$95+",
  },
  {
    icon: Star,
    title: "Treatments",
    desc: "Deep conditioning, gloss, and scalp care to revive hair health and luster.",
    price: "$35+",
  },
  {
    icon: Calendar,
    title: "Special Events",
    desc: "Updos and makeup for weddings, photoshoots, and milestone moments.",
    price: "$120+",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Our Services</h2>
          <p className="mt-3 text-neutral-600">
            Transparent pricing and exceptional care. Every service includes a consultation.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all bg-white">
              <div className="h-10 w-10 rounded-lg bg-rose-600 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 font-medium text-rose-700">Starting at {s.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#booking" className="inline-flex px-6 py-3 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800">
            View availability
          </a>
        </div>
      </div>
    </section>
  );
}
