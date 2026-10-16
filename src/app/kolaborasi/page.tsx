import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kolaborasi & Kemitraan",
  description: "Buka peluang sinergi, co-branding event, community gathering, dan program inovasi bersama Workspace.",
};

const collaborationTypes = [
  {
    title: "Event & Workshop Hosting",
    category: "Venue & Co-organizer",
    desc: "Gunakan fasilitas serbaguna kami untuk workshop, meet-up, demo produk, atau seminar dengan dukungan audiovisual modern.",
    benefits: [
      "Kapasitas ruangan 20 - 80 peserta",
      "Perlengkapan sound system & display HD",
      "Paket bundling catering & cafe",
      "Bantuan publikasi ke jejaring komunitas",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Brand Partnership",
    category: "Co-Branding & Activation",
    desc: "Kolaborasi aktivasi merek produk bersama target audiens kami: profesional muda, founder startup, kreator, dan tech enthusiasts.",
    benefits: [
      "Product display & sampling booth",
      "Eksklusif co-branded merchandise",
      "Kampanye digital di kanal media sosial",
      "Keterlibatan di event flagship tahunan",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Community Program",
    category: "Ecosystem Builder",
    desc: "Program dukungan inkubasi untuk komunitas non-profit, open-source, dan penggerak sosial yang membutuhkan basecamp berkegiatan.",
    benefits: [
      "Subsidi biaya ruangan dan konsumsi",
      "Akses mentorship dari advisor Workspace",
      "Slot sharing berkala di program komunitas",
      "Jejaring lintas komunitas di kota Anda",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Corporate & Team Retreat",
    category: "B2B Solutions",
    desc: "Paket khusus perusahaan untuk remote team sprint, hackathon, atau strategy meeting off-site dalam suasana santai produktif.",
    benefits: [
      "Area private khusus selama durasi program",
      "High-speed dedicated fiber internet",
      "Full board F&B dan coffee break",
      "Fasilitasi ice breaking & team bonding",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function KolaborasiPage() {
  return (
    <>
      <HeroSection
        title="Peluang Kolaborasi"
        subtitle="Mari bertumbuh bersama. Kami percaya dampak terbesar tercipta dari kolaborasi yang erat dan bermakna."
      />

      {/* Collaboration Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bentuk Kemitraan yang Kami Tawarkan"
            subtitle="Kami fleksibel menyesuaikan format kolaborasi sesuai visi dan kebutuhan organisasi Anda"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {collaborationTypes.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-surface rounded-3xl p-8 border border-gray-100 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{item.desc}</p>
                  
                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">
                      Keuntungan Kolaborasi:
                    </h4>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-sm text-text-secondary">
                          <svg className="w-4 h-4 text-primary-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button href="#form-kolaborasi" variant="outline" className="w-full text-center">
                  Ajukan Bentuk Ini
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Proposal Form */}
      <section id="form-kolaborasi" className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Formulir Pengajuan Kolaborasi"
            subtitle="Ceritakan ide kolaborasi Anda, dan tim kemitraan kami akan menghubungi dalam kurun 1x24 jam kerja"
          />

          <div data-aos="fade-up" className="bg-background rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Nama Penanggung Jawab
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Pratama"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Nama Organisasi / Komunitas / Brand
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Studio Kreatif Nusantara"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Kontak
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kontak@brand.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 812 xxxx xxxx"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Format Kemitraan yang Diinginkan
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm text-text-primary">
                  <option>Event & Workshop Hosting</option>
                  <option>Brand Partnership & Aktivasi</option>
                  <option>Dukungan Program Komunitas</option>
                  <option>Corporate & Team Retreat</option>
                  <option>Lainnya (Eksplorasi Bersama)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Deskripsi Rencana & Target Kolaborasi
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Jelaskan ringkasan program, perkiraan tanggal pelaksanaan, dan ekspektasi kolaborasi..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="button" variant="primary" size="lg" className="w-full sm:w-auto">
                  Kirim Proposal Kemitraan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
