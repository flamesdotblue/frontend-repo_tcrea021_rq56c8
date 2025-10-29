import { Scissors, Phone, MapPin, Clock } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-rose-600 text-white">
              <Scissors className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Velvet Shears</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#team" className="hover:text-rose-600 transition-colors">Stylists</a>
            <a href="#booking" className="hover:text-rose-600 transition-colors">Booking</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 012-3456</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Main St</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 9am - 8pm</div>
          </div>

          <a href="#booking" className="md:hidden inline-flex items-center px-3 py-2 rounded-md bg-rose-600 text-white text-sm font-medium shadow hover:bg-rose-700">Book</a>
        </div>
      </div>
    </header>
  );
}
