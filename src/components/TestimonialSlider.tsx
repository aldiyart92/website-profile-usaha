"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Get items to display based on circular index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % total;
      items.push({ item: testimonials[idx], originalIndex: idx });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards Display Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
        {visibleItems.map(({ item, originalIndex }, pos) => (
          <div
            key={`${originalIndex}-${pos}`}
            data-aos="fade-up"
            data-aos-delay={pos * 100}
            className={`bg-surface rounded-3xl p-8 border border-gray-100 card-hover flex flex-col justify-between h-full relative transition-all duration-300 ${
              originalIndex < 3 ? "border-primary/20 shadow-sm" : ""
            }`}
          >
            {/* Highlight tag for the initial 3 highlight testimonials */}
            {originalIndex < 3 && (
              <div className="absolute top-4 right-4">
                <span className="bg-primary/10 text-primary text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full">
                  Highlight
                </span>
              </div>
            )}

            <div>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-primary-light mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-text-secondary leading-relaxed mb-6 italic text-sm md:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-text-primary text-sm">{item.name}</p>
                <p className="text-text-secondary text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls & Pagination Indicators */}
      <div className="flex items-center justify-between mt-10">
        {/* Indicators Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Lihat testimoni ke-${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-gray-200 hover:bg-primary-light"
              }`}
            />
          ))}
        </div>

        {/* Counter and Prev / Next Buttons */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-secondary font-medium mr-2">
            {currentIndex + 1} / {total}
          </span>
          <button
            onClick={handlePrev}
            aria-label="Testimoni sebelumnya"
            className="w-10 h-10 rounded-xl border border-gray-200 bg-surface hover:bg-primary hover:text-white hover:border-primary text-text-primary flex items-center justify-center transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Testimoni berikutnya"
            className="w-10 h-10 rounded-xl border border-gray-200 bg-surface hover:bg-primary hover:text-white hover:border-primary text-text-primary flex items-center justify-center transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
