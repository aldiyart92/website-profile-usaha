import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/content";

export const metadata: Metadata = {
  title: "Artikel & Wawasan",
  description: "Kumpulan artikel, tips produktivitas, kabar terkini, dan panduan gaya hidup bekerja modern di Workspace.",
};

export default function ArtikelPage() {
  return (
    <>
      <HeroSection
        title="Artikel & Kabar Terbaru"
        subtitle="Inspirasi, kiat praktis produktivitas, serta ulasan seputar tren teknologi dan industri kreatif."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Wawasan Terpilih"
            subtitle="Baca insight terbaru dari tim dan kontributor komunitas Workspace"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div key={article.slug} data-aos="fade-up" data-aos-delay={idx * 100}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
