import React from "react";

interface HeroSectionProps {
  badge?: {
    icon: string;
    text: string;
  };
  title: string;
  subtitle?: string;
  silhouette?: React.ReactNode;
  children?: React.ReactNode;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  silhouette,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-dark via-[#214F3B] to-primary overflow-hidden text-white border-b border-primary-light/10">
      {/* Subtle dot matrix pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-dots)" />
        </svg>
      </div>

      {/* Ambient soft glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-primary-light/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 ${silhouette ? "lg:grid-cols-12 gap-10" : "max-w-3xl"} items-center`}>
          {/* Text Content */}
          <div className={silhouette ? "lg:col-span-7" : ""} data-aos="fade-right">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-accent mb-6 shadow-sm">
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-text-on-dark/85 max-w-xl leading-relaxed mb-8">
                {subtitle}
              </p>
            )}
            {children}
          </div>

          {/* Silhouette Artwork */}
          {silhouette && (
            <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm flex items-end justify-center shadow-2xl overflow-hidden group">
                {silhouette}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
