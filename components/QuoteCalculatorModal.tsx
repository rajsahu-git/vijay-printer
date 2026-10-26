"use client";
import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";

const WA_NUMBER = "919999999999";

const finishOptions = ["Gold Foil Stamping", "Embossing", "Velvet Box", "UV Coating", "Acrylic Material"];

interface FormState {
  service: string;
  quantity: string;
  finishes: string[];
  name: string;
  phone: string;
  city: string;
}

export default function QuoteCalculatorModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>({
    service: "",
    quantity: "",
    finishes: [],
    name: "",
    phone: "",
    city: "",
  });

  const toggleFinish = (f: string) =>
    setForm((prev) => ({
      ...prev,
      finishes: prev.finishes.includes(f) ? prev.finishes.filter((x) => x !== f) : [...prev.finishes, f],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `🪔 *Shree Prints & Cards — Quote Request*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `🏙️ *City:* ${form.city}`,
      ``,
      `🖨️ *Service:* ${form.service}`,
      `📦 *Quantity:* ${form.quantity}`,
      `✨ *Finishes:* ${form.finishes.length ? form.finishes.join(", ") : "None"}`,
      ``,
      `Please share your best price and samples. Thank you!`,
    ].join("\n");

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-900 to-amber-800 p-5 flex items-center justify-between">
          <div>
            <h2 className="text-white font-extrabold text-xl">Get Instant Quote</h2>
            <p className="text-amber-200 text-sm mt-0.5">We'll reply on WhatsApp within minutes</p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
          {/* Service Type */}
          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-1.5">Service Type *</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-amber-950 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select a service...</option>
              {["Shaadi Card (Kankotri)", "Visiting Card", "Birthday Invite", "Business Stationery", "Custom Box Packaging"].map(
                (s) => <option key={s}>{s}</option>
              )}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-1.5">Quantity Needed *</label>
            <select
              required
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-amber-950 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select quantity...</option>
              {["50", "100", "250", "500", "1000", "1000+"].map((q) => (
                <option key={q}>{q}</option>
              ))}
            </select>
          </div>

          {/* Finishes */}
          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-2">Premium Finish Options</label>
            <div className="grid grid-cols-2 gap-2">
              {finishOptions.map((f) => (
                <label
                  key={f}
                  className={`flex items-center gap-2 cursor-pointer border rounded-xl px-3 py-2.5 text-sm transition-all ${
                    form.finishes.includes(f)
                      ? "border-amber-500 bg-amber-50 text-amber-900 font-semibold"
                      : "border-amber-100 text-amber-800 hover:border-amber-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="accent-amber-600"
                    checked={form.finishes.includes(f)}
                    onChange={() => toggleFinish(f)}
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Your Name *", key: "name", placeholder: "e.g. Rahul Sharma", type: "text" },
              { label: "WhatsApp Number *", key: "phone", placeholder: "e.g. 9876543210", type: "tel" },
            ].map(({ label, key, placeholder, type }) => (
              <div key={key}>
                <label className="block text-sm font-semibold text-amber-950 mb-1.5">{label}</label>
                <input
                  required
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof FormState] as string}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-amber-950 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-1.5">City *</label>
            <input
              required
              type="text"
              placeholder="e.g. Ahmedabad, Surat, Mumbai"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-amber-950 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md text-base"
          >
            <MessageCircle size={20} />
            Submit Quote Request via WhatsApp
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
