import Image from "next/image";

interface CardProps {
  image?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export default function Card({ image, title, description, action, className = "", icon }: CardProps) {
  return (
    <div className={`bg-surface rounded-2xl overflow-hidden border border-gray-100 card-hover ${className}`}>
      {image && (
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
        {action}
      </div>
    </div>
  );
}
