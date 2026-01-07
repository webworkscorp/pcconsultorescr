
import React from 'react';
import { Monitor, Network, ShieldAlert, Cpu } from 'lucide-react';

const TechSolutions: React.FC = () => {
  return (
    <section id="soluciones" className="relative py-20 overflow-hidden flex items-center min-h-[450px]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url('https://i.imgur.com/FvYBW3X.jpeg')` }}
      >
        <div className="absolute inset-0 bg-corp-navy/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center reveal-in">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-3 block">Soporte 360°</span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-6">Soluciones Tecnológicas</h2>
          <p className="text-white/60 text-[13px] font-medium leading-relaxed mb-10">
            Garantizamos la continuidad operativa de su empresa mediante soporte especializado y suministro de equipo tecnológico crítico.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Monitor size={18} />, text: "Cómputo" },
              { icon: <Network size={18} />, text: "Redes" },
              { icon: <ShieldAlert size={18} />, text: "Seguridad" },
              { icon: <Cpu size={18} />, text: "Servidores" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 bg-white/5 p-6 border border-white/10 rounded-sm hover:bg-white/10 transition-all">
                <div className="text-corp-accent">{item.icon}</div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button 
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-corp-accent text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-corp-navy transition-all border-none cursor-pointer rounded-sm shadow-xl"
            >
              Consultar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
