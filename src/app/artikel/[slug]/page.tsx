import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import { getArticleBySlug, getBlogArticles } from "@/services/articleService";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.summary,
  };
}

const formatDate = (date: string) =>
  date
    ? new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date))
    : "";

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = (await getBlogArticles())
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <HeroSection
        backLink={{
          href: "/artikel",
          label: "Kembali ke Daftar Artikel",
        }}
        badge={{
          icon: "📰",
          text: article.category || "Artikel & Wawasan",
        }}
        title={article.title}
        maxWidth="max-w-5xl mx-auto"
        titleClassName="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-on-dark/90 pt-4 border-t border-white/15">
          {article.author && (
            <>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/30 text-accent flex items-center justify-center font-bold text-sm">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-text-on-dark/60 block">Penulis</span>
                  <span className="font-semibold text-white">{article.author}</span>
                </div>
              </div>
              <span className="text-white/30 hidden sm:inline">•</span>
            </>
          )}
          <div className="flex items-center gap-2 text-text-on-dark/85">
            <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-text-on-dark/60 block">Diterbitkan</span>
              <time dateTime={article.date} className="font-medium">
                {formatDate(article.date)}
              </time>
            </div>
          </div>
        </div>
      </HeroSection>

      <article className="py-12 md:py-16">
        {/* Header Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-0">
          {/* Featured Image (only when the API provides one) */}
          {article.thumbnail && (
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-xl border border-gray-100" data-aos="fade-up">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content Body: HTML from the CMS API */}
          <div
            className="max-w-none text-text-secondary text-base md:text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-text-primary [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-5 [&_li]:mb-2 [&_strong]:text-text-primary [&_a]:text-primary [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share & Feedback */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-secondary">
              Bagikan artikel ini kepada rekan kerja atau komunitas Anda
            </div>
            <div className="flex gap-2">
              <Button href="/artikel" variant="outline" size="sm">
                Semua Artikel
              </Button>
              <Button href="/kontak" variant="amber" size="sm">
                Kunjungi Workspace
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Artikel Lainnya</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/artikel/${rel.slug}`}
                    className="p-6 bg-surface rounded-2xl border border-gray-100 card-hover flex flex-col justify-between"
                  >
                    <h4 className="font-bold text-text-primary mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-text-secondary text-xs line-clamp-2 mb-4">
                      {rel.summary}
                    </p>
                    <span className="text-xs font-semibold text-primary inline-flex items-center gap-1">
                      Baca artikel →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
