
import React from 'react';

const params = [
  { val: "99.9%", label: "Disponibilidad" },
  { val: "24/7", label: "Soporte Crítico" },
  { val: "100%", label: "Seguridad" },
  { val: "Tier 3", label: "Estándares" }
];

const WhyUs: React.FC = () => {
  return (
    <section id="institucional" className="py-24 bg-corp-navy relative z-10">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {params.map((p, idx) => (
            <div key={idx} className="border-l border-white/10 pl-8">
              <span className="block text-4xl md:text-5xl font-light text-white mb-2">{p.val}</span>
              <span className="block text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
