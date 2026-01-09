import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Layout,
  MousePointerClick,
  Search,
  MapPin,
  Store,
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import type { NavbarProps } from '@/types';

export default function Navbar({ onOpenContact, onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleServiceClick = (service: string) => {
    onNavigate(service);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-white to-gray-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">N</span>
          </div>
          <span className="font-semibold tracking-tight text-white">Nexus Ops</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button
            onClick={() => handleNavClick('problem')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            The Problem
          </button>

          <div className="h-16 flex items-center" onMouseEnter={() => setServicesOpen(true)}>
            <button
              className={`flex items-center gap-1 hover:text-white transition-colors focus:outline-none ${
                servicesOpen ? 'text-white' : ''
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services{' '}
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => handleNavClick('results')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            Results
          </button>

          <button
            onClick={onOpenContact}
            className="group relative bg-white text-black px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 flex items-center gap-2 text-xs overflow-hidden cursor-pointer focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              Schedule Intro Call{' '}
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden md:block absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-2xl z-40 overflow-hidden"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="flex gap-12">
                {/* Main Services Grid */}
                <div className="flex-grow grid grid-cols-3 gap-8">
                  <ServiceCard
                    title="Website Design"
                    desc="Build a custom website that helps your brand stand out."
                    image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    onClick={() => handleServiceClick('website-design')}
                  />
                  <ServiceCard
                    title="Paid Ads Management"
                    desc="Target the right audience & maximize every dollar spent."
                    image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                    onClick={() => handleServiceClick('paid-ads')}
                  />
                  <ServiceCard
                    title="Search Engine Optimization"
                    desc="Invest in your online presence & gain traction with Google."
                    image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                    onClick={() => handleServiceClick('seo')}
                  />
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-200 my-2" />

                {/* Additional Links Sidebar */}
                <div className="w-64 flex flex-col gap-6 pt-2">
                  <button
                    onClick={() => handleServiceClick('seo')}
                    className="group text-left focus:outline-none"
                  >
                    <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2 group-hover:text-brand-600 transition-colors">
                      <MapPin className="w-4 h-4 text-brand-500" />
                      Google Maps SEO
                    </h4>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                      Get higher in Google&apos;s Map Pack with this cutting-edge service.
                    </p>
                  </button>

                  <button
                    onClick={() => handleServiceClick('paid-ads')}
                    className="group text-left focus:outline-none"
                  >
                    <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2 group-hover:text-brand-600 transition-colors">
                      <Store className="w-4 h-4 text-green-600" />
                      Google Local Service Ads
                    </h4>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                      We&apos;ll help you set up and manage your Google LSA&apos;s / Guaranteed Ads.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl z-50">
          <button
            onClick={() => handleNavClick('problem')}
            className="text-left text-gray-400 hover:text-white"
          >
            The Problem
          </button>

          <div className="py-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-gray-400 hover:text-white"
            >
              Services{' '}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-4 flex flex-col gap-6 border-l border-white/10 ml-1 py-2">
                <button
                  onClick={() => handleServiceClick('website-design')}
                  className="flex items-center gap-3 text-left"
                >
                  <Layout className="w-4 h-4 text-brand-400" />
                  <div>
                    <div className="text-sm text-white font-medium">Website Design</div>
                    <div className="text-xs text-gray-500">Custom build</div>
                  </div>
                </button>
                <button
                  onClick={() => handleServiceClick('paid-ads')}
                  className="flex items-center gap-3 text-left"
                >
                  <MousePointerClick className="w-4 h-4 text-green-400" />
                  <div>
                    <div className="text-sm text-white font-medium">Paid Ads</div>
                    <div className="text-xs text-gray-500">PPC Management</div>
                  </div>
                </button>
                <button
                  onClick={() => handleServiceClick('seo')}
                  className="flex items-center gap-3 text-left"
                >
                  <Search className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="text-sm text-white font-medium">SEO</div>
                    <div className="text-xs text-gray-500">Search Rankings</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('results')}
            className="text-left text-gray-400 hover:text-white"
          >
            Results
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="text-left text-brand-400 font-semibold"
          >
            Schedule Call
          </button>
        </div>
      )}
    </nav>
  );
}
