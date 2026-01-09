import type { ServiceCardProps } from '@/types';

export default function ServiceCard({ title, desc, image, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start text-left w-full space-y-3 focus:outline-none"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-gray-200 group-hover:border-brand-500 transition-colors shadow-sm">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <h3 className="text-gray-900 font-bold text-base mb-1 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed max-w-xs">{desc}</p>
      </div>
    </button>
  );
}
