
import React, { useState, useRef } from 'react';
import { getStyleAdvice } from '../services/geminiService';
import { useInView } from '../hooks/useInView';
import Spinner from './Spinner';

const ConsultationSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [prompt, setPrompt] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Veuillez poser une question.');
      return;
    }
    setIsLoading(true);
    setError('');
    setAdvice('');
    try {
      const result = await getStyleAdvice(prompt);
      setAdvice(result);
    } catch (err) {
      setError('Désolé, une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formattedAdvice = advice.split('\n').map((line, index) => (
    <p key={index} className="mb-4">{line}</p>
  ));

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 bg-black">
      <div className={`container mx-auto max-w-3xl text-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="font-couture text-4xl md:text-6xl mb-4">Consultation Privée</h2>
        <p className="text-gray-300 mb-8">
          Demandez conseil à notre styliste IA pour une touche de perfection sur mesure.
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Que porter pour un gala à Paris ?"
              className="flex-grow bg-transparent border border-gray-600 focus:border-amber-400 text-white p-3 transition-colors duration-300 outline-none w-full"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="font-couture bg-transparent border-2 border-amber-400 text-amber-400 px-8 py-3 uppercase tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Analyse...' : 'Obtenir Conseil'}
            </button>
          </div>
        </form>
        <div className="mt-12 text-left min-h-[100px] font-light leading-relaxed text-gray-300">
          {isLoading && <Spinner />}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {advice && <div className="border-t border-gray-700 pt-8">{formattedAdvice}</div>}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
