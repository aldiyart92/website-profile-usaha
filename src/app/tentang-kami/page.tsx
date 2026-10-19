import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { TentangKamiSilhouette } from "@/components/Silhouettes";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { teamMembers } from "@/data/content";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal lebih dekat visi, misi, cerita perjalanan, dan tim di balik Workspace.",
};

const coreValues = [
  {
    title: "Inklusif & Kolaboratif",
    desc: "Kami percaya lingkungan inklusif membebaskan setiap individu untuk bertukar pandangan tanpa sekat hierarki.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Kualitas & Perhatian Detail",
    desc: "Mulai dari racikan biji kopi hingga kenyamanan kursi ergonomis, setiap elemen dipersiapkan dengan penuh dedikasi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Semangat Bertumbuh",
    desc: "Kami tidak hanya menyediakan tempat kerja, melainkan ruang belajar berkelanjutan lewat kelas dan workshop praktis.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Keberlanjutan Alam",
    desc: "Mengusung biophilic design dan meminimalisir sampah plastik sekali pakai demi gaya hidup ramah lingkungan.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <HeroSection
        badge={{ icon: "🌱", text: "Visi, Misi & Dedikasi Kami" }}
        title="Tentang Kami"
        subtitle="Membangun ekosistem terpadu di mana ide segar, secangkir kopi beraroma, dan jejaring kolaboratif bertemu."
        silhouette={<TentangKamiSilhouette />}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/kontak" variant="amber">
            Kunjungi Workspace
          </Button>
          <Button
            href="#cerita-kami"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Baca Kisah Kami
          </Button>
        </div>
      </HeroSection>

      {/* Story Section */}
      <section id="cerita-kami" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Perjalanan Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
                Berawal dari Kebutuhan Ruang yang Membebaskan Pikiran
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Didirikan pada tahun 2024, Workspace lahir ketika para founder kami — sekelompok freelancer, desainer, dan pengembang teknologi — kesulitan menemukan tempat bekerja yang seimbang antara ketenangan kerja dan keramahan interaksi sosial.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Kafe konvensional seringkali terlalu bising dan minim colokan listrik, sementara kantor privat terasa kaku dan mahal bagi tim rintisan. Kami kemudian merancang solusi hibrida: ruang komunal berestetika alami dengan fasilitas kantor kelas profesional.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Kini, Workspace telah menjadi rumah bagi ratusan pekerja kreatif, pelaku startup, akademisi, dan komunitas lokal yang berkarya dan berjejaring setiap harinya.
              </p>
              <Button href="/kontak" variant="primary">
                Kunjungi Lokasi Kami
              </Button>
            </div>

            <div data-aos="fade-left" className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Tim Workspace berdiskusi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-dark text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-2xl font-extrabold text-accent mb-1">2+ Tahun</p>
                <p className="text-xs text-text-on-dark/80">Mendampingi talenta kreatif dan pegiat bisnis lokal bertumbuh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Visi & Misi"
            subtitle="Prinsip panduan yang mengarahkan setiap langkah pengembangan komunitas kami"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Visi */}
            <div data-aos="fade-up" className="bg-background rounded-3xl p-8 md:p-10 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Visi Kami</h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  Menjadi ekosistem kreatif dan ruang kolaborasi pilihan utama yang menghubungkan para inovator, pegiat bisnis mandiri, dan komunitas untuk menciptakan dampak positif bagi kemajuan ekonomi kreatif regional.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200/60 text-xs font-semibold uppercase tracking-wider text-primary">
                Aspirasi Jangka Panjang
              </div>
            </div>

            {/* Misi */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-background rounded-3xl p-8 md:p-10 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Misi Kami</h3>
                <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Menyediakan ruang kerja ergonomis berfasilitas mutakhir dengan kenyamanan atmosfer cafe.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Menyelenggarakan program edukasi dan workshop keahlian yang terjangkau dan aplikatif.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Memfasilitasi jejaring kemitraan strategis antar talenta lokal dan pelaku industri.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Menjaga komitmen keberlanjutan lingkungan dan pemberdayaan komunitas sekitar.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200/60 text-xs font-semibold uppercase tracking-wider text-primary">
                Aksi Nyata & Konsisten
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nilai yang Kami Pegang"
            subtitle="Fondasi budaya yang menjaga Workspace tetap hangat, bersahabat, dan profesional"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-surface p-6 rounded-2xl border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h4 className="font-bold text-lg text-text-primary mb-2">{val.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Tim di Balik Layar"
            subtitle="Orang-orang penuh antusias yang berdedikasi menciptakan pengalaman terbaik untuk Anda"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-background rounded-2xl overflow-hidden border border-gray-100 card-hover text-center p-6 flex flex-col items-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg text-text-primary mb-1">{member.name}</h4>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Berdedikasi untuk terus mengembangkan layanan dan atmosfer ruang yang inklusif.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
