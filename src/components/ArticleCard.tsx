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
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-medium">
          {new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(new Date(article.date))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          <span>Oleh {article.author}</span>
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
