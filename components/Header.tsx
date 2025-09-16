import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <h1 className="font-couture text-3xl tracking-widest font-bold uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
            Atelier Noir
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
