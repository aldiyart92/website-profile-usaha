import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-8 border border-gray-100 card-hover flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-1 text-primary-light mb-4">
          {[...Array(5)].map((_, j) => (
            <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-text-secondary leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-text-primary text-sm">{name}</p>
          <p className="text-text-secondary text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
