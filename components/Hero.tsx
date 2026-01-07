
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center py-32 overflow-hidden bg-corp-navy">
      {/* Imagen de fondo con overlay refinado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/iKIJfu6.jpeg" 
          alt="PC Consultores Soporte Técnico 360" 
          className="w-full h-full object-cover object-top grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corp-navy/95 via-corp-navy/85 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl reveal-in">
          
          {/* Logo con acento lateral profesional restaurado */}
          <div className="mb-10 flex items-center gap-6">
            <div className="hidden md:block w-1.5 h-16 bg-corp-accent rounded-full shadow-[0_0_15px_rgba(0,123,255,0.4)]"></div>
            <img 
              src="https://i.imgur.com/L88tWCc.png" 
              alt="Logo PC Consultores" 
              className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]" 
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] uppercase tracking-tight">
              Proveemos soluciones <br/>
              <span className="text-corp-accent">Tecnológicas Integradas</span>
            </h1>
            
            <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed max-w-lg">
              Soporte técnico y consultoría profesional en San José, Costa Rica. Elevamos la estabilidad digital de su negocio con atención 24/7.
            </p>
            
            {/* Contenedor de botones optimizado */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                onClick={() => scrollTo('contacto')}
                className="w-full sm:w-auto h-14 px-10 bg-corp-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-corp-navy transition-all cursor-pointer border-none shadow-xl flex items-center justify-center"
              >
                Contáctanos
              </button>
              
              <button 
                onClick={() => scrollTo('servicios')}
                className="w-full sm:w-auto h-14 px-10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all cursor-pointer bg-white/5 flex items-center justify-center gap-3 group backdrop-blur-md"
              >
                Nuestros Servicios
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-12 left-6 md:left-auto md:right-12 flex flex-col items-center gap-3 opacity-20 hidden md:flex">
        <span className="text-[7px] font-bold text-white uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
