import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Visiting Cards & Flyers",
    price: "₹999",
    per: "per 100 pcs",
    color: "border-amber-200",
    badge: "",
    features: [
      "100 Business Cards",
      "Standard 300 GSM Paper",
      "Full Color Both Sides",
      "Matte or Gloss Lamination",
      "3–5 Day Delivery",
    ],
  },
  {
    name: "Premium",
    subtitle: "Wedding & Event Cards",
    price: "₹4,999",
    per: "per 100 pcs",
    color: "border-amber-500 ring-2 ring-amber-400",
    badge: "Most Popular",
    features: [
      "100 Shaadi Kankotri Cards",
      "400 GSM Premium Paper",
      "Gold Foil Stamping",
      "Embossing / Debossing",
      "Envelope Included",
      "5–7 Day Delivery",
    ],
  },
  {
    name: "Luxury",
    subtitle: "Acrylic & Velvet Box Sets",
    price: "₹14,999",
    per: "per 50 pcs",
    color: "border-red-300",
    badge: "",
    features: [
      "50 Acrylic / Velvet Box Sets",
      "Laser Engraved Acrylic Card",
      "Velvet Box with Ribbon",
      "Hot-Foil Stamping",
      "Custom Insert Tray",
      "Pan-India Shipping",
    ],
  },
];

export default function Pricing({ onQuoteClick }: { onQuoteClick: () => void }) {
  return (
    <section id="pricingpackages" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-900">Pricing &amp; Packages</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-amber-800/60 text-sm mt-4">All prices are indicative. Contact us for custom bulk quotes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border-2 ${plan.color} rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-amber-950 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={11} /> {plan.badge}
                </div>
              )}
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-1">{plan.subtitle}</p>
              <h3 className="text-2xl font-extrabold text-red-900 mb-0.5">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-5 mt-2">
                <span className="text-4xl font-extrabold text-amber-700">{plan.price}</span>
                <span className="text-amber-600/70 text-sm mb-1">{plan.per}</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-amber-900">
                    <Check size={15} className="text-green-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onQuoteClick}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${
                  plan.badge
                    ? "bg-red-900 hover:bg-red-800 text-white"
                    : "bg-amber-100 hover:bg-amber-200 text-red-900"
                }`}
              >
                Get Custom Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
