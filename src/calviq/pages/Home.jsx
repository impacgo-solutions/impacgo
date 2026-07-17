import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsGrid from '../components/StatsGrid';
import ProblemSection from '../components/ProblemSection';
import FeaturesEcosystem from '../components/FeaturesEcosystem';
import FeaturedModule from '../components/FeaturedModule';
import AISpotlight from '../components/AISpotlight';
import ComparisonTable from '../components/ComparisonTable';
import Pricing from '../components/Pricing';
import SocialProof from '../components/SocialProof';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import useRevealAnimation from '../hooks/useRevealAnimation';

export default function Home() {
  const location = useLocation();
  useRevealAnimation([]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <StatsGrid />
      <ProblemSection />
      <FeaturesEcosystem />
      <FeaturedModule />
      <AISpotlight />
      <ComparisonTable />
      <Pricing />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </>
  );
}
