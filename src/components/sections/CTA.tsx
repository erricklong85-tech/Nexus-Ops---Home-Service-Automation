import PrimaryButton from '@components/common/PrimaryButton';
import type { PageProps } from '@/types';

export default function CTA({ onOpenContact }: PageProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-900/10" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-500/20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          Ready to escape <br /> the manual grind?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Stop being the bottleneck. Let&apos;s build the operating system that runs your business
          for you.
        </p>
        <div className="flex justify-center">
          <PrimaryButton text="Book Your Strategy Call" onClick={onOpenContact} />
        </div>
        <p className="mt-6 text-sm text-gray-500">
          No aggressive sales tactics. Just a clear roadmap for your systems.
        </p>
      </div>
    </section>
  );
}
