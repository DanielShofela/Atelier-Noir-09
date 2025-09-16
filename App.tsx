
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ManifestoSection from './components/ManifestoSection';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white antialiased">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <ManifestoSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
