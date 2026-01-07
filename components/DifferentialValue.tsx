
import React from 'react';

const DifferentialValue: React.FC = () => {
  return (
    <section className="py-20 bg-corp-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="border-r border-white/5 last:border-none">
            <span className="block text-3xl font-bold mb-2 tracking-tight">35+</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-40">Años de Experiencia</span>
          </div>
          <div className="border-r border-white/5 last:border-none">
            <span className="block text-3xl font-bold mb-2 tracking-tight">24/7</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-40">Soporte Técnico</span>
          </div>
          <div className="border-r border-white/5 last:border-none">
            <span className="block text-3xl font-bold mb-2 tracking-tight">99.9%</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-40">Disponibilidad IT</span>
          </div>
          <div className="last:border-none">
            <span className="block text-3xl font-bold mb-2 tracking-tight">&lt; 2H</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-40">Tiempo de Respuesta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialValue;
