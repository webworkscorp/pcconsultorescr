
import React from 'react';

const MainCTA: React.FC = () => {
  return (
    <section id="agendar" className="py-24 bg-corp-navy relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-corp-accent/5 -skew-x-12 translate-x-1/4"></div>
       <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight leading-tight mb-6">
            Optimice su tecnología <br/> <span className="text-corp-accent">con soporte confiable</span>
          </h2>
          <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] mb-10">
            Respuesta rápida y atención personalizada en San José.
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('contacto');
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="px-12 py-4 bg-corp-accent text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-corp-navy transition-all shadow-lg border-none cursor-pointer rounded-sm"
          >
            Enviar consulta
          </button>
       </div>
    </section>
  );
};

export default MainCTA;
