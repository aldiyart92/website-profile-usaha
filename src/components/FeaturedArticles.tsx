"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/content";

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles = [] }: FeaturedArticlesProps) {
  // Use first 3 articles for headline slider
  const headlineArticles = articles.slice(0, 3);
  // Use remaining 4 articles for side list, or all articles if few
  const listArticles = articles.length > 3 ? articles.slice(2, 6) : articles;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide effect
  useEffect(() => {
    if (isPaused || headlineArticles.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % headlineArticles.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, headlineArticles.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + headlineArticles.length) % headlineArticles.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % headlineArticles.length);
  };

  const currentHeadline = headlineArticles[activeSlide];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* SISI KIRI: Headline Slider (7 Cols on desktop) */}
      <div
        className="lg:col-span-7 flex flex-col"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        data-aos="fade-right"
      >
        <div className="relative rounded-3xl overflow-hidden bg-primary-dark text-white flex-1 min-h-[460px] md:min-h-[520px] shadow-lg group">
          {/* Headline Image with fade transition */}
          {headlineArticles.map((article, idx) => (
            <div
              key={article.slug}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={idx === 0}
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-black/30" />
            </div>
          ))}

          {/* Headline Content */}
          <div className="absolute inset-0 z-20 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            {/* Top Tag & Slide Indicators */}
            <div className="flex items-center justify-between">
              <span className="bg-primary-light text-primary-dark text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                🔥 Headline Berita {activeSlide + 1}/{headlineArticles.length}
              </span>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Slide sebelumnya"
                  className="w-9 h-9 rounded-full bg-black/40 hover:bg-primary backdrop-blur text-white flex items-center justify-center transition-all border border-white/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Slide berikutnya"
                  className="w-9 h-9 rounded-full bg-black/40 hover:bg-primary backdrop-blur text-white flex items-center justify-center transition-all border border-white/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-text-on-dark/80">
                <span>Oleh {currentHeadline?.author}</span>
                <span>•</span>
                <time dateTime={currentHeadline?.date}>
                  {currentHeadline &&
                    new Intl.DateTimeFormat("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(currentHeadline.date))}
                </time>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white hover:text-accent transition-colors line-clamp-2">
                <Link href={`/artikel/${currentHeadline?.slug}`}>
                  {currentHeadline?.title}
                </Link>
              </h3>

              <p className="text-text-on-dark/80 text-sm md:text-base line-clamp-2 max-w-2xl leading-relaxed">
                {currentHeadline?.summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href={`/artikel/${currentHeadline?.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Dot indicators */}
                <div className="flex items-center gap-1.5">
                  {headlineArticles.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlide === idx ? "w-6 bg-accent" : "w-2 bg-white/40 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SISI KANAN: Daftar Artikel Lainnya (5 Cols on desktop) */}
      <div
        className="lg:col-span-5 flex flex-col justify-between space-y-4"
        data-aos="fade-left"
      >
        {listArticles.map((article, idx) => (
          <Link
            key={article.slug}
            href={`/artikel/${article.slug}`}
            className="group bg-surface rounded-2xl p-4 border border-gray-100 card-hover flex gap-4 items-center transition-all duration-300 flex-1 hover:border-primary/20"
          >
            {/* Small Thumbnail */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-gray-100">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-1.5 left-1.5 bg-primary-dark/80 backdrop-blur text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
                #{idx + 1}
              </span>
            </div>

            {/* Article Text Content */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div className="flex items-center gap-2 text-[11px] text-text-secondary mb-1">
                <span className="font-medium text-primary">Artikel Populer</span>
                <span>•</span>
                <time dateTime={article.date}>
                  {new Intl.DateTimeFormat("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(article.date))}
                </time>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
                {article.title}
              </h4>

              <p className="text-text-secondary text-xs line-clamp-2 leading-relaxed">
                {article.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
