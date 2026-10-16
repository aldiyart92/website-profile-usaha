import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/content";
import Button from "@/components/Button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="pt-28 pb-20">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-6 font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Daftar Artikel
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-6">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-text-secondary mb-8 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
              {article.author.charAt(0)}
            </div>
            <span className="font-medium text-text-primary">{article.author}</span>
          </div>
          <span>•</span>
          <time dateTime={article.date}>
            {new Intl.DateTimeFormat("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(article.date))}
          </time>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
          {article.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3 key={idx} className="text-2xl font-bold text-text-primary mt-8 mb-4">
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }
            if (paragraph.startsWith("**")) {
              // Contains subtitle header
              const parts = paragraph.split("\n");
              return (
                <div key={idx} className="space-y-2">
                  {parts.map((line, lIdx) => {
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <h4 key={lIdx} className="text-xl font-bold text-text-primary mt-6 mb-2">
                          {line.replace(/\*\*/g, "")}
                        </h4>
                      );
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li key={lIdx} className="list-disc ml-5 text-text-secondary">
                          {line.replace(/^- /, "")}
                        </li>
                      );
                    }
                    return <p key={lIdx}>{line}</p>;
                  })}
                </div>
              );
            }
            return (
              <p key={idx} className="text-base md:text-lg">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Share & Feedback */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-text-secondary">
            Bagikan artikel ini kepada rekan kerja atau komunitas Anda
          </div>
          <div className="flex gap-2">
            <Button href="/artikel" variant="outline" size="sm">
              Semua Artikel
            </Button>
            <Button href="/kontak" variant="primary" size="sm">
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
  );
}
