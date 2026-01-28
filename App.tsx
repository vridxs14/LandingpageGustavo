import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Deliverables from './components/Deliverables';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Bio from './components/Bio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <PainPoints />
      <Solution />
      <Deliverables />
      <SocialProof />
      <Pricing />
      <Bio />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;