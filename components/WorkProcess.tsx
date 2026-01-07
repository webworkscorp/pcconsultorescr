
import React from 'react';

const steps = [
  { num: "01", title: "Descubrimiento", desc: "Auditamos su infraestructura actual para detectar cuellos de botella." },
  { num: "02", title: "Arquitectura", desc: "Diseñamos un plan de trabajo a medida con hitos claros de entrega." },
  { num: "03", title: "Implementación", desc: "Ejecutamos el despliegue con mínimo impacto en su operatividad." },
  { num: "04", title: "Soporte 360", desc: "Mantenemos y optimizamos su tecnología de forma proactiva." }
];

const WorkProcess: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-3 block">Metodología</span>
          <h2 className="text-2xl font-bold text-corp-navy uppercase tracking-tight">Nuestro Proceso</h2>
          <div className="w-10 h-0.5 bg-corp-accent mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-10 transition-all duration-300 hover:bg-corp-light group">
              <span className="block text-2xl font-bold text-slate-200 mb-6 group-hover:text-corp-accent transition-colors">{s.num}</span>
              <h3 className="text-[11px] font-bold text-corp-navy uppercase tracking-widest mb-3">{s.title}</h3>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
