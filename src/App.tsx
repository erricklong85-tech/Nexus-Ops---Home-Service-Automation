import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import ContactModal from '@components/modals/ContactModal';
import HomePage from '@pages/HomePage';
import PaidAdsPage from '@pages/PaidAdsPage';
import SeoPage from '@pages/SeoPage';
import WebsiteDesignPage from '@pages/WebsiteDesignPage';
import type { PageType } from '@/types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  const handleNavigate = (page: string) => setCurrentPage(page as PageType);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar onOpenContact={openContact} onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <HomePage onOpenContact={openContact} />}
        {currentPage === 'website-design' && <WebsiteDesignPage onOpenContact={openContact} />}
        {currentPage === 'paid-ads' && <PaidAdsPage onOpenContact={openContact} />}
        {currentPage === 'seo' && <SeoPage onOpenContact={openContact} />}
      </main>
      <Footer />

      <AnimatePresence>
        {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={closeContact} />}
      </AnimatePresence>
    </div>
  );
}
