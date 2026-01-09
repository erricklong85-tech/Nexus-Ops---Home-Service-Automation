import { MessageSquare } from 'lucide-react';
import type { TestimonialCardProps } from '@/types';

export default function TestimonialCard({ quote, author, role, metric }: TestimonialCardProps) {
  return (
    <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl relative">
      <div className="absolute -top-4 -right-4 bg-brand-900 border border-brand-500/30 text-brand-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {metric}
      </div>
      <div className="mb-6 text-brand-500">
        <MessageSquare className="w-8 h-8 fill-current opacity-20" />
      </div>
      <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">&quot;{quote}&quot;</p>
      <div>
        <div className="text-white font-bold">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}
