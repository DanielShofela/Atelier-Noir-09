
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}
    >
      <div className="text-center text-white bg-black/50 p-8">
        <div className="overflow-hidden">
           <h2 
              className={`font-couture text-5xl md:text-8xl font-bold uppercase tracking-wider transition-transform duration-1000 ease-out ${isInView ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ transitionDelay: '200ms' }}
            >
              L'Art du Minimalisme
            </h2>
        </div>
        <div className="overflow-hidden mt-2">
            <p 
              className={`text-lg md:text-xl tracking-widest transition-transform duration-1000 ease-out ${isInView ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ transitionDelay: '400ms' }}
            >
              HAUTE COUTURE FOR THE MODERN SOUL
            </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
