
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Promo: React.FC = () => {
  const scrollToAgendar = () => {
    const element = document.getElementById('agendar');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="expertos" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-corp-red text-[11px] font-black uppercase tracking-[0.5em] mb-8 block">Inversión Tecnológica</span>
            <h2 className="text-6xl font-serif font-black text-corp-navy tracking-tighter uppercase leading-[0.9] mb-12">
              Excelencia <br/> <span className="italic opacity-30">como estándar.</span>
            </h2>
            <p className="text-lg text-corp-navy/60 font-medium leading-relaxed mb-12 max-w-lg">
              Ofrecemos marcos de trabajo integrales para el despliegue de infraestructura crítica, garantizando que su institución nunca se detenga.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="border-l-2 border-corp-red pl-6 py-2">
                 <span className="block text-2xl font-black text-corp-navy uppercase tracking-tighter">Soporte 24/7</span>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Canal Prioritario</span>
              </div>
              <div className="border-l-2 border-corp-red pl-6 py-2">
                 <span className="block text-2xl font-black text-corp-navy uppercase tracking-tighter">SLA 99.9%</span>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Disponibilidad</span>
              </div>
            </div>
          </div>

          <div className="bg-corp-navy p-16 relative shadow-[0_50px_100px_-20px_rgba(0,26,61,0.5)]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-corp-red opacity-10 translate-x-12 -translate-y-12"></div>
            <div className="flex items-center gap-4 mb-10 text-corp-red">
               <ShieldCheck size={32} />
               <span className="text-[11px] uppercase tracking-[0.4em] font-black text-white">Programa de Fidelidad</span>
            </div>
            <h3 className="text-4xl font-serif font-bold text-white mb-8">Consultoría de Entrada</h3>
            <p className="text-white/40 text-sm font-medium leading-relaxed mb-12 italic">
               "Diseñamos el camino hacia la madurez digital con un enfoque boutique y resultados globales."
            </p>
            <button 
              onClick={scrollToAgendar}
              className="w-full py-6 bg-white text-corp-navy text-[11px] font-black uppercase tracking-widest hover:bg-corp-red hover:text-white transition-all shadow-xl border-none cursor-pointer"
            >
               Solicitar Auditoría Inicial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
