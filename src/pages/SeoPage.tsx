import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb, Wallet } from 'lucide-react';
import type { PageProps } from '@/types';

export default function SeoPage({ onOpenContact }: PageProps) {
  return (
    <div className="bg-black min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Team meeting"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 flex flex-col justify-center h-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-4"
            >
              Home Services SEO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-12"
            >
              Be More Selective & Profitable <br /> By Getting More Leads From Google
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 mb-12"
            >
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-brand-500/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-brand-400" />
                </div>
                <span className="text-lg md:text-xl font-medium pt-1">
                  Get more website traffic & better leads
                </span>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-brand-500/20 transition-colors">
                  <Lightbulb className="w-6 h-6 text-brand-400" />
                </div>
                <span className="text-lg md:text-xl font-medium pt-1">
                  Get educated on SEO along the way
                </span>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-brand-500/20 transition-colors">
                  <Wallet className="w-6 h-6 text-brand-400" />
                </div>
                <span className="text-lg md:text-xl font-medium pt-1">
                  Save yourself time, money and headaches
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
