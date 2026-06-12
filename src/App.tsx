import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { Banner } from './components/Banner';
import { GuaranteeSection } from './components/GuaranteeSection';
import { CreditorsSupportSection, Ticker } from './components/CreditorsSupportSection';
import { ContactFooter } from './components/ContactFooter';
import { initScrollAnimations, cleanupScrollAnimations } from './animations/scrollAnimations';

export default function App() {
  useEffect(() => {
    // Small delay so all DOM is fully painted before GSAP queries
    const id = setTimeout(() => {
      initScrollAnimations();
    }, 120);
    return () => {
      clearTimeout(id);
      cleanupScrollAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col font-sans text-white">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <Banner />
        <GuaranteeSection />
        <CreditorsSupportSection />
        <Ticker />
      </main>
      <ContactFooter />
    </div>
  );
}

