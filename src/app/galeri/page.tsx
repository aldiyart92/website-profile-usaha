import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Galeri Foto & Suasana",
  description: "Dokumentasi visual ruang kerja, sudut cafe, kegiatan komunitas, dan fasilitas lengkap di Workspace.",
};

export default function GaleriPage() {
  return (
    <>
      <HeroSection
        title="Galeri Workspace"
        subtitle="Lihat sekilas kenyamanan ruang kerja, atmosfer cafe yang asri, serta keseruan berbagai kegiatan komunitas kami."
      />

      <section className="section-padding">
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
