
import React from 'react';
import { Building2, Factory, Landmark, Cpu } from 'lucide-react';

const Sectors: React.FC = () => {
  const sectors = [
    { icon: <Landmark size={20} />, name: "Banca & Finanzas" },
    { icon: <Factory size={20} />, name: "Industria & Manufactura" },
    { icon: <Building2 size={20} />, name: "Gobierno & Instituciones" },
    { icon: <Cpu size={20} />, name: "Sector Tecnológico" }
  ];

  return (
    <section id="sectores" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-12">Expertos en diversas industrias críticas</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 opacity-60">
          {sectors.map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-4 group cursor-default">
              <div className="text-slate-400 group-hover:text-corp-accent transition-colors">{s.icon}</div>
              <span className="text-sm font-bold text-slate-400 group-hover:text-corp-navy transition-colors tracking-tight">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
