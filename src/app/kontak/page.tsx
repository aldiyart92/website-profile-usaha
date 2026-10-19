import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { KontakSilhouette } from "@/components/Silhouettes";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description: "Hubungi tim Workspace untuk reservasi ruang, info paket coworking, kerja sama kemitraan, atau kunjungan langsung.",
};

const contactInfo = [
  {
    title: "Alamat Kami",
    value: "Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Telepon & WhatsApp",
    value: "+62 812-3456-7890 / (021) 555-0199",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email Resmi",
    value: "halo@workspace.id / kemitraan@workspace.id",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Jam Operasional",
    value: "Senin – Minggu: 08.00 – 22.00 WIB (Cafe & Coworking)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function KontakPage() {
  return (
    <>
      <HeroSection
        badge={{ icon: "📍", text: "Terhubung Bersama Tim Workspace" }}
        title="Hubungi Kami"
        subtitle="Ada pertanyaan seputar paket membership, pemesanan ruang rapat, atau sekadar ingin menyapa? Kami siap menyambut Anda."
        silhouette={<KontakSilhouette />}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#form-pesan" variant="amber">
            Kirim Pesan Langsung
          </Button>
          <Button
            href="https://wa.me/6281234567890"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Chat WhatsApp
          </Button>
        </div>
      </HeroSection>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Informasi Kontak & Lokasi"
            subtitle="Temukan saluran komunikasi dan kunjungi kantor kami langsung"
          />

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-surface rounded-2xl p-6 border border-gray-100 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-text-primary text-base mb-2">{info.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Section */}
            <div id="form-pesan" data-aos="fade-right" className="bg-surface rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Kirimkan Pesan</h3>
              <p className="text-text-secondary text-sm mb-8">
                Isi formulir di bawah ini dan kami akan membalas ke email Anda sesegera mungkin.
              </p>
              <ContactForm />
            </div>

            {/* Map and Socials */}
            <div data-aos="fade-left" className="space-y-8">
              <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
                <h3 className="text-2xl font-bold text-text-primary mb-4">Peta Lokasi</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Lokasi strategis di pusat kota dengan akses transportasi publik mudah, area parkir luas, dan lingkungan hijau asri.
                </p>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    title="Lokasi Workspace"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.291775877864!2d106.80806497573138!3d-6.22521199376288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15050f75727%3A0xc3ce3111fb437770!2sSenopati%2C%20Kebayoran%20Baru%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Social Channels */}
              <div className="bg-primary-dark text-white rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-1">Ikuti Media Sosial Kami</h4>
                  <p className="text-text-on-dark/70 text-sm">Update event, promo menu cafe, & daily vibes.</p>
                </div>
                <div className="flex gap-3">
                  {["Instagram", "Twitter", "LinkedIn"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
