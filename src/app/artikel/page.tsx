import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { ArtikelSilhouette } from "@/components/Silhouettes";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";
import { getBlogArticles } from "@/services/articleService";

export const metadata: Metadata = {
  title: "Artikel & Wawasan",
  description: "Kumpulan artikel, tips produktivitas, kabar terkini, dan panduan gaya hidup bekerja modern di Workspace.",
};

export default async function ArtikelPage() {
  const articles = await getBlogArticles();

  return (
    <>
      <HeroSection
        badge={{ icon: "📰", text: "Wawasan, Berita & Tips Praktis" }}
        title="Artikel & Kabar Terbaru"
        subtitle="Inspirasi, kiat praktis produktivitas, serta ulasan seputar tren teknologi dan industri kreatif."
        silhouette={<ArtikelSilhouette />}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#daftar-artikel" variant="amber">
            Baca Artikel Terbaru
          </Button>
        </div>
      </HeroSection>

      <section id="daftar-artikel" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Wawasan Terpilih"
            subtitle="Baca insight terbaru dari tim dan kontributor komunitas Workspace"
          />

          {articles.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-surface p-12 text-center text-text-secondary">
              Belum ada artikel yang dipublikasikan.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <div key={article.slug} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
