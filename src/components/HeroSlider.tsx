"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface HeroSlide {
  image: string;
  badgeIcon: string;
  badgeText: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const slides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
    badgeIcon: "☕",
    badgeText: "Cafe & Coworking Space",
    titlePrefix: "Tempat Kerja yang",
    titleHighlight: "Menginspirasi",
    subtitle:
      "Nikmati suasana cafe yang nyaman sambil bekerja di coworking space modern. Bergabung dengan komunitas kreatif dan produktif.",
    primaryCtaText: "Jelajahi Space",
    primaryCtaHref: "/cafe-coworking",
    secondaryCtaText: "Hubungi Kami",
    secondaryCtaHref: "/kontak",
  },
  {
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop",
    badgeIcon: "🌿",
    badgeText: "Kopi Spesialti & Suasana Asri",
    titlePrefix: "Racikan Kopi Terbaik untuk",
    titleHighlight: "Hari Produktifmu",
    subtitle:
      "Biji kopi lokal Nusantara pilihan berpadu dengan hidangan lezat, menemani setiap obrolan santai dan sesi diskusi bermakna.",
    primaryCtaText: "Menu Cafe",
    primaryCtaHref: "/cafe-coworking#cafe-menu",
    secondaryCtaText: "Kunjungi Kami",
    secondaryCtaHref: "/kontak",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
    badgeIcon: "💡",
    badgeText: "Kelas, Program & Kemitraan",
    titlePrefix: "Tumbuh Bersama",
    titleHighlight: "Komunitas Kreatif",
    subtitle:
      "Ikuti workshop keahlian praktis bersama mentor berpengalaman atau bangun kolaborasi strategis bersama talenta terbaik.",
    primaryCtaText: "Ikuti Kelas",
    primaryCtaHref: "/kelas-programme",
    secondaryCtaText: "Buka Kemitraan",
    secondaryCtaHref: "/kolaborasi",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth Fading Transition */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.titleHighlight}
            fill
            className="object-cover transform scale-105 transition-transform duration-[6000ms] ease-out"
            priority={index === 0}
          />
          {/* Subtle elegant gradient overlay for pristine text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary-dark/65 to-primary-dark/90" />
        </div>
      ))}

      {/* Slide Captions Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-16">
        <div className="relative min-h-[380px] sm:min-h-[340px] md:min-h-[320px] flex items-center justify-center">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.titleHighlight}
                className={`transition-all duration-700 ease-in-out max-w-3xl mx-auto flex flex-col items-center justify-center ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-6 scale-95 pointer-events-none absolute inset-0"
                }`}
              >
                {/* Badge Pill */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium border border-white/20 shadow-md">
                    <span>{slide.badgeIcon}</span>
                    <span>{slide.badgeText}</span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                  {slide.titlePrefix}
                  <br />
                  <span className="text-accent">{slide.titleHighlight}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href={slide.primaryCtaHref} variant="primary" size="lg">
                    {slide.primaryCtaText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button
                    href={slide.secondaryCtaHref}
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    {slide.secondaryCtaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next Controls */}
      <button
        onClick={prevSlide}
        aria-label="Slide sebelumnya"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-primary backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg group"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Slide berikutnya"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-primary backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg group"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Indicators & Scroll Hint */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 flex flex-col items-center gap-4">
        {/* Dot Indicators */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Pindah ke slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-8 bg-accent shadow-md shadow-accent/50"
                  : "w-2.5 bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator bounce */}
        <div className="animate-bounce mt-1">
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
