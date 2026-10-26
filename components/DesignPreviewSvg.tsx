import React from "react";

interface Props {
  type: string;
  className?: string;
}

export default function DesignPreviewSvg({ type, className = "" }: Props) {
  // Category thumbnail composites (matching Screenshot 2)
  if (type === "category-visiting") {
    return (
      <svg viewBox="0 0 400 280" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#f8fafc" />
        <g filter="drop-shadow(0 10px 18px rgba(0,0,0,0.12))">
          {/* Main Card */}
          <rect x="50" y="40" width="300" height="180" rx="8" fill="#0d1b2a" />
          
          {/* Golden Ribbon waves */}
          <path d="M50 110 Q140 160 210 120 T350 140 L350 170 Q270 140 200 170 T50 135 Z" fill="url(#goldGradient)" />
          <path d="M50 125 Q130 175 220 135 T350 155 L350 170 Q280 150 200 180 T50 150 Z" fill="url(#goldLightGradient)" opacity="0.8" />
          
          {/* Card Content */}
          <circle cx="200" cy="78" r="14" stroke="#d4af37" strokeWidth="2" fill="none" />
          <polygon points="200,68 206,78 200,88 194,78" fill="#d4af37" />
          <text x="200" y="105" textAnchor="middle" fill="#d4af37" fontSize="13" fontWeight="bold" letterSpacing="2">COMPANY NAME</text>
          <text x="200" y="117" textAnchor="middle" fill="#94a3b8" fontSize="8" letterSpacing="3">SLOGAN GOES HERE</text>
          
          {/* Lower Section with contact info */}
          <rect x="50" y="160" width="300" height="60" rx="0 0 8 8" fill="#ffffff" />
          <text x="75" y="185" fill="#0f172a" fontSize="13" fontWeight="bold">Brandon</text>
          <text x="75" y="198" fill="#64748b" fontSize="8">Creative Director</text>
          
          <line x1="170" y1="172" x2="170" y2="208" stroke="#e2e8f0" strokeWidth="1" />
          
          <circle cx="185" cy="182" r="3" fill="#d4af37" />
          <text x="195" y="185" fill="#475569" fontSize="7">+91 98765 43210</text>
          <circle cx="185" cy="194" r="3" fill="#d4af37" />
          <text x="195" y="197" fill="#475569" fontSize="7">contact@company.com</text>
          <circle cx="185" cy="206" r="3" fill="#d4af37" />
          <text x="195" y="209" fill="#475569" fontSize="7">www.company.com</text>
        </g>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f6d365" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#aa771c" />
          </linearGradient>
          <linearGradient id="goldLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2a3" />
            <stop offset="100%" stopColor="#e5b842" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "category-diecut") {
    return (
      <svg viewBox="0 0 400 280" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#f8fafc" />
        
        {/* Arch Card (Sky blue) */}
        <g filter="drop-shadow(0 8px 16px rgba(0,0,0,0.08))">
          <path d="M 50 120 A 50 50 0 0 1 150 120 L 150 220 L 50 220 Z" fill="#0284c7" />
          <circle cx="100" cy="110" r="16" fill="white" fillOpacity="0.2" />
          <text x="100" y="113" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">HEALTHY SMILE</text>
          <text x="100" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="7">CLINIC</text>
          <rect x="70" y="145" width="60" height="14" rx="4" fill="white" fillOpacity="0.15" />
          <text x="100" y="155" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">988-88-SMILE</text>
          <text x="100" y="180" textAnchor="middle" fill="#bae6fd" fontSize="7">Dr. Lisa J. Carter</text>
        </g>

        {/* Green Leaf / Soft Curve Card */}
        <g filter="drop-shadow(0 10px 20px rgba(0,0,0,0.12))">
          <rect x="180" y="80" width="170" height="105" rx="20" fill="#15803d" />
          <path d="M 280 80 Q 350 90 350 150 L 350 80 Z" fill="#166534" opacity="0.6" />
          <path d="M 330 140 C 330 110 300 100 290 120 C 290 140 320 150 330 140 Z" fill="#86efac" opacity="0.4" />
          <text x="210" y="115" fill="white" fontSize="10" fontWeight="bold">Donald R. Richie</text>
          <text x="210" y="126" fill="#bbf7d0" fontSize="7">Forestry Manager</text>
          <line x1="210" y1="135" x2="310" y2="135" stroke="#4ade80" strokeWidth="0.8" opacity="0.5" />
          <text x="210" y="150" fill="#dcfce7" fontSize="7">Tel: +1 800 456 7890</text>
        </g>

        {/* Front Rounded Amber Card */}
        <g filter="drop-shadow(0 12px 24px rgba(0,0,0,0.16))">
          <rect x="110" y="130" width="180" height="110" rx="14" fill="url(#amberGradient)" />
          <circle cx="150" cy="165" r="12" fill="white" fillOpacity="0.3" />
          <text x="175" y="165" fill="#78350f" fontSize="10" fontWeight="bold">CHARLES GROUP</text>
          <text x="175" y="174" fill="#92400e" fontSize="7">Creative Design Hub</text>
          <rect x="130" y="195" width="140" height="1" fill="#b45309" opacity="0.3" />
          <text x="130" y="210" fill="#78350f" fontSize="8" fontWeight="600">Free Vector Die-Cut Line</text>
          <text x="130" y="222" fill="#92400e" fontSize="7">300 DPI CMYK Print Ready</text>
        </g>

        <defs>
          <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "category-letterhead") {
    return (
      <svg viewBox="0 0 400 280" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#f8fafc" />
        
        {/* Back Letterhead (Green/Teal accent) */}
        <g transform="rotate(8 240 140)" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.08))">
          <rect x="140" y="30" width="150" height="210" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="140" y="30" width="150" height="18" fill="#0f766e" />
          <line x1="150" y1="60" x2="270" y2="60" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="150" y1="75" x2="260" y2="75" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 2" />
        </g>

        {/* Middle Letterhead (Blue wave) */}
        <g transform="rotate(-4 200 140)" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.1))">
          <rect x="110" y="35" width="160" height="220" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M 110 35 L 270 35 L 270 65 Q 190 85 110 50 Z" fill="#2563eb" />
          <circle cx="130" cy="48" r="7" fill="white" />
          <text x="144" y="52" fill="white" fontSize="8" fontWeight="bold">TECHPRINT</text>
          <line x1="125" y1="85" x2="245" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="125" y1="95" x2="230" y2="95" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="125" y1="105" x2="240" y2="105" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>

        {/* Front Letterhead (Official Crimson / Amber) */}
        <g filter="drop-shadow(0 12px 24px rgba(0,0,0,0.14))">
          <rect x="75" y="45" width="170" height="225" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          
          {/* Header Banner */}
          <rect x="75" y="45" width="170" height="28" fill="#b91c1c" />
          <polygon points="75,73 245,73 245,78 75,75" fill="#f59e0b" />
          
          {/* Logo badge */}
          <circle cx="100" cy="59" r="8" fill="#ffffff" />
          <text x="100" y="62" textAnchor="middle" fill="#b91c1c" fontSize="8" fontWeight="bold">DP</text>
          <text x="115" y="57" fill="#ffffff" fontSize="9" fontWeight="bold">Design &amp; Print</text>
          <text x="115" y="67" fill="#fecaca" fontSize="6">PRINTERS ASSOCIATION</text>
          
          {/* Body Lines */}
          <rect x="90" y="95" width="70" height="3" fill="#94a3b8" />
          <rect x="90" y="105" width="50" height="2" fill="#cbd5e1" />
          
          <rect x="90" y="125" width="140" height="2" fill="#e2e8f0" />
          <rect x="90" y="135" width="135" height="2" fill="#e2e8f0" />
          <rect x="90" y="145" width="140" height="2" fill="#e2e8f0" />
          <rect x="90" y="155" width="120" height="2" fill="#e2e8f0" />
          <rect x="90" y="165" width="138" height="2" fill="#e2e8f0" />
          <rect x="90" y="175" width="100" height="2" fill="#e2e8f0" />
          
          {/* Footer banner */}
          <rect x="75" y="250" width="170" height="20" fill="#f8fafc" stroke="#f1f5f9" />
          <line x1="85" y1="260" x2="235" y2="260" stroke="#b91c1c" strokeWidth="1" />
        </g>
      </svg>
    );
  }

  if (type === "category-envelope") {
    return (
      <svg viewBox="0 0 400 280" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#f8fafc" />
        
        {/* Envelope Body */}
        <g filter="drop-shadow(0 12px 24px rgba(0,0,0,0.14))">
          <rect x="40" y="65" width="320" height="165" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* Flap preview */}
          <path d="M 40 65 L 200 135 L 360 65 Z" fill="#10b981" />
          
          {/* Decorative Mosaic / geometric bottom pattern */}
          <path d="M 40 210 L 60 190 L 80 210 L 100 190 L 120 210 L 140 190 L 160 210 L 180 190 L 200 210 L 220 190 L 240 210 L 260 190 L 280 210 L 300 190 L 320 210 L 340 190 L 360 210 L 360 230 L 40 230 Z" fill="#10b981" />
          
          <polygon points="60,210 80,195 100,210" fill="#f59e0b" />
          <polygon points="120,210 140,195 160,210" fill="#ef4444" />
          <polygon points="180,210 200,195 220,210" fill="#3b82f6" />
          <polygon points="240,210 260,195 280,210" fill="#8b5cf6" />
          <polygon points="300,210 320,195 340,210" fill="#06b6d4" />
          
          {/* Logo on top left */}
          <circle cx="75" cy="100" r="10" fill="#10b981" />
          <text x="92" y="99" fill="#0f172a" fontSize="10" fontWeight="bold">LOGO ICON</text>
          <text x="92" y="108" fill="#64748b" fontSize="7">PRINTING PRESS</text>
          
          {/* Address guidelines on right */}
          <text x="210" y="125" fill="#64748b" fontSize="8">To,</text>
          <line x1="210" y1="140" x2="330" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="210" y1="160" x2="330" y2="160" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="210" y1="180" x2="330" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Stamp / Barcode preview */}
          <rect x="305" y="80" width="35" height="40" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeDasharray="2 2" />
          <text x="322" y="104" textAnchor="middle" fill="#94a3b8" fontSize="7">POSTAGE</text>
        </g>
      </svg>
    );
  }

  // Individual design cards renderings
  switch (type) {
    case "visiting-navy-gold":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" rx="10" fill="#0b132b" />
          <path d="M0 70 Q90 140 180 90 T350 120 L350 160 Q260 120 170 170 T0 110 Z" fill="url(#goldGradientDetail)" />
          <circle cx="175" cy="50" r="16" stroke="#d4af37" strokeWidth="2" />
          <text x="175" y="78" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold" letterSpacing="2">ROYAL LUXE</text>
          <text x="175" y="92" textAnchor="middle" fill="#d4af37" fontSize="8" letterSpacing="3">GOLD FOIL EDITION</text>
          <rect x="0" y="150" width="350" height="50" rx="0 0 10 10" fill="#ffffff" />
          <text x="25" y="174" fill="#0b132b" fontSize="11" fontWeight="bold">Alexander Vance</text>
          <text x="25" y="187" fill="#64748b" fontSize="8">Managing Director</text>
          <text x="240" y="174" fill="#334155" fontSize="8">vance@royalluxe.com</text>
          <text x="240" y="187" fill="#334155" fontSize="8">+91 99887 76655</text>
          <defs>
            <linearGradient id="goldGradientDetail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "visiting-minimal-white":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="30" y="40" width="12" height="12" fill="#0f172a" />
          <text x="50" y="51" fill="#0f172a" fontSize="14" fontWeight="bold" letterSpacing="1">STUDIO NORDIC</text>
          <text x="50" y="66" fill="#64748b" fontSize="9">Architectural Design &amp; Interiors</text>
          <line x1="30" y1="100" x2="320" y2="100" stroke="#f1f5f9" strokeWidth="2" />
          <text x="30" y="135" fill="#0f172a" fontSize="12" fontWeight="600">Freja Lindqvist</text>
          <text x="30" y="150" fill="#64748b" fontSize="9">Lead Architect / Founder</text>
          <text x="210" y="135" fill="#475569" fontSize="8">hello@studionordic.com</text>
          <text x="210" y="150" fill="#475569" fontSize="8">+45 20 12 34 56</text>
          <text x="210" y="165" fill="#475569" fontSize="8">Copenhagen, Denmark</text>
        </svg>
      );

    case "visiting-corporate-blue":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" rx="10" fill="#1e293b" />
          <path d="M 0 0 L 160 0 L 100 200 L 0 200 Z" fill="#2563eb" />
          <path d="M 160 0 L 190 0 L 130 200 L 100 200 Z" fill="#38bdf8" opacity="0.6" />
          <circle cx="50" cy="50" r="16" fill="white" fillOpacity="0.2" />
          <polygon points="50,40 58,55 42,55" fill="white" />
          <text x="45" y="140" fill="white" fontSize="13" fontWeight="bold">TECHNOVA</text>
          <text x="45" y="155" fill="#93c5fd" fontSize="8">CLOUD SOLUTIONS</text>
          <text x="180" y="60" fill="white" fontSize="13" fontWeight="bold">Devin Miller</text>
          <text x="180" y="75" fill="#38bdf8" fontSize="9">Senior Systems Architect</text>
          <line x1="180" y1="90" x2="320" y2="90" stroke="#334155" strokeWidth="1" />
          <text x="180" y="115" fill="#cbd5e1" fontSize="8">M: +1 (555) 789-0123</text>
          <text x="180" y="133" fill="#cbd5e1" fontSize="8">E: devin@technova.io</text>
          <text x="180" y="151" fill="#cbd5e1" fontSize="8">W: www.technova.io</text>
        </svg>
      );

    case "visiting-black-rose":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" rx="10" fill="#18181b" />
          <rect x="15" y="15" width="320" height="170" rx="6" stroke="#fb7185" strokeWidth="1.2" strokeDasharray="6 3" />
          <text x="175" y="65" textAnchor="middle" fill="#f43f5e" fontSize="16" fontWeight="bold" letterSpacing="4">AURORA</text>
          <text x="175" y="82" textAnchor="middle" fill="#fda4af" fontSize="8" letterSpacing="3">HAUTE COUTURE &amp; JEWELS</text>
          <line x1="100" y1="100" x2="250" y2="100" stroke="#f43f5e" strokeWidth="0.8" />
          <text x="175" y="130" textAnchor="middle" fill="#ffffff" fontSize="12">Genevieve Saint</text>
          <text x="175" y="145" textAnchor="middle" fill="#a1a1aa" fontSize="8">VIP Client Ambassador</text>
          <text x="175" y="165" textAnchor="middle" fill="#fb7185" fontSize="8">5th Avenue, New York | +1 212 555 9000</text>
        </svg>
      );

    case "diecut-arch-cyan":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" fill="#f8fafc" />
          <path d="M 60 50 A 60 60 0 0 1 200 50 L 200 180 L 60 180 Z" fill="#0284c7" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.15))" />
          <circle cx="130" cy="50" r="22" fill="white" fillOpacity="0.2" />
          <text x="130" y="54" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">DENTAL CARE</text>
          <text x="130" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Healthy Smile</text>
          <text x="130" y="105" textAnchor="middle" fill="#bae6fd" fontSize="8">Pediatric &amp; Cosmetic</text>
          <rect x="80" y="125" width="100" height="20" rx="10" fill="white" />
          <text x="130" y="138" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold">+91 999 888 7766</text>
          <text x="240" y="80" fill="#0f172a" fontSize="12" fontWeight="bold">Die-Cut Shape</text>
          <text x="240" y="98" fill="#64748b" fontSize="8">Arch Dome Cutline</text>
          <rect x="240" y="115" width="80" height="24" rx="4" fill="#e0f2fe" stroke="#0284c7" />
          <text x="280" y="130" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="bold">Cut Contours</text>
        </svg>
      );

    case "diecut-leaf-green":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" fill="#f8fafc" />
          <g filter="drop-shadow(0 8px 16px rgba(0,0,0,0.12))">
            <path d="M 40 100 C 40 40 120 30 200 60 C 280 90 280 160 200 170 C 120 180 40 160 40 100 Z" fill="#15803d" />
            <path d="M 50 100 Q 160 110 260 90" stroke="#86efac" strokeWidth="2" strokeDasharray="3 3" />
            <text x="150" y="90" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">PRAKRITI AYURVEDA</text>
            <text x="150" y="108" textAnchor="middle" fill="#bbf7d0" fontSize="8">100% Organic Extracts</text>
            <text x="150" y="140" textAnchor="middle" fill="#f0fdf4" fontSize="9">Kavita Sharma - Naturopath</text>
          </g>
        </svg>
      );

    case "letterhead-corp-red":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect width="350" height="28" fill="#991b1b" />
          <polygon points="0,28 350,28 350,33 0,30" fill="#f59e0b" />
          <text x="20" y="18" fill="white" fontSize="10" fontWeight="bold">APEX PRINT CORP</text>
          <text x="260" y="18" fill="#fecaca" fontSize="7">www.apexprint.com</text>
          <rect x="25" y="55" width="90" height="5" fill="#cbd5e1" />
          <rect x="25" y="75" width="280" height="3" fill="#f1f5f9" />
          <rect x="25" y="85" width="300" height="3" fill="#f1f5f9" />
          <rect x="25" y="95" width="290" height="3" fill="#f1f5f9" />
          <rect x="25" y="105" width="250" height="3" fill="#f1f5f9" />
          <rect x="25" y="125" width="120" height="3" fill="#f1f5f9" />
          <rect y="185" width="350" height="15" fill="#f8fafc" stroke="#f1f5f9" />
          <text x="175" y="195" textAnchor="middle" fill="#94a3b8" fontSize="7">A4 Size (210 x 297mm) • CMYK Print Ready Vector Template</text>
        </svg>
      );

    case "envelope-window-green":
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" fill="#f8fafc" />
          <g filter="drop-shadow(0 8px 16px rgba(0,0,0,0.1))">
            <rect x="20" y="25" width="310" height="150" rx="6" fill="#ffffff" stroke="#cbd5e1" />
            <path d="M 20 25 L 175 85 L 330 25 Z" fill="#10b981" />
            <rect x="50" y="60" width="110" height="50" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeDasharray="3 3" />
            <text x="105" y="88" textAnchor="middle" fill="#64748b" fontSize="8">TRANSPARENT WINDOW</text>
            <text x="210" y="105" fill="#0f172a" fontSize="10" fontWeight="bold">PRIORITY MAIL</text>
            <text x="210" y="120" fill="#64748b" fontSize="7">DL 220 x 110 mm Size</text>
            <rect x="20" y="165" width="310" height="10" fill="#059669" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 350 200" className={`w-full h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="200" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeDasharray="4 4" />
          <circle cx="175" cy="85" r="24" fill="#e2e8f0" />
          <text x="175" y="90" textAnchor="middle" fill="#64748b" fontSize="16">🎨</text>
          <text x="175" y="130" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">Vector Graphic Template</text>
          <text x="175" y="145" textAnchor="middle" fill="#94a3b8" fontSize="8">300 DPI CMYK CorelDRAW / PSD / AI</text>
        </svg>
      );
  }
}
