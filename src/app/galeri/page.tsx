import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { GaleriSilhouette } from "@/components/Silhouettes";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Button from "@/components/Button";
import { galleryImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Galeri Foto & Suasana",
  description: "Dokumentasi visual ruang kerja, sudut cafe, kegiatan komunitas, dan fasilitas lengkap di Workspace.",
};

export default function GaleriPage() {
  return (
    <>
      <HeroSection
        badge={{ icon: "📸", text: "Dokumentasi & Sudut Visual" }}
        title="Galeri Workspace"
        subtitle="Lihat sekilas kenyamanan ruang kerja, atmosfer cafe yang asri, serta keseruan berbagai kegiatan komunitas kami."
        silhouette={<GaleriSilhouette />}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#galeri-grid" variant="amber">
            Eksplorasi Galeri
          </Button>
        </div>
      </HeroSection>

      <section id="galeri-grid" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Dokumentasi Visual"
            subtitle="Klik pada foto mana pun untuk memperbesar tampilan dalam mode layar penuh (lightbox)"
          />

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
