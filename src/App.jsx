import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";

function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-neutral-600">
          <div>
            <h4 className="font-semibold text-neutral-900">Velvet Shears</h4>
            <p className="mt-2">A modern salon offering precision cuts, color, and treatments in a calm, welcoming space.</p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900">Hours</h4>
            <ul className="mt-2 space-y-1">
              <li>Mon – Sat: 9am – 8pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900">Contact</h4>
            <ul className="mt-2 space-y-1">
              <li>Phone: (555) 012-3456</li>
              <li>Email: hello@velvetshears.com</li>
              <li>123 Main St, Springfield</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900">Visit</h4>
            <p className="mt-2">Street parking available. Public transit stop two blocks away.</p>
            <a href="#booking" className="inline-flex mt-4 px-4 py-2 rounded-md bg-rose-600 text-white font-medium hover:bg-rose-700">Book now</a>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-neutral-200 text-xs text-neutral-500">
          © {new Date().getFullYear()} Velvet Shears. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
