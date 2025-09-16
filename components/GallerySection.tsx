
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const galleryItems = [
  { id: 1, src: 'https://picsum.photos/800/1200?grayscale&random=1', alt: 'Couture design 1' },
  { id: 2, src: 'https://picsum.photos/800/1200?grayscale&random=2', alt: 'Couture design 2' },
  { id: 3, src: 'https://picsum.photos/800/1200?grayscale&random=3', alt: 'Couture design 3' },
  { id: 4, src: 'https://picsum.photos/800/1200?grayscale&random=4', alt: 'Couture design 4' },
];

const GalleryItem: React.FC<{ src: string; alt: string; delay: number; }> = ({ src, alt, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className={`overflow-hidden transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${delay}ms`}}>
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
        </div>
    );
};

const GallerySection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const titleInView = useInView(titleRef, { once: true });
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-black">
      <div className="container mx-auto">
        <h2 ref={titleRef} className={`font-couture text-4xl md:text-6xl text-center mb-12 transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
          Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} src={item.src} alt={item.alt} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
