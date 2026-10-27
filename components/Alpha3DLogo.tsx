import * as React from "react";

interface Alpha3DLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Alpha3DLogo({
  className = "h-11 w-auto",
  width,
  height,
  ...props
}: Alpha3DLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 76"
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-label="Alpha 3D Advertisement Logo"
      {...props}
    >
      <defs>
        {/* Primary Warm Gold Gradient for Main Typography */}
        <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8D1" />
          <stop offset="22%" stopColor="#FBD365" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* 3D Extrusion Bevel Shadow */}
        <linearGradient id="bevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>

        {/* Outer Frame Golden Gradient */}
        <linearGradient id="goldFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>

        {/* Drop Shadow Filter for 3D Warm Radiance */}
        <filter id="goldGlow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0.5" dy="1.4" stdDeviation="0.9" floodColor="#78350F" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Outer Rectangular Golden Border Frame */}
      <rect
        x="6"
        y="5"
        width="248"
        height="66"
        rx="4.5"
        ry="4.5"
        stroke="url(#goldFrameGrad)"
        strokeWidth="1.8"
        fill="none"
      />

      {/* Delicate Inner Hairline Frame */}
      <rect
        x="8.5"
        y="7.5"
        width="243"
        height="61"
        rx="3"
        ry="3"
        stroke="url(#goldFrameGrad)"
        strokeWidth="0.5"
        strokeOpacity="0.35"
        fill="none"
      />

      {/* Elegant Corner Filigree Accents */}
      <path
        d="M 14 11 L 20 11 M 12 13 L 12 19 M 246 11 L 240 11 M 248 13 L 248 19 M 14 65 L 20 65 M 12 63 L 12 57 M 246 65 L 240 65 M 248 63 L 248 57"
        stroke="url(#goldFrameGrad)"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* CMYK 4-Color Print / Advertisement Emblem (Cyan, Magenta, Yellow, Key) */}
      <g transform="translate(198, 14)">
        <circle cx="0" cy="4" r="2.2" fill="#00AEEF" />
        <circle cx="4.5" cy="4" r="2.2" fill="#EC008C" />
        <circle cx="2.2" cy="0" r="2.2" fill="#FFF200" />
        <circle cx="2.2" cy="8" r="2.2" fill="#1E293B" />
      </g>

      {/* Main Brand Text: "Alpha 3D" with 3D Depth */}
      <g filter="url(#goldGlow)">
        {/* 3D Extrusion Shadow Layer */}
        <text
          x="126"
          y="42"
          textAnchor="middle"
          fill="url(#bevelGrad)"
          fontFamily="'Cinzel', 'Playfair Display', 'Bodoni MT', 'Times New Roman', Georgia, serif"
          fontSize="34"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="1.8"
          transform="translate(1.4, 1.8)"
        >
          Alpha 3D
        </text>

        {/* 3D Front Face Layer */}
        <text
          x="126"
          y="42"
          textAnchor="middle"
          fill="url(#goldTextGrad)"
          fontFamily="'Cinzel', 'Playfair Display', 'Bodoni MT', 'Times New Roman', Georgia, serif"
          fontSize="34"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="1.8"
        >
          Alpha 3D
        </text>

        {/* Dynamic Underline Swoosh curving under the wordmark */}
        <path
          d="M 36 46 C 70 49, 145 50, 206 46 C 218 45, 226 42, 230 38"
          stroke="url(#bevelGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          transform="translate(0.8, 1)"
        />
        <path
          d="M 36 46 C 70 49, 145 50, 206 46 C 218 45, 226 42, 230 38"
          stroke="url(#goldTextGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Subtitle Divider Lines with Diamond Accents */}
      <line
        x1="22"
        y1="58.5"
        x2="48"
        y2="58.5"
        stroke="url(#goldFrameGrad)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <polygon
        points="51,58.5 53,56.5 55,58.5 53,60.5"
        fill="url(#goldTextGrad)"
      />

      <polygon
        points="207,58.5 209,56.5 211,58.5 209,60.5"
        fill="url(#goldTextGrad)"
      />
      <line
        x1="214"
        y1="58.5"
        x2="238"
        y2="58.5"
        stroke="url(#goldFrameGrad)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Subtitle: "ADVERTISEMENT" */}
      <text
        x="131"
        y="61.5"
        textAnchor="middle"
        fill="url(#goldTextGrad)"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontSize="7.8"
        fontWeight="800"
        letterSpacing="4.5"
      >
        ADVERTISEMENT
      </text>
    </svg>
  );
}
