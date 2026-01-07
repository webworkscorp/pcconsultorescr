
import React from 'react';
import { Database, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: "Digitalización de Procesos",
    text: "Convertimos operaciones manuales en flujos digitales automatizados y eficientes.",
    icon: <Database className="text-corp-accent" />
  },
  {
    title: "Integración de Personas",
    text: "Conectamos el capital humano con las herramientas tecnológicas adecuadas.",
    icon: <Users className="text-corp-accent" />
  },
  {
    title: "Business Intelligence",
    text: "Datos transformados en decisiones estratégicas para el crecimiento real.",
    icon: <TrendingUp className="text-corp-accent" />
  }
];

const Value: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h3 className="text-3xl font-black text-corp-navy uppercase tracking-tighter mb-8 leading-tight">
              Aportamos valor real <br/> a través de la excelencia.
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              PC Consultores se enfoca en objetivos tangibles. No solo instalamos software; diseñamos marcos de trabajo que potencian la madurez digital de su organización.
            </p>
            <ul className="space-y-4">
              {['Monitoreo de Aplicaciones', 'Virtualización Avanzada', 'Seguridad Perimetral'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-corp-navy">
                  <div className="w-1.5 h-1.5 bg-corp-accent rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-8 p-8 border-l-4 border-slate-100 hover:border-corp-accent transition-all bg-corp-light">
                <div className="mt-1">{b.icon}</div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-corp-navy mb-2">{b.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-corp-navy p-16 text-center text-white relative overflow-hidden rounded-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-10 relative z-10">
            ¿Listo para transformar su infraestructura?
          </h4>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-corp-accent text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-corp-navy transition-all relative z-10"
          >
            Conozca Más Sobre Nuestras Soluciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Value;
