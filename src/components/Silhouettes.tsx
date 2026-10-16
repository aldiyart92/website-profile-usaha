import React from "react";

// Silhouette for Cafe & Coworking
export function CafeCoworkingSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="80" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M 65 80 L 95 80 L 90 95 L 70 95 Z" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="98" r="4" fill="#F59E0B" opacity="0.9" />

      <line x1="250" y1="0" x2="250" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M 235 60 L 265 60 L 260 75 L 240 75 Z" fill="currentColor" opacity="0.6" />
      <circle cx="250" cy="78" r="4" fill="#F59E0B" opacity="0.9" />

      <line x1="420" y1="0" x2="420" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M 405 85 L 435 85 L 430 100 L 410 100 Z" fill="currentColor" opacity="0.6" />
      <circle cx="420" cy="103" r="4" fill="#F59E0B" opacity="0.9" />

      <rect x="180" y="95" width="140" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="195" y="78" width="12" height="17" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="212" y="75" width="10" height="20" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="280" y="80" width="18" height="15" rx="3" fill="currentColor" opacity="0.4" />

      <path d="M 30 310 L 45 350 L 15 350 Z" fill="currentColor" opacity="0.7" />
      <ellipse cx="30" cy="270" rx="20" ry="35" fill="currentColor" opacity="0.5" transform="rotate(-20 30 270)" />
      <ellipse cx="45" cy="250" rx="18" ry="32" fill="currentColor" opacity="0.6" transform="rotate(15 45 250)" />
      <ellipse cx="18" cy="245" rx="15" ry="28" fill="currentColor" opacity="0.5" transform="rotate(-35 18 245)" />

      <rect x="70" y="240" width="360" height="10" rx="3" fill="currentColor" opacity="0.9" />
      <rect x="90" y="250" width="6" height="100" fill="currentColor" opacity="0.7" />
      <rect x="400" y="250" width="6" height="100" fill="currentColor" opacity="0.7" />
      <rect x="247" y="250" width="6" height="100" fill="currentColor" opacity="0.5" />

      <circle cx="150" cy="170" r="15" fill="currentColor" opacity="0.85" />
      <path d="M 130 240 L 140 190 Q 150 185 160 190 L 175 240 Z" fill="currentColor" opacity="0.85" />
      <rect x="115" y="200" width="6" height="50" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="110" y="248" width="40" height="6" rx="2" fill="currentColor" opacity="0.6" />
      <line x1="125" y1="254" x2="125" y2="350" stroke="currentColor" strokeWidth="5" opacity="0.6" />
      <path d="M 180 238 L 195 210 L 210 210 L 200 238 Z" fill="currentColor" opacity="0.95" />
      <rect x="175" y="238" width="35" height="3" rx="1.5" fill="currentColor" opacity="0.95" />
      <polygon points="184,235 197,213 207,213 197,235" fill="white" opacity="0.9" />

      <rect x="220" y="230" width="12" height="10" rx="2" fill="currentColor" opacity="0.8" />
      <path d="M 232 232 Q 237 235 232 238" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M 223 227 Q 225 223 224 220" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M 228 227 Q 230 222 229 218" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      <circle cx="340" cy="165" r="15" fill="currentColor" opacity="0.85" />
      <path d="M 320 240 L 330 185 Q 340 180 350 185 L 365 240 Z" fill="currentColor" opacity="0.85" />
      <rect x="365" y="195" width="6" height="50" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="335" y="248" width="40" height="6" rx="2" fill="currentColor" opacity="0.6" />
      <line x1="355" y1="254" x2="355" y2="350" stroke="currentColor" strokeWidth="5" opacity="0.6" />
      <path d="M 290 238 L 305 212 L 318 212 L 308 238 Z" fill="currentColor" opacity="0.95" />
      <rect x="285" y="238" width="32" height="3" rx="1.5" fill="currentColor" opacity="0.95" />
      <polygon points="293,235 306,215 315,215 304,235" fill="white" opacity="0.9" />

      <ellipse cx="380" cy="232" rx="6" ry="9" fill="currentColor" opacity="0.7" />
      <rect x="377" y="234" width="6" height="6" rx="1" fill="currentColor" opacity="0.7" />

      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// Silhouette for Kelas & Programme (Workshop / Classroom / Mentor presenting)
export function KelasProgrammeSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightbulb idea glow on top */}
      <circle cx="250" cy="45" r="14" fill="#F59E0B" opacity="0.8" />
      <path d="M 244 59 L 256 59 L 253 66 L 247 66 Z" fill="currentColor" opacity="0.8" />
      <line x1="250" y1="22" x2="250" y2="15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="230" y1="35" x2="223" y2="30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="270" y1="35" x2="277" y2="30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />

      {/* Main Presentation Screen / Whiteboard */}
      <rect x="130" y="80" width="240" height="135" rx="8" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2" />
      <line x1="160" y1="110" x2="220" y2="110" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="160" y1="125" x2="200" y2="125" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Chart lines on board */}
      <polyline points="240,155 265,130 290,140 330,105" stroke="#52B788" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="330" cy="105" r="4" fill="#F59E0B" />

      {/* Stand legs for board */}
      <line x1="180" y1="215" x2="160" y2="280" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <line x1="320" y1="215" x2="340" y2="280" stroke="currentColor" strokeWidth="3" opacity="0.5" />

      {/* Mentor / Speaker silhouette (Standing Left of Screen) */}
      <circle cx="95" cy="140" r="16" fill="currentColor" opacity="0.9" />
      <path d="M 75 220 L 85 160 Q 95 155 105 160 L 115 220 Z" fill="currentColor" opacity="0.9" />
      {/* Arm pointing towards board */}
      <path d="M 105 175 L 145 140" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      {/* Lower body / pants */}
      <rect x="83" y="220" width="10" height="130" fill="currentColor" opacity="0.8" />
      <rect x="97" y="220" width="10" height="130" fill="currentColor" opacity="0.8" />

      {/* Audience / Students sitting at workshop desk */}
      <rect x="210" y="260" width="260" height="8" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="230" y="268" width="5" height="82" fill="currentColor" opacity="0.7" />
      <rect x="440" y="268" width="5" height="82" fill="currentColor" opacity="0.7" />

      {/* Student 1 */}
      <circle cx="280" cy="205" r="14" fill="currentColor" opacity="0.85" />
      <path d="M 262 260 L 270 222 Q 280 218 290 222 L 298 260 Z" fill="currentColor" opacity="0.85" />
      {/* Laptop 1 */}
      <polygon points="305,258 318,238 328,238 318,258" fill="white" opacity="0.9" />
      <rect x="300" y="258" width="28" height="2.5" fill="currentColor" opacity="0.9" />

      {/* Student 2 */}
      <circle cx="390" cy="200" r="14" fill="currentColor" opacity="0.85" />
      <path d="M 372 260 L 380 217 Q 390 214 400 217 L 408 260 Z" fill="currentColor" opacity="0.85" />
      {/* Notepad / Tablet */}
      <rect x="415" y="255" width="20" height="4" rx="1" fill="#F59E0B" opacity="0.8" />

      {/* Floor Line */}
      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// Silhouette for Kolaborasi (Partnership / Handshake / Co-creation / Strategy)
export function KolaborasiSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connecting Network Hub / Geometric Nodes in Background */}
      <circle cx="250" cy="80" r="22" fill="#52B788" opacity="0.3" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="110" r="14" fill="currentColor" opacity="0.2" />
      <circle cx="360" cy="110" r="14" fill="currentColor" opacity="0.2" />
      <line x1="152" y1="105" x2="230" y2="85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      <line x1="348" y1="105" x2="270" y2="85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      {/* Partnership Icon in center hub */}
      <path d="M 242 80 L 250 87 L 258 75" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Two Partners Meeting Across Table */}
      <ellipse cx="250" cy="270" rx="160" ry="25" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2" />

      {/* Partner Left (Founder / Creator) */}
      <circle cx="110" cy="170" r="18" fill="currentColor" opacity="0.85" />
      <path d="M 85 260 L 98 195 Q 110 190 122 195 L 138 260 Z" fill="currentColor" opacity="0.85" />
      <line x1="95" y1="260" x2="95" y2="350" stroke="currentColor" strokeWidth="10" opacity="0.7" />
      <line x1="118" y1="260" x2="118" y2="350" stroke="currentColor" strokeWidth="10" opacity="0.7" />
      {/* Left arm extending to handshake */}
      <path d="M 125 210 Q 180 220 220 215" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.9" />

      {/* Partner Right (Collaborator / Brand) */}
      <circle cx="390" cy="170" r="18" fill="currentColor" opacity="0.85" />
      <path d="M 362 260 L 378 195 Q 390 190 402 195 L 415 260 Z" fill="currentColor" opacity="0.85" />
      <line x1="382" y1="260" x2="382" y2="350" stroke="currentColor" strokeWidth="10" opacity="0.7" />
      <line x1="405" y1="260" x2="405" y2="350" stroke="currentColor" strokeWidth="10" opacity="0.7" />
      {/* Right arm extending to handshake */}
      <path d="M 375 210 Q 320 220 280 215" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.9" />

      {/* Glowing Handshake Node in Center */}
      <circle cx="250" cy="215" r="20" fill="#F59E0B" opacity="0.25" />
      <circle cx="250" cy="215" r="9" fill="#F59E0B" opacity="0.9" />
      <path d="M 225 215 L 245 215 Q 250 210 255 215 L 275 215" stroke="white" strokeWidth="4" strokeLinecap="round" />

      {/* Modern Strategy Blueprint / Document on table */}
      <polygon points="215,260 285,255 295,280 225,285" fill="white" opacity="0.7" />
      <line x1="230" y1="267" x2="270" y2="264" stroke="#2D6A4F" strokeWidth="2" />
      <line x1="233" y1="274" x2="265" y2="271" stroke="#2D6A4F" strokeWidth="1.5" />

      {/* Floor Line */}
      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// Silhouette for Tentang Kami (Founders / Vision / Modern Workspace Architecture)
export function TentangKamiSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern Architectural Building Facade in Background */}
      <rect x="80" y="60" width="340" height="290" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      {/* Window Grid Lines */}
      <line x1="80" y1="120" x2="420" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="180" x2="420" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="240" x2="420" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="165" y1="60" x2="165" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="250" y1="60" x2="250" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="335" y1="60" x2="335" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Sun / Vision Emblem behind founders */}
      <circle cx="250" cy="110" r="38" fill="#F59E0B" opacity="0.2" />
      <circle cx="250" cy="110" r="18" fill="#F59E0B" opacity="0.7" />

      {/* Potted Ficus Trees on both sides */}
      <ellipse cx="60" cy="280" rx="25" ry="40" fill="currentColor" opacity="0.5" />
      <rect x="52" y="320" width="16" height="30" fill="currentColor" opacity="0.7" />

      <ellipse cx="440" cy="280" rx="25" ry="40" fill="currentColor" opacity="0.5" />
      <rect x="432" y="320" width="16" height="30" fill="currentColor" opacity="0.7" />

      {/* Three Co-founders standing proudly in foreground */}
      {/* Founder Center (Lead) */}
      <circle cx="250" cy="175" r="17" fill="currentColor" opacity="0.95" />
      <path d="M 226 260 L 236 200 Q 250 195 264 200 L 274 260 Z" fill="currentColor" opacity="0.95" />
      <rect x="238" y="260" width="10" height="90" fill="currentColor" opacity="0.85" />
      <rect x="252" y="260" width="10" height="90" fill="currentColor" opacity="0.85" />

      {/* Founder Left */}
      <circle cx="185" cy="190" r="15" fill="currentColor" opacity="0.9" />
      <path d="M 165 270 L 173 215 Q 185 210 197 215 L 205 270 Z" fill="currentColor" opacity="0.9" />
      <rect x="175" y="270" width="9" height="80" fill="currentColor" opacity="0.8" />
      <rect x="188" y="270" width="9" height="80" fill="currentColor" opacity="0.8" />

      {/* Founder Right */}
      <circle cx="315" cy="190" r="15" fill="currentColor" opacity="0.9" />
      <path d="M 295 270 L 303 215 Q 315 210 327 215 L 335 270 Z" fill="currentColor" opacity="0.9" />
      <rect x="303" y="270" width="9" height="80" fill="currentColor" opacity="0.8" />
      <rect x="316" y="270" width="9" height="80" fill="currentColor" opacity="0.8" />

      {/* Floor Line */}
      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// Silhouette for Artikel & Blog (Journalism / Creative Writing / Coffee & Reading)
export function ArtikelSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle Newspaper / Magazine Pages Floating */}
      <rect x="60" y="80" width="110" height="150" rx="6" fill="currentColor" opacity="0.2" transform="rotate(-10 60 80)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="85" y1="110" x2="140" y2="100" stroke="white" strokeWidth="2.5" opacity="0.6" />
      <line x1="87" y1="125" x2="135" y2="117" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <line x1="89" y1="138" x2="145" y2="128" stroke="white" strokeWidth="1.5" opacity="0.4" />

      {/* Desk Surface */}
      <rect x="50" y="260" width="400" height="10" rx="3" fill="currentColor" opacity="0.9" />
      <rect x="80" y="270" width="6" height="80" fill="currentColor" opacity="0.7" />
      <rect x="414" y="270" width="6" height="80" fill="currentColor" opacity="0.7" />

      {/* Open Modern Laptop & Writer Silhouette in Center */}
      <circle cx="250" cy="165" r="16" fill="currentColor" opacity="0.9" />
      <path d="M 226 260 L 236 190 Q 250 185 264 190 L 274 260 Z" fill="currentColor" opacity="0.9" />

      {/* Laptop Screen */}
      <polygon points="230,257 245,218 275,218 260,257" fill="white" opacity="0.9" />
      <rect x="225" y="257" width="50" height="3" fill="currentColor" opacity="0.9" />

      {/* Stack of books on right */}
      <rect x="340" y="235" width="65" height="10" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="345" y="222" width="60" height="10" rx="2" fill="currentColor" opacity="0.8" />
      <rect x="350" y="210" width="50" height="10" rx="2" fill="#52B788" opacity="0.9" />

      {/* Coffee cup with aroma swirl */}
      <rect x="150" y="245" width="16" height="14" rx="2" fill="currentColor" opacity="0.8" />
      <path d="M 166 248 Q 172 252 166 256" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M 155 240 Q 158 235 156 230" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M 161 240 Q 164 234 162 228" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* Feather pen / quill symbol overlay in top corner */}
      <circle cx="380" cy="80" r="28" fill="#F59E0B" opacity="0.2" />
      <path d="M 370 95 Q 380 75 395 65 Q 385 85 375 95 Z" fill="#F59E0B" opacity="0.9" />

      {/* Floor Line */}
      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// Silhouette for Galeri (Photography / Exhibition / Creative Moments)
export function GaleriSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gallery Wall with 3 Framed Artworks */}
      <rect x="90" y="70" width="80" height="60" rx="4" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2" />
      <rect x="100" y="80" width="60" height="40" rx="2" fill="white" opacity="0.6" />
      <circle cx="115" cy="92" r="5" fill="#F59E0B" />
      <polygon points="105,115 125,98 140,110 155,95 158,115" fill="#52B788" />

      <rect x="210" y="55" width="90" height="75" rx="4" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" />
      <rect x="220" y="65" width="70" height="55" rx="2" fill="white" opacity="0.7" />
      <circle cx="238" cy="80" r="7" fill="#F59E0B" />
      <polygon points="225,115 250,90 270,105 285,92 288,115" fill="#2D6A4F" />

      <rect x="340" y="70" width="80" height="60" rx="4" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2" />
      <rect x="350" y="80" width="60" height="40" rx="2" fill="white" opacity="0.6" />

      {/* Professional Camera on Tripod (Left) */}
      <rect x="110" y="180" width="35" height="24" rx="4" fill="currentColor" opacity="0.9" />
      <circle cx="127" cy="192" r="7" fill="white" opacity="0.8" />
      <rect x="120" y="176" width="14" height="4" rx="1" fill="#F59E0B" opacity="0.9" />
      {/* Tripod legs */}
      <line x1="127" y1="204" x2="105" y2="350" stroke="currentColor" strokeWidth="3" opacity="0.7" />
      <line x1="127" y1="204" x2="127" y2="350" stroke="currentColor" strokeWidth="3" opacity="0.7" />
      <line x1="127" y1="204" x2="150" y2="350" stroke="currentColor" strokeWidth="3" opacity="0.7" />

      {/* Photographer / Creative Visitor admiring works */}
      <circle cx="270" cy="175" r="16" fill="currentColor" opacity="0.85" />
      <path d="M 248 260 L 258 200 Q 270 195 282 200 L 292 260 Z" fill="currentColor" opacity="0.85" />
      <rect x="258" y="260" width="10" height="90" fill="currentColor" opacity="0.8" />
      <rect x="272" y="260" width="10" height="90" fill="currentColor" opacity="0.8" />
      {/* Arm holding camera to eye */}
      <path d="M 275 200 L 265 185" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <rect x="252" y="178" width="16" height="12" rx="2" fill="white" opacity="0.9" />

      {/* Flash / Aperture burst sparkle */}
      <circle cx="245" cy="180" r="14" fill="#F59E0B" opacity="0.4" />
      <polygon points="245,170 248,178 256,180 248,182 245,190 242,182 234,180 242,178" fill="#F59E0B" />

      {/* Floor Line */}
      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// Silhouette for Kontak Kami (Communication / Helpdesk / Location Pin / Connected)
export function KontakSilhouette() {
  return (
    <svg
      viewBox="0 0 500 360"
      className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Big Map Pin in Background with Glow */}
      <circle cx="340" cy="100" r="45" fill="#F59E0B" opacity="0.2" />
      <path
        d="M 340 60 C 320 60 305 75 305 95 C 305 125 340 160 340 160 C 340 160 375 125 375 95 C 375 75 360 60 340 60 Z"
        fill="#F59E0B"
        opacity="0.9"
      />
      <circle cx="340" cy="95" r="12" fill="white" />

      {/* Speech / Chat Bubbles */}
      <rect x="100" y="75" width="110" height="55" rx="14" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="120,130 140,130 120,145" fill="currentColor" opacity="0.3" />
      <circle cx="130" cy="102" r="4" fill="white" opacity="0.9" />
      <circle cx="155" cy="102" r="4" fill="white" opacity="0.9" />
      <circle cx="180" cy="102" r="4" fill="white" opacity="0.9" />

      {/* Modern Reception / Concierge Desk */}
      <rect x="70" y="240" width="360" height="12" rx="3" fill="currentColor" opacity="0.9" />
      <rect x="85" y="252" width="330" height="98" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />

      {/* Friendly Customer Support / Receptionist */}
      <circle cx="250" cy="165" r="16" fill="currentColor" opacity="0.9" />
      <path d="M 226 240 L 235 190 Q 250 185 265 190 L 274 240 Z" fill="currentColor" opacity="0.9" />
      {/* Headset wire & earphone */}
      <path d="M 240 160 Q 250 150 260 160" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
      <circle cx="261" cy="163" r="3" fill="#F59E0B" />
      <line x1="261" y1="165" x2="255" y2="175" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />

      {/* Desk Items: Monitor, Phone, Plant */}
      {/* Monitor */}
      <rect x="150" y="200" width="45" height="32" rx="2" fill="white" opacity="0.8" />
      <rect x="168" y="232" width="9" height="8" fill="currentColor" opacity="0.8" />
      <rect x="158" y="238" width="29" height="2" fill="currentColor" opacity="0.8" />

      {/* Desk Bell */}
      <path d="M 320 238 Q 325 228 330 238 Z" fill="#F59E0B" opacity="0.9" />
      <circle cx="325" cy="227" r="2" fill="#F59E0B" />

      {/* Indoor Desk Plant */}
      <ellipse cx="370" cy="225" rx="10" ry="15" fill="#52B788" opacity="0.9" />
      <rect x="365" y="232" width="10" height="8" rx="1" fill="currentColor" opacity="0.7" />

      {/* Floor Line */}
      <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}
