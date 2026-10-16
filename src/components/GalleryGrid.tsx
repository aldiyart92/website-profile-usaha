"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface GalleryGridProps {
  images: { src: string; alt: string }[];
  columns?: string;
}

export default function GalleryGrid({
  images,
  columns = "grid-cols-2 md:grid-cols-3",
}: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((prev) => (prev! - 1 + images.length) % images.length);
  }, [lightbox, images.length]);

  const handleNext = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((prev) => (prev! + 1) % images.length);
  }, [lightbox, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, handlePrev, handleNext]);

  return (
    <>
      {/* Grid of Images */}
      <div className={`grid ${columns} gap-4 sm:gap-6`}>
        {images.map((img, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 60}
            onClick={() => setLightbox(i)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
            />
            {/* Subtle overlay on hover with minimal search/zoom icon */}
            <div className="absolute inset-0 bg-primary-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
            {/* Minimal photo tag at corner */}
            <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Modern & Minimalist Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}
        >
          {/* Top Bar: Counter & Minimalist Close Button */}
          <div className="absolute top-5 inset-x-5 flex items-center justify-between z-50 pointer-events-none">
            <span className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full pointer-events-auto">
              {lightbox + 1} / {images.length} • {images[lightbox].alt}
            </span>

            <button
              onClick={() => setLightbox(null)}
              aria-label="Tutup popup"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-4 sm:left-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Foto berikutnya"
            className="absolute right-4 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
