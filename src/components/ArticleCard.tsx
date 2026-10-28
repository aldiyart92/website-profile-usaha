import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/content";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-surface rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col h-full group">
      <div className="relative h-48 sm:h-52 overflow-hidden">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center text-white/70">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
        {article.date && (
          <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-medium">
            {new Intl.DateTimeFormat("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(article.date))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          {article.category && <span className="font-medium text-primary">{article.category}</span>}
          {article.category && article.author && <span>•</span>}
          {article.author && <span>Oleh {article.author}</span>}
        </div>
        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-3 line-clamp-2">
          <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {article.summary}
        </p>
        <Link
          href={`/artikel/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group-hover:translate-x-1 duration-200 mt-auto"
        >
          Baca Selengkapnya
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
