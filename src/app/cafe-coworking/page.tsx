import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { CafeCoworkingSilhouette } from "@/components/Silhouettes";
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
      <HeroSection
        badge={{ icon: "☕", text: "Ruang Kerja Terpadu & Kafe Spesialti" }}
        title="Cafe & Coworking Space"
        subtitle="Dua dunia harmonis: kenikmatan secangkir kopi berkualitas dan ruang kerja terpadu untuk produktivitas maksimal."
        silhouette={<CafeCoworkingSilhouette />}
      >
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
      </HeroSection>

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
