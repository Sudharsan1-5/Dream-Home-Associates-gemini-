
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import LoanTypes from './components/LoanTypes';
import WhyChooseUs from './components/WhyChooseUs';
import EMICalculator from './components/EMICalculator';
import CIBILForm from './components/CIBILForm';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const cibilFormRef = useRef<HTMLDivElement>(null);

  const scrollToCibilForm = () => {
    cibilFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero onGetStartedClick={scrollToCibilForm} />
        <TrustBar />
        <ProblemSection />
        <LoanTypes onCheckEligibilityClick={scrollToCibilForm} />
        <WhyChooseUs />
        <EMICalculator onGetOptionsClick={scrollToCibilForm} />
        <div ref={cibilFormRef} className="scroll-mt-20">
            <CIBILForm />
        </div>
        <HowItWorks />
        <About />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
