import { Layers, Star, Box, CreditCard, Gift, Printer } from "lucide-react";

const services = [
  {
    icon: <Star className="text-amber-500" size={28} />,
    title: "Shaadi Kankotri Cards",
    desc: "Luxurious wedding invitation cards with gold foil, embossing, and traditional motifs.",
    tags: ["Gold Foil", "Embossed", "Velvet Finish"],
  },
  {
    icon: <CreditCard className="text-amber-500" size={28} />,
    title: "Premium Business Cards",
    desc: "Spot UV, soft-touch lamination, and metal finish cards that leave a lasting impression.",
    tags: ["Spot UV", "Metal Finish", "Soft Touch"],
  },
  {
    icon: <Box className="text-amber-500" size={28} />,
    title: "Velvet & Acrylic Boxes",
    desc: "Handcrafted luxury packaging boxes for wedding cards, gifts, and corporate hampers.",
    tags: ["Velvet", "Acrylic", "Custom Size"],
  },
  {
    icon: <Gift className="text-amber-500" size={28} />,
    title: "Birthday & Event Invites",
    desc: "Vibrant, personalized invitations for birthdays, anniversaries, and corporate events.",
    tags: ["Full Color", "Die-Cut", "Personalized"],
  },
  {
    icon: <Layers className="text-amber-500" size={28} />,
    title: "Hot-Foil Stamping",
    desc: "Gold, silver, and rose-gold foil stamping on cards, certificates, and packaging.",
    tags: ["Gold", "Silver", "Rose Gold"],
  },
  {
    icon: <Printer className="text-amber-500" size={28} />,
    title: "Business Stationery",
    desc: "Letterheads, envelopes, brochures, and complete brand identity print kits.",
    tags: ["Letterhead", "Brochure", "Brand Kit"],
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-900">Our Printing Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all group"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-bold text-red-900 text-lg mb-2">{s.title}</h3>
              <p className="text-amber-800/70 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
