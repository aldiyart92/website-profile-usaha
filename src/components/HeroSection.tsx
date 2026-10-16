interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <section className="page-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-text-on-dark/80 max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
