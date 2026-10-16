import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Cafe & Coworking Space",
  description: "Fasilitas cafe santai dan coworking space modern dengan paket fleksibel dan fasilitas lengkap.",
};

const cafeMenu = [
  {
    name: "Espresso Signature Blend",
    category: "Coffee",
    price: "Rp 28.000",
    desc: "Perpaduan biji kopi Flores & Sumatera dengan aroma coklat dan rempah khas.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop",
  },
  {
    name: "Artisan Pour Over",
    category: "Manual Brew",
    price: "Rp 35.000",
    desc: "Single origin pilihan dengan metode seduh V60 untuk rasa yang clean dan aromatik.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
  },
  {
    name: "Matcha Oat Latte",
    category: "Non-Coffee",
    price: "Rp 38.000",
    desc: "Pure matcha premium dari Uji Jepang dipadukan dengan creamy oat milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=400&fit=crop",
  },
  {
    name: "Almond Croissant",
    category: "Pastry",
    price: "Rp 32.000",
    desc: "Croissant renyah berlapis dengan isian almond paste dan taburan roasted almond.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop",
  },
  {
    name: "Truffle Fries & Dip",
    category: "Snack",
    price: "Rp 36.000",
    desc: "Kentang goreng renyah dengan minyak truffle aromatik dan saus tartar homemade.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=600&h=400&fit=crop",
  },
  {
    name: "Grilled Chicken Sourdough",
    category: "Main Course",
    price: "Rp 54.000",
    desc: "Sandwich roti sourdough dengan dada ayam panggang, selada segar, dan mustard aioli.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop",
  },
];

const coworkingPlans = [
  {
    name: "Daily Pass",
    price: "Rp 65.000",
    period: "per hari",
    featured: false,
    features: [
      "Akses 1 hari kerja (08.00 - 22.00)",
      "High-speed WiFi hingga 100 Mbps",
      "Free 1 cup Americano / Tea",
      "Akses area Hot Desk terbuka",
      "Power outlet di setiap meja",
    ],
    cta: "Pilih Daily",
  },
  {
    name: "Flexible Weekly",
    price: "Rp 350.000",
    period: "per minggu",
    featured: true,
    badge: "Paling Populer",
    features: [
      "Akses 7 hari kerja fleksibel",
      "High-speed WiFi priority",
      "Diskon 15% semua menu Cafe",
      "Kredit Meeting Room 2 jam",
      "Free flow mineral water",
      "Locker penyimpanan barang",
    ],
    cta: "Mulai Mingguan",
  },
  {
    name: "Monthly Resident",
    price: "Rp 1.200.000",
    period: "per bulan",
    featured: false,
    features: [
      "Akses 30 hari + Dedicated Desk",
      "High-speed WiFi dedicated",
      "Diskon 20% Cafe & Merchandise",
      "Kredit Meeting Room 8 jam/bulan",
      "Alamat bisnis & layanan surat",
      "Akses gratis workshop & event",
    ],
    cta: "Daftar Bulanan",
  },
];

const facilities = [
  {
    title: "High-Speed Internet",
    desc: "Koneksi fiber optic stabil hingga 200 Mbps dengan backup provider ganda.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Ergonomic Chairs & Desks",
    desc: "Kursi ergonomis standar premium agar tetap nyaman saat sesi kerja panjang.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Private Meeting Rooms",
    desc: "Ruang rapat kedap suara lengkap dengan smart TV dan proyektor 4K.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Phone Booth & Pods",
    desc: "Bilik pribadi terisolasi suara untuk meeting online atau panggilan penting.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function CafeCoworkingPage() {
  return (
    <>
      {/* Minimalist Hero Section with Cafe & Coworking Silhouette */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-dark via-[#214F3B] to-primary overflow-hidden text-white border-b border-primary-light/10">
        {/* Subtle dot matrix pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cafe-hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cafe-hero-dots)" />
          </svg>
        </div>

        {/* Ambient soft glow */}
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-primary-light/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Clean Minimalist Text */}
            <div className="lg:col-span-7" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-accent mb-6 shadow-sm">
                <span>☕</span>
                <span>Ruang Kerja Terpadu & Kafe Spesialti</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Cafe & Coworking Space
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-on-dark/85 max-w-xl leading-relaxed mb-8">
                Dua dunia harmonis: kenikmatan secangkir kopi berkualitas dan ruang kerja terpadu untuk produktivitas maksimal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="#coworking-plans"
                  variant="primary"
                  className="bg-white text-primary hover:bg-accent hover:text-primary-dark shadow-lg"
                >
                  Lihat Paket Coworking
                </Button>
                <Button
                  href="#cafe-menu"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Menu Cafe
                </Button>
              </div>
            </div>

            {/* Right: Modern Vector Silhouette of Cafe & Coworking Space */}
            <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm flex items-end justify-center shadow-2xl overflow-hidden group">
                {/* Silhouette SVG Scene */}
                <svg
                  viewBox="0 0 500 360"
                  className="w-full h-full text-accent/80 transition-transform duration-700 group-hover:scale-102"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Pendant hanging lamps */}
                  <line x1="80" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 65 80 L 95 80 L 90 95 L 70 95 Z" fill="currentColor" opacity="0.6" />
                  <circle cx="80" cy="98" r="4" fill="#F59E0B" opacity="0.9" />

                  <line x1="250" y1="0" x2="250" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 235 60 L 265 60 L 260 75 L 240 75 Z" fill="currentColor" opacity="0.6" />
                  <circle cx="250" cy="78" r="4" fill="#F59E0B" opacity="0.9" />

                  <line x1="420" y1="0" x2="420" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 405 85 L 435 85 L 430 100 L 410 100 Z" fill="currentColor" opacity="0.6" />
                  <circle cx="420" cy="103" r="4" fill="#F59E0B" opacity="0.9" />

                  {/* Windows / Minimalist Wall Shelves */}
                  <rect x="180" y="95" width="140" height="4" rx="2" fill="currentColor" opacity="0.3" />
                  <rect x="195" y="78" width="12" height="17" rx="1" fill="currentColor" opacity="0.5" />
                  <rect x="212" y="75" width="10" height="20" rx="1" fill="currentColor" opacity="0.5" />
                  <rect x="280" y="80" width="18" height="15" rx="3" fill="currentColor" opacity="0.4" />

                  {/* Left Side: Potted Plant (Monstera / Biophilic aesthetic) */}
                  <path d="M 30 310 L 45 350 L 15 350 Z" fill="currentColor" opacity="0.7" />
                  <ellipse cx="30" cy="270" rx="20" ry="35" fill="currentColor" opacity="0.5" transform="rotate(-20 30 270)" />
                  <ellipse cx="45" cy="250" rx="18" ry="32" fill="currentColor" opacity="0.6" transform="rotate(15 45 250)" />
                  <ellipse cx="18" cy="245" rx="15" ry="28" fill="currentColor" opacity="0.5" transform="rotate(-35 18 245)" />

                  {/* Center: Long Coworking Desk */}
                  <rect x="70" y="240" width="360" height="10" rx="3" fill="currentColor" opacity="0.9" />
                  {/* Desk Legs */}
                  <rect x="90" y="250" width="6" height="100" fill="currentColor" opacity="0.7" />
                  <rect x="400" y="250" width="6" height="100" fill="currentColor" opacity="0.7" />
                  <rect x="247" y="250" width="6" height="100" fill="currentColor" opacity="0.5" />

                  {/* Coworker 1: Person working on Laptop (Left) */}
                  {/* Head */}
                  <circle cx="150" cy="170" r="15" fill="currentColor" opacity="0.85" />
                  {/* Body / Torso leaning slightly forward */}
                  <path d="M 130 240 L 140 190 Q 150 185 160 190 L 175 240 Z" fill="currentColor" opacity="0.85" />
                  {/* Ergonomic Chair */}
                  <rect x="115" y="200" width="6" height="50" rx="2" fill="currentColor" opacity="0.6" />
                  <rect x="110" y="248" width="40" height="6" rx="2" fill="currentColor" opacity="0.6" />
                  <line x1="125" y1="254" x2="125" y2="350" stroke="currentColor" strokeWidth="5" opacity="0.6" />
                  {/* Laptop open */}
                  <path d="M 180 238 L 195 210 L 210 210 L 200 238 Z" fill="currentColor" opacity="0.95" />
                  <rect x="175" y="238" width="35" height="3" rx="1.5" fill="currentColor" opacity="0.95" />
                  {/* Glowing laptop screen */}
                  <polygon points="184,235 197,213 207,213 197,235" fill="white" opacity="0.9" />

                  {/* Cafe Mug with subtle steam */}
                  <rect x="220" y="230" width="12" height="10" rx="2" fill="currentColor" opacity="0.8" />
                  <path d="M 232 232 Q 237 235 232 238" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <path d="M 223 227 Q 225 223 224 220" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                  <path d="M 228 227 Q 230 222 229 218" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

                  {/* Coworker 2: Collaborator / Barista Coffee Corner (Right) */}
                  {/* Head */}
                  <circle cx="340" cy="165" r="15" fill="currentColor" opacity="0.85" />
                  {/* Torso */}
                  <path d="M 320 240 L 330 185 Q 340 180 350 185 L 365 240 Z" fill="currentColor" opacity="0.85" />
                  {/* Chair */}
                  <rect x="365" y="195" width="6" height="50" rx="2" fill="currentColor" opacity="0.6" />
                  <rect x="335" y="248" width="40" height="6" rx="2" fill="currentColor" opacity="0.6" />
                  <line x1="355" y1="254" x2="355" y2="350" stroke="currentColor" strokeWidth="5" opacity="0.6" />
                  {/* Second laptop */}
                  <path d="M 290 238 L 305 212 L 318 212 L 308 238 Z" fill="currentColor" opacity="0.95" />
                  <rect x="285" y="238" width="32" height="3" rx="1.5" fill="currentColor" opacity="0.95" />
                  <polygon points="293,235 306,215 315,215 304,235" fill="white" opacity="0.9" />

                  {/* Right small plant on desk */}
                  <ellipse cx="380" cy="232" rx="6" ry="9" fill="currentColor" opacity="0.7" />
                  <rect x="377" y="234" width="6" height="6" rx="1" fill="currentColor" opacity="0.7" />

                  {/* Floor Line */}
                  <line x1="0" y1="350" x2="500" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                </svg>

                {/* Subtle caption badge inside artwork */}
                <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-wider font-semibold text-accent/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  Workspace Atmosphere
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Suasana & Pengalaman
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
                Dirancang untuk Fokus, Diperkaya dengan Kenyamanan
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Kami memahami bahwa ritme kerja setiap profesional berbeda. Ada saatnya Anda membutuhkan
                meja yang tenang dengan pencahayaan hangat, dan ada saatnya Anda memerlukan diskusi santai
                ditemani sajian kopi pilihan.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Area Cafe kami terbuka untuk umum dengan suasana rileks nan estetik, sementara Coworking
                Area dirancang khusus dengan zonasi kedap suara, colokan listrik memadai, dan fasilitas penunjang
                profesional modern.
              </p>
              <div className="flex gap-4">
                <Button href="#coworking-plans" variant="primary">
                  Lihat Paket Coworking
                </Button>
                <Button href="#cafe-menu" variant="outline">
                  Menu Cafe
                </Button>
              </div>
            </div>

            <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=800&fit=crop"
                  alt="Cafe atmosphere"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=800&fit=crop"
                  alt="Coworking focus desk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Fasilitas Unggulan"
            subtitle="Semua kebutuhan kerja profesional disiapkan agar Anda tinggal duduk dan berkarya"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl border border-gray-100 bg-background card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {fac.icon}
                </div>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{fac.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coworking Plans */}
      <section id="coworking-plans" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Paket Keanggotaan Coworking"
            subtitle="Pilihan fleksibel tanpa komitmen rumit, disesuaikan dengan kebutuhan ritme kerja Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {coworkingPlans.map((plan, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.featured
                    ? "bg-primary-dark text-text-on-dark shadow-2xl scale-105 border-2 border-primary-light"
                    : "bg-surface border border-gray-100 text-text-primary card-hover"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-light text-primary-dark text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-text-primary"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-3xl lg:text-4xl font-extrabold ${plan.featured ? "text-accent" : "text-primary"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.featured ? "text-text-on-dark/70" : "text-text-secondary"}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        <svg
                          className={`w-5 h-5 shrink-0 ${plan.featured ? "text-accent" : "text-primary"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.featured ? "text-text-on-dark/90" : "text-text-secondary"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href="/kontak"
                  variant={plan.featured ? "primary" : "outline"}
                  className={plan.featured ? "bg-primary-light text-primary-dark hover:bg-white" : "w-full"}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Menu Showcase */}
      <section id="cafe-menu" className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Menu Unggulan Cafe"
            subtitle="Kopi spesialti racikan barista andalan dan hidangan lezat untuk menjaga energi produktif Anda"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafeMenu.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="bg-background rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-bold text-lg text-text-primary">{item.name}</h4>
                      <span className="text-primary font-bold text-sm ml-2">{item.price}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
