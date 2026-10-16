import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import FeaturedArticles from "@/components/FeaturedArticles";
import { galleryImages, testimonials, articles } from "@/data/content";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Workspace hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-medium mb-6 border border-white/20">
              ☕ Cafe & Coworking Space
            </span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Tempat Kerja yang
            <br />
            <span className="text-accent">Menginspirasi</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nikmati suasana cafe yang nyaman sambil bekerja di coworking space modern.
            Bergabung dengan komunitas kreatif dan produktif.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/cafe-coworking" variant="primary" size="lg">
              Jelajahi Space
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/kontak" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Hubungi Kami
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Apa yang Kami Tawarkan"
            subtitle="Ruang kreatif yang dirancang untuk produktivitas dan kolaborasi"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-surface rounded-2xl p-6 border border-gray-100 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
                  alt="Workspace interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            </div>
            <div data-aos="fade-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
                Lebih dari Sekedar Tempat Kerja
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Workspace lahir dari visi sederhana: menciptakan ruang di mana kreativitas bertemu produktivitas.
                Kami percaya bahwa lingkungan kerja yang tepat dapat memicu ide-ide terbaik.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Dengan konsep cafe dan coworking space yang terintegrasi, kami menawarkan pengalaman
                bekerja yang unik — lengkap dengan kopi berkualitas, fasilitas modern, dan komunitas yang supportive.
              </p>
              <Button href="/tentang-kami" variant="primary">
                Selengkapnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / News Section */}
      <section className="section-padding bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-wider block mb-2">
                Wawasan & Kabar Komunitas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Artikel & Berita Terbaru
              </h2>
            </div>
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group"
            >
              Lihat Semua Artikel
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <FeaturedArticles articles={articles} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Apa Kata Mereka"
            subtitle="Cerita dari komunitas yang telah merasakan pengalaman di Workspace"
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Galeri"
            subtitle="Intip suasana dan kegiatan di Workspace"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/galeri" variant="outline">
              Lihat Semua
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        {/* Modern Clean Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-modern-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" />
                <circle cx="36" cy="36" r="1.5" fill="white" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-modern-grid)" />
          </svg>
        </div>
        {/* Subtle ambient light glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bergabung dengan Komunitas Kami?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Kunjungi Workspace dan rasakan pengalaman bekerja yang berbeda.
            Bawa ide-ide terbaikmu dan temukan inspirasi baru.
          </p>
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/kontak"
              variant="amber"
              size="lg"
            >
              Kunjungi Kami
            </Button>
            <Button
              href="/kolaborasi"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Ajukan Kolaborasi
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const highlights = [
  {
    title: "Cafe",
    description: "Kopi berkualitas dan menu pilihan untuk menemani hari produktif Anda.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 2v4m4-4v4m4-4v4M3 10h18M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10m-2 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "Coworking Space",
    description: "Ruang kerja modern dengan fasilitas lengkap dan WiFi super cepat.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Kelas & Program",
    description: "Workshop dan bootcamp untuk mengembangkan skill profesional Anda.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Kolaborasi",
    description: "Peluang partnership dan kolaborasi dengan komunitas kreatif lokal.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];
