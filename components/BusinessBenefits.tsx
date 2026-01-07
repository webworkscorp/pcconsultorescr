
import React from 'react';
import { Cpu, Network, BarChart3 } from 'lucide-react';

const BusinessBenefits: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-corp-light rounded-full flex items-center justify-center text-corp-accent mb-8">
              <Cpu size={32} />
            </div>
            <h3 className="text-sm font-black text-corp-navy uppercase tracking-widest mb-6">Digitalización de Procesos</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Transformamos sus flujos operativos analógicos en ecosistemas digitales automatizados que reducen el margen de error y los costos operativos de manera significativa.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-corp-light rounded-full flex items-center justify-center text-corp-accent mb-8">
              <Network size={32} />
            </div>
            <h3 className="text-sm font-black text-corp-navy uppercase tracking-widest mb-6">Integración Total</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Conectamos de manera eficiente sus activos tecnológicos con su capital humano, creando una cultura digital sólida donde las herramientas potencian la productividad individual.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-corp-light rounded-full flex items-center justify-center text-corp-accent mb-8">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-sm font-black text-corp-navy uppercase tracking-widest mb-6">Business Intelligence</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Implementamos marcos de análisis de datos que permiten a la gerencia tomar decisiones estratégicas basadas en información real, no en suposiciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
