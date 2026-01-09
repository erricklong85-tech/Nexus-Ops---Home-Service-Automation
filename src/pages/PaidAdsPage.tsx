import { motion } from 'framer-motion';
import { Wallet, Target, Lightbulb } from 'lucide-react';
import type { PageProps } from '@/types';

export default function PaidAdsPage({ onOpenContact }: PageProps) {
  return (
    <div className="bg-black min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
            alt="Office working environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 flex flex-col justify-center h-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-4"
            >
              Proven Home Services PPC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-12"
            >
              Consistently Maximizing Your Ad Spend For Quality Leads
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-200">
                  Stop wasting money with PPC companies that don&apos;t understand the home-services
                  industry
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-200">
                  We Build Highly Targeted, Data-Driven Campaigns
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-200">
                  Get Conversion-focused ads paired with live, easy-to-understand Reporting
                </span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={onOpenContact}
              className="border border-white/30 px-10 py-4 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
      </section>

      {/* Logos */}
      <div className="bg-neutral-900 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center lg:justify-between items-center gap-12 opacity-50">
          <h3 className="text-3xl font-black italic font-serif text-gray-500">GenzRyan</h3>
          <h3 className="text-2xl font-bold tracking-tighter text-gray-400">
            BADGERLAND
            <br />
            <span className="text-xs font-normal tracking-widest">EXTERIORS</span>
          </h3>
          <h3 className="text-2xl font-extrabold flex items-center gap-2 text-gray-500">
            <div className="w-8 h-8 border-4 border-gray-600" /> SMOCK <br />
            <span className="text-[10px] font-normal block -mt-1">HEATING & AIR</span>
          </h3>
          <h3 className="text-2xl font-black uppercase italic text-gray-400">
            Roofing
            <br />
            <span className="not-italic font-normal text-sm">PROS USA</span>
          </h3>
          <h3 className="text-2xl font-serif font-bold text-gray-500">
            BEARS
            <br />
            <span className="text-lg">PLUMBING</span>
          </h3>
          <h3 className="text-2xl font-black tracking-widest italic text-gray-600">PANTHER</h3>
        </div>
      </div>
    </div>
  );
}
