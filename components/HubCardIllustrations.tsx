import React from "react";

interface Props {
  type: string;
  className?: string;
}

export default function HubCardIllustrations({ type, className = "w-28 h-28" }: Props) {
  switch (type) {
    case "printing-exhibition":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Floor platform */}
          <polygon points="15,105 80,125 145,105 80,85" fill="#f1f5f9" />
          <polygon points="15,105 80,125 80,128 15,108" fill="#cbd5e1" />
          <polygon points="145,105 80,125 80,128 145,108" fill="#94a3b8" />

          {/* Expo Booth Walls */}
          <polygon points="40,90 80,105 80,35 40,25" fill="#06b6d4" />
          <polygon points="120,90 80,105 80,35 120,25" fill="#0891b2" />

          {/* Yellow Canopy Roof */}
          <polygon points="35,25 80,10 125,25 80,40" fill="#eab308" />
          <polygon points="35,25 80,40 80,44 35,29" fill="#ca8a04" />
          <polygon points="125,25 80,40 80,44 125,29" fill="#a16207" />

          {/* Booth Banners inside */}
          <rect x="48" y="45" width="22" height="30" rx="2" fill="#ffffff" />
          <rect x="52" y="50" width="14" height="6" fill="#f97316" />
          <rect x="52" y="60" width="14" height="2" fill="#94a3b8" />
          <rect x="52" y="65" width="10" height="2" fill="#94a3b8" />

          {/* Reception Counter */}
          <polygon points="85,92 110,83 110,95 85,104" fill="#f59e0b" />
          <polygon points="85,92 70,86 70,98 85,104" fill="#fbbf24" />
          <polygon points="85,92 110,83 95,78 70,86" fill="#fef08a" />

          {/* Human Visitors Figures */}
          {/* Person 1 */}
          <circle cx="60" cy="80" r="4" fill="#ec4899" />
          <path d="M57,85 Q60,83 63,85 L64,98 L56,98 Z" fill="#3b82f6" />
          {/* Person 2 */}
          <circle cx="75" cy="88" r="4.5" fill="#3b82f6" />
          <path d="M71,93 Q75,91 79,93 L80,106 L70,106 Z" fill="#10b981" />
          {/* Person 3 (Staff) */}
          <circle cx="95" cy="73" r="4" fill="#f97316" />
          <path d="M92,78 Q95,76 98,78 L98,88 L92,88 Z" fill="#6366f1" />
          {/* Person 4 */}
          <circle cx="120" cy="85" r="4" fill="#a855f7" />
          <path d="M117,90 Q120,88 123,90 L124,102 L116,102 Z" fill="#ef4444" />
        </svg>
      );

    case "magazine-services":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Open Magazine / Publication */}
          <g filter="drop-shadow(0 6px 14px rgba(0,0,0,0.12))">
            {/* Left Page */}
            <path d="M 28 32 C 45 28 65 30 78 36 L 78 108 C 65 102 45 100 28 104 Z" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
            {/* Right Page */}
            <path d="M 132 32 C 115 28 95 30 82 36 L 82 108 C 95 102 115 100 132 104 Z" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
            {/* Spine */}
            <line x1="80" y1="36" x2="80" y2="108" stroke="#0284c7" strokeWidth="3" />

            {/* Left page content: Illustrated layout */}
            <rect x="36" y="44" width="34" height="24" rx="2" fill="#0284c7" />
            <circle cx="53" cy="54" r="6" fill="#fde047" />
            <line x1="36" y1="75" x2="68" y2="75" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="82" x2="65" y2="82" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="36" y1="89" x2="68" y2="89" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="36" y1="96" x2="58" y2="96" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

            {/* Right page content: Human reading / article graphic */}
            <path d="M 92 48 C 92 44 116 44 118 52 C 120 60 92 68 118 72" stroke="#10b981" strokeWidth="2" fill="none" />
            <circle cx="106" cy="58" r="10" fill="#f59e0b" opacity="0.8" />
            <line x1="90" y1="80" x2="124" y2="80" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <line x1="90" y1="87" x2="120" y2="87" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="90" y1="94" x2="124" y2="94" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

            {/* Reading character in front */}
            <circle cx="80" cy="94" r="5" fill="#f43f5e" />
            <path d="M 76 100 Q 80 97 84 100 L 86 116 L 74 116 Z" fill="#0284c7" />
          </g>
        </svg>
      );

    case "printing-services":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Two yellow printing cylinders */}
          {/* Back Cylinder */}
          <g filter="drop-shadow(0 6px 12px rgba(234,179,8,0.25))">
            {/* Cylinder 1 */}
            <ellipse cx="60" cy="50" rx="16" ry="20" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 60 30 L 105 30 A 16 20 0 0 1 105 70 L 60 70 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <ellipse cx="105" cy="50" rx="16" ry="20" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="60" cy="50" r="5" fill="#a16207" />
            <circle cx="105" cy="50" r="5" fill="#a16207" />

            {/* Cylinder 2 (Lower offset) */}
            <ellipse cx="50" cy="85" rx="15" ry="18" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 50 67 L 95 67 A 15 18 0 0 1 95 103 L 50 103 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <ellipse cx="95" cy="85" rx="15" ry="18" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="50" cy="85" r="4.5" fill="#a16207" />
            <circle cx="95" cy="85" r="4.5" fill="#a16207" />

            {/* Paper Sheet Rolling Through */}
            <path d="M 85 58 C 98 56 120 62 135 75 L 125 115 C 110 102 90 98 75 98 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="90" y1="82" x2="125" y2="92" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="85" y1="92" x2="120" y2="102" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="80" y1="102" x2="115" y2="112" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
          </g>
        </svg>
      );

    case "buy-sell-machines":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Handshake Graphic */}
          <g filter="drop-shadow(0 6px 12px rgba(16,185,129,0.2))">
            {/* Left Arm & Hand (Yellow/Gold) */}
            <path d="M 30 45 L 60 55 L 75 72 L 65 80 L 48 70 L 25 58 Z" fill="#eab308" />
            {/* Right Arm & Hand (Cyan/Teal) */}
            <path d="M 130 45 L 100 55 L 85 72 L 95 80 L 112 70 L 135 58 Z" fill="#06b6d4" />
            
            {/* Clasping fingers */}
            <rect x="70" y="65" width="20" height="12" rx="4" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <rect x="74" y="68" width="16" height="10" rx="3" fill="#22d3ee" stroke="#0891b2" strokeWidth="1" />
            
            {/* "New Deals" curved badge */}
            <text x="80" y="93" textAnchor="middle" fill="#ea580c" fontSize="10" fontWeight="bold">New Deals</text>
            <text x="80" y="108" textAnchor="middle" fill="#0284c7" fontSize="13" fontWeight="900" letterSpacing="0.5">Buy &amp; Sell</text>
          </g>
        </svg>
      );

    case "free-design-files":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Computer Canvas / Draft Board */}
          <g filter="drop-shadow(0 6px 14px rgba(14,165,233,0.18))">
            <rect x="35" y="30" width="80" height="55" rx="6" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2.5" />
            {/* Grid inside canvas */}
            <line x1="35" y1="44" x2="115" y2="44" stroke="#e0f2fe" strokeWidth="1" />
            <line x1="35" y1="58" x2="115" y2="58" stroke="#e0f2fe" strokeWidth="1" />
            <line x1="35" y1="72" x2="115" y2="72" stroke="#e0f2fe" strokeWidth="1" />
            <line x1="55" y1="30" x2="55" y2="85" stroke="#e0f2fe" strokeWidth="1" />
            <line x1="75" y1="30" x2="75" y2="85" stroke="#e0f2fe" strokeWidth="1" />
            <line x1="95" y1="30" x2="95" y2="85" stroke="#e0f2fe" strokeWidth="1" />

            {/* Top yellow/orange arrow download */}
            <polygon points="105,20 120,20 120,32 127,32 112.5,46 98,32 105,32" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />

            {/* Drafting Tools: Compass & Pen */}
            {/* Drafting Triangle */}
            <polygon points="45,95 75,55 85,95" fill="none" stroke="#f59e0b" strokeWidth="3" />
            
            {/* Blue pen */}
            <polygon points="90,95 95,50 102,50 105,95" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="95,50 98.5,42 102,50" fill="#0284c7" />

            {/* Stand Base */}
            <rect x="60" y="98" width="40" height="8" rx="2" fill="#0ea5e9" />

            {/* "FREE TEMPLATE" text badge */}
            <rect x="42" y="86" width="76" height="15" rx="3" fill="#ffffff" stroke="#0ea5e9" strokeWidth="1" />
            <text x="80" y="97" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="bold">FREE TEMPLATE</text>
          </g>
        </svg>
      );

    case "paper-gsm-calculator":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stack of paper reams */}
          <g filter="drop-shadow(0 6px 14px rgba(0,0,0,0.12))">
            {/* Paper Block */}
            <polygon points="45,85 80,70 115,85 80,100" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
            <polygon points="45,85 80,100 80,118 45,103" fill="#38bdf8" />
            <polygon points="115,85 80,100 80,118 115,103" fill="#0284c7" />
            
            {/* Layer lines */}
            <line x1="45" y1="91" x2="80" y2="106" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
            <line x1="45" y1="97" x2="80" y2="112" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
            <text x="80" y="112" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">500 Sheets</text>

            {/* Circular GSM Gauge Meter on Top */}
            <circle cx="80" cy="50" r="28" fill="#ffffff" stroke="#facc15" strokeWidth="5" />
            <circle cx="80" cy="50" r="24" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Dial marks */}
            <line x1="80" y1="28" x2="80" y2="33" stroke="#f59e0b" strokeWidth="2" />
            <line x1="102" y1="50" x2="97" y2="50" stroke="#f59e0b" strokeWidth="2" />
            <line x1="58" y1="50" x2="63" y2="50" stroke="#f59e0b" strokeWidth="2" />

            {/* Dial Needle */}
            <line x1="80" y1="50" x2="72" y2="38" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="80" cy="50" r="3.5" fill="#1e293b" />

            <text x="80" y="60" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">100 GSM</text>
            <text x="80" y="68" textAnchor="middle" fill="#64748b" fontSize="5.5">GRAMMAGE</text>
          </g>
        </svg>
      );

    case "software-services":
      return (
        <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desktop Monitor Screen */}
          <g filter="drop-shadow(0 6px 14px rgba(13,148,136,0.18))">
            {/* Monitor Bezel */}
            <rect x="35" y="24" width="90" height="65" rx="6" fill="#ffffff" stroke="#0d9488" strokeWidth="2.5" />
            <rect x="40" y="29" width="80" height="52" fill="#f0fdfa" />

            {/* Left side: Checklist & status dots */}
            <circle cx="48" cy="40" r="3" fill="#10b981" />
            <line x1="54" y1="40" x2="70" y2="40" stroke="#0d9488" strokeWidth="1.5" />
            
            <circle cx="48" cy="49" r="3" fill="#f59e0b" />
            <line x1="54" y1="49" x2="68" y2="49" stroke="#94a3b8" strokeWidth="1.5" />
            
            <circle cx="48" cy="58" r="3" fill="#3b82f6" />
            <line x1="54" y1="58" x2="72" y2="58" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Right side: Analytics Bar Chart */}
            <rect x="80" y="36" width="34" height="28" rx="2" fill="#ffffff" stroke="#ccfbf1" strokeWidth="1" />
            <rect x="83" y="52" width="5" height="10" fill="#14b8a6" />
            <rect x="90" y="46" width="5" height="16" fill="#0d9488" />
            <rect x="97" y="42" width="5" height="20" fill="#f59e0b" />
            <rect x="104" y="38" width="5" height="24" fill="#06b6d4" />

            {/* Stand */}
            <rect x="74" y="89" width="12" height="12" fill="#0d9488" />
            <path d="M 60 101 L 100 101 L 96 106 L 64 106 Z" fill="#0f766e" />
          </g>
        </svg>
      );

    default:
      return null;
  }
}
