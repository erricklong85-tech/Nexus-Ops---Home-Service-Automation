import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ParticleField from '@components/common/ParticleField';
import PrimaryButton from '@components/common/PrimaryButton';
import type { PageProps } from '@/types';

export default function Hero({ onOpenContact }: PageProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="problem"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Particles */}
      <ParticleField />

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-400 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Systemize your business. Stabilize your growth.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-6 leading-[1.1]"
        >
          Stop Losing Leads <br /> to <span className="text-white">Manual Chaos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          We&apos;re not a marketing agency. We build the{' '}
          <span className="text-white font-medium">Operating System</span> your home service
          business needs to capture every lead, automate follow-ups, and scale without you working
          80 hours a week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <PrimaryButton text="Get Started Now" onClick={onOpenContact} />
        </motion.div>
      </motion.div>

      {/* Code Snippet/Visual Proof styling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 relative w-full max-w-5xl px-4"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/30 to-purple-500/30 rounded-xl blur opacity-20" />
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            <div className="ml-4 text-xs text-gray-500 font-mono">system_monitor.tsx</div>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-8 text-sm font-mono text-gray-400">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-white">
                <span>New Lead Detected</span>
                <span className="text-brand-400">Just now</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 w-full animate-shimmer" />
              </div>
              <div className="text-xs text-gray-500">
                {'>'}  Lead Source: Google LSA
                <br />
                {'>'} Parsing contact info...
                <br />
                {'>'} Adding to CRM...
                <br />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-white">
                <span>Speed-to-Lead</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span className="text-xs">SMS Intro Sent (Instant)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span className="text-xs">Missed Call Text Back</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span className="text-xs">Staff Notified</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-white">
                <span>Revenue Impact</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">35%</span>
                <span className="text-xs mb-1 text-green-400">+ Conversion Rate</span>
              </div>
              <div className="text-xs text-gray-500">
                Historical data based on 100+ contractor implementations.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
