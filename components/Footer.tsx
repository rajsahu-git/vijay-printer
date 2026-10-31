import Alpha3DLogo from "@/components/Alpha3DLogo";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const WA_NUMBER = "919530072011";
const WA_MSG = encodeURIComponent("Hello! I'd like to get in touch with Alpha 3D Advertisement.");

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 text-slate-700">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Alpha3DLogo className="h-16 sm:h-24 w-auto" />
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Premium Indian print studio specializing in wedding invitations, luxury business cards, and custom packaging.
            Crafted with tradition, delivered with precision.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center transition-colors text-sm font-bold shadow-xs"
            >
              📸
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center transition-colors text-sm font-bold shadow-xs"
            >
              👍
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div id="aboutus">
          <h3 className="text-slate-900 font-bold text-lg mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-amber-600 mt-0.5 shrink-0" />
              <span>
                Near by veer patta circle, Amet, Rajasthan 313332,{" "}
                <a
                  href="https://maps.app.goo.gl/TTqVyQVz5vvQ4ufk7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 hover:underline text-xs font-semibold mt-0.5 inline-block"
                >
                  Get Directions →
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-amber-600 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 8:00 PM IST</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-amber-600 shrink-0" />
              <a href="mailto:info@shreeprintsandcards.in" className="hover:text-amber-600 transition-colors">
                alpha3dadvertisers@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-slate-900 font-bold text-lg mb-4">Quick Actions</h3>
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-3 rounded-xl transition-colors text-sm shadow-sm"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919530072011"
              className="flex items-center gap-3 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold px-4 py-3 rounded-xl transition-colors text-sm border border-amber-300 shadow-xs"
            >
              <Phone size={18} className="text-amber-700" />
              Call: +91 9530072011
            </a>
          </div>

          <div className="mt-6">
            <h4 className="text-slate-900 font-semibold text-sm mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
              {["Home", "Services", "Gallery", "Pricing & Packages", "About Us", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/[^a-z]/g, "")}`}
                  className="hover:text-amber-600 transition-colors py-0.5"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Alpha 3D Advertisement. All rights reserved. | Made with ❤️ in India
      </div>
    </footer>
  );
}
