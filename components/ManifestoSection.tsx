
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const ManifestoSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8 bg-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className={`font-couture text-4xl md:text-6xl mb-8 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms'}}>
          Manifeste
        </h2>
        <p className={`text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-6 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms'}}>
          Nous croyons en une élégance qui murmure, pas qui crie. Chaque pièce est une étude de la forme, une célébration du tissu et une ode à la silhouette. Dans un monde de bruit, nous choisissons le silence de la perfection.
        </p>
        <p className={`text-lg md:text-xl font-light leading-relaxed text-gray-300 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms'}}>
          Atelier Noir est plus qu'une marque; c'est une philosophie. C'est l'art de l'essentiel, la poésie de la retenue et la promesse d'une beauté intemporelle.
        </p>
      </div>
    </section>
  );
};

export default ManifestoSection;
