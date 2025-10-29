import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", service: "Cut & Style" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! We will confirm your ${form.service} on ${form.date}.`);
  };

  return (
    <section id="booking" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight">Book an appointment</h2>
            <p className="mt-2 text-neutral-600">Choose a date and leave your details. We'll text you a confirmation shortly.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 bg-white p-6 rounded-xl border border-neutral-200">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(555) 012-3456" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Preferred date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Service</label>
                <select name="service" value={form.service} onChange={handleChange} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500">
                  <option>Cut & Style</option>
                  <option>Color & Highlights</option>
                  <option>Treatments</option>
                  <option>Special Events</option>
                </select>
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-rose-600 text-white font-medium hover:bg-rose-700">
                <Calendar className="h-4 w-4" /> Request booking
              </button>
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1600&auto=format&fit=crop"
                alt="Stylist at work"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-4 rounded-lg bg-white border border-neutral-200">
                <Phone className="h-4 w-4" /> <span className="text-sm">(555) 012-3456</span>
              </div>
              <div className="flex items-center gap-2 p-4 rounded-lg bg-white border border-neutral-200">
                <MapPin className="h-4 w-4" /> <span className="text-sm">123 Main St, Springfield</span>
              </div>
              <div className="flex items-center gap-2 p-4 rounded-lg bg-white border border-neutral-200">
                <Clock className="h-4 w-4" /> <span className="text-sm">Mon–Sat 9am–8pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
