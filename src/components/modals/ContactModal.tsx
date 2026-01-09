import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ContactModalProps } from '@/types';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      company: 'Summit Builders',
      logo: 'SB',
      name: 'Marcus Thorne',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
      quote:
        "Before Nexus, we were drowning in admin work. Now, our entire intake process is automated. We've doubled our capacity without hiring more office staff.",
    },
    {
      company: 'Apex Roofing',
      logo: 'AR',
      name: 'Sarah Jenkins',
      role: 'Operations Director',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
      quote:
        "The speed-to-lead system is a game changer. We're contacting leads within seconds, and our conversion rate has gone through the roof.",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 text-white/50 hover:text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Proof */}
        <div className="hidden md:flex flex-col justify-center relative w-full md:w-5/12 bg-neutral-900/50 p-8 border-r border-white/10 min-h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
            <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold font-mono tracking-tighter text-white">
                {testimonials[activeTestimonial]?.company}
              </div>
            </div>

            <div className="flex flex-col items-center mb-6">
              <img
                src={testimonials[activeTestimonial]?.image}
                alt={testimonials[activeTestimonial]?.name}
                className="w-20 h-20 rounded-full border-2 border-brand-500/50 mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-white">
                {testimonials[activeTestimonial]?.name}
              </h4>
              <p className="text-brand-400 text-sm">{testimonials[activeTestimonial]?.role}</p>
            </div>

            <blockquote className="text-gray-300 leading-relaxed italic mb-8">
              &quot;{testimonials[activeTestimonial]?.quote}&quot;
            </blockquote>

            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-7/12 p-6 md:p-10 bg-black">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Fill out this form to get in touch:</h3>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 ml-1">First Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 ml-1">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 ml-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 ml-1">Business Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                placeholder="Acme Construction Inc."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 ml-1">Company Website URL</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-sm">https://</span>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-16 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="www.example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 ml-1">Message</label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors h-24 resize-none"
                placeholder="Tell us about your current bottlenecks..."
              />
            </div>

            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-500/20">
              Get in Touch
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
