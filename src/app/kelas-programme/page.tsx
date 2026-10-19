import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { KelasProgrammeSilhouette } from "@/components/Silhouettes";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import { programs, testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Kelas & Programme",
  description: "Daftar kelas intensif, workshop keahlian, dan program inkubasi komunitas di Workspace.",
};

export default function KelasProgrammePage() {
  return (
    <>
      <HeroSection
        badge={{ icon: "🎓", text: "Program Pelatihan & Workshop Terpadu" }}
        title="Kelas & Programme"
        subtitle="Tingkatkan keahlian digital, bisnis, dan kreativitas Anda melalui program terarah bersama mentor praktisi."
        silhouette={<KelasProgrammeSilhouette />}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#daftar-program" variant="amber">
            Lihat Program Mendatang
          </Button>
          <Button
            href="/kontak"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Konsultasi Program
          </Button>
        </div>
      </HeroSection>

      {/* Program Categories / Stats */}
      <section id="daftar-program" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
            <div data-aos="fade-up" className="p-6 bg-surface rounded-2xl border border-gray-100">
              <span className="text-3xl md:text-4xl font-extrabold text-primary block mb-2">500+</span>
              <span className="text-text-secondary text-sm">Alumni Terlatih</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="p-6 bg-surface rounded-2xl border border-gray-100">
              <span className="text-3xl md:text-4xl font-extrabold text-primary block mb-2">30+</span>
              <span className="text-text-secondary text-sm">Workshop Selesai</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="p-6 bg-surface rounded-2xl border border-gray-100">
              <span className="text-3xl md:text-4xl font-extrabold text-primary block mb-2">25+</span>
              <span className="text-text-secondary text-sm">Mentor Praktisi</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="p-6 bg-surface rounded-2xl border border-gray-100">
              <span className="text-3xl md:text-4xl font-extrabold text-primary block mb-2">95%</span>
              <span className="text-text-secondary text-sm">Tingkat Kepuasan</span>
            </div>
          </div>

          <SectionHeading
            title="Daftar Kelas & Program Mendatang"
            subtitle="Pilih program pembelajaran yang relevan untuk menunjang karier atau mengembangkan usaha Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-surface rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col h-full"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-medium">
                    Batch 2026
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {program.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/5 p-3 rounded-xl mb-6">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{program.schedule}</span>
                    </div>
                    <Button href="/kontak" variant="primary" className="w-full">
                      Daftar Program
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pengalaman Alumni"
            subtitle="Cerita mereka yang telah mengikuti program pembelajaran di Workspace"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <TestimonialCard
                  name={item.name}
                  role={item.role}
                  quote={item.quote}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <div className="bg-gradient-to-br from-primary-dark to-primary p-10 md:p-14 rounded-3xl text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ingin Menjadi Mentor atau Mengadakan Kelas Mandiri?
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Kami menyambut kolaborasi bersama para instruktur, praktisi industri, dan kreator konten yang ingin berbagi wawasan melalui ekosistem Workspace.
            </p>
            <Button href="/kolaborasi" variant="primary" className="bg-white text-primary hover:bg-accent hover:text-primary-dark">
              Hubungi Tim Kemitraan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
