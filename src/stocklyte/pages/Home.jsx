import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import ProblemSection from '../components/ProblemSection.jsx';
import SolutionBand from '../components/SolutionBand.jsx';
import InventoryEngine from '../components/InventoryEngine.jsx';
import FeatureDeepDive from '../components/FeatureDeepDive.jsx';
import PlatformStrip from '../components/PlatformStrip.jsx';
import ComparisonTable from '../components/ComparisonTable.jsx';
import SecurityGrid from '../components/SecurityGrid.jsx';
import UseCases from '../components/UseCases.jsx';
import FAQ from '../components/FAQ.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import Footer from '../components/Footer.jsx';
import useRevealAnimation from '../hooks/useRevealAnimation.js';

export default function Home() {
  useRevealAnimation([]);

  useEffect(() => {
    const glassCards = document.querySelectorAll('.glass, .glass-bright');
    const handler = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };
    glassCards.forEach((card) => card.addEventListener('mousemove', handler));
    return () => glassCards.forEach((card) => card.removeEventListener('mousemove', handler));
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionBand />
      <InventoryEngine />
      <FeatureDeepDive />
      <PlatformStrip />
      <ComparisonTable />
      <SecurityGrid />
      <UseCases />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
