import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun Mehta",
    role: "Wedding Couple, Ahmedabad",
    review:
      "Alpha 3d advertisement made our Kankotri cards absolutely stunning! The gold foil work was flawless and delivered 5 days before our wedding. Highly recommended!",
    rating: 5,
    emoji: "👰",
  },
  {
    name: "Rajesh Patel",
    role: "Business Owner, Surat",
    review:
      "Got 500 premium business cards with spot UV. The quality is unmatched — every client who receives my card is impressed. Will order again!",
    rating: 5,
    emoji: "💼",
  },
  {
    name: "Sunita Sharma",
    role: "Event Planner, Mumbai",
    review:
      "Ordered birthday invites for a high-profile event. The acrylic cards were a showstopper. Pan-India delivery was smooth and on time.",
    rating: 5,
    emoji: "🎉",
  },
];

const badges = [
  { value: "10,000+", label: "Cards Printed" },
  { value: "100%", label: "On-Time Wedding Delivery" },
  { value: "Pan-India", label: "Shipping Available" },
  { value: "500+", label: "Happy Clients" },
];

export default function Testimonials() {
  return (
    <section className="bg-amber-50 py-20 px-4">
      {/* Trust Badges */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div key={b.label} className="bg-white border border-amber-200 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-red-900">{b.value}</p>
              <p className="text-amber-700 text-sm mt-1 font-medium">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Happy Clients</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-900">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-amber-800/80 text-sm leading-relaxed mb-5 italic">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-xl">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-bold text-red-900 text-sm">{t.name}</p>
                  <p className="text-amber-600 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
