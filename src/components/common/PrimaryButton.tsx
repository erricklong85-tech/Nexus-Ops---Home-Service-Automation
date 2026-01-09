import { ArrowRight } from 'lucide-react';
import type { ButtonProps } from '@/types';

export default function PrimaryButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}
