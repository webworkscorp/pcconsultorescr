
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CorporatePresentation: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-4 block">Historia y Visión</span>
        <h2 className="text-2xl font-bold text-corp-navy uppercase tracking-tight mb-8">Quiénes Somos</h2>
        <div className="space-y-6 max-w-2xl mx-auto mb-12">
          <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
            PC Consultores es una empresa costarricense dedicada a brindar soluciones tecnológicas integrales. Nacimos ante la necesidad de ofrecer un ecosistema completo: desde software especializado hasta soporte en sistemas operativos, equipos de cómputo y redes.
          </p>
          <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
            Nuestro objetivo es apoyar el crecimiento de negocios y profesionales, garantizando que la tecnología sea un motor de eficiencia y no un obstáculo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-12 mb-16">
          {["Costa Rica", "Soporte Integral", "Crecimiento Digital"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-corp-accent" />
              <span className="text-[9px] font-bold text-corp-navy uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
        <div className="relative w-full h-[350px]">
          <img 
            src="https://i.imgur.com/Cffyxpd.jpeg" 
            alt="PC Consultores Oficina" 
            className="w-full h-full object-cover grayscale-[0.1] rounded-sm shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CorporatePresentation;
