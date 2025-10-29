import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-100" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium">
              <Sparkles className="h-4 w-4" /> Luxury Salon Experience
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
              Elevate your look with precision cuts and modern styles
            </h1>
            <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
              From classic trims to bold transformations, our stylists craft looks that fit your lifestyle. Relax, refresh, and step out feeling your best.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-rose-600 text-white font-medium shadow hover:bg-rose-700">
                Book an appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-50">
                Explore services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
                alt="Salon interior"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
