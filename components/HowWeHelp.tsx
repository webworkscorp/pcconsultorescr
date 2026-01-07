
import React from 'react';

const HowWeHelp: React.FC = () => {
  return (
    <section className="py-20 bg-corp-accent text-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-6 leading-tight">
          ¿No está seguro por dónde empezar?
        </h3>
        <p className="text-xs md:text-sm font-medium mb-10 opacity-90 leading-relaxed">
          Ya sea que sufra de lentitud en su red, necesite blindar sus datos o busque una presencia web de clase mundial, permítanos realizar un diagnóstico gratuito de su situación actual.
        </p>
        <button 
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-white text-corp-accent text-[10px] font-bold uppercase tracking-widest hover:bg-corp-navy hover:text-white transition-all shadow-lg border-none cursor-pointer rounded-sm"
        >
          Solicitar Diagnóstico Gratuito
        </button>
      </div>
    </section>
  );
};

export default HowWeHelp;
