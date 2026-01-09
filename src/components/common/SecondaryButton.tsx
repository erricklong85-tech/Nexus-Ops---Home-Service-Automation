import type { ButtonProps } from '@/types';

export default function SecondaryButton({ text, icon, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group px-8 py-4 bg-black border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
    >
      {text}
      {icon}
    </button>
  );
}
