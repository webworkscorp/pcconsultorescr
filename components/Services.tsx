
import React from 'react';
import { Wrench, ShieldCheck, Briefcase, Settings, Cloud } from 'lucide-react';

const mainServices = [
  {
    icon: <Wrench size={24} />,
    title: "Soporte técnico",
    desc: "Asistencia a domicilio, telefónica y remota. Diagnóstico, reparación y mantenimiento preventivo para equipos y sistemas.",
    details: ["Mantenimiento", "Reparación", "Soporte remoto"]
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Soluciones tecnológicas",
    desc: "Asesoría integral en sistemas operativos, redes, comunicaciones y seguridad tecnológica para garantizar su operatividad.",
    details: ["Seguridad IT", "Redes & Datos", "Asesoría en OS"]
  },
  {
    icon: <Briefcase size={24} />,
    title: "Consultoría en TI",
    desc: "Asesoramiento estratégico para la optimización de procesos y toma de decisiones tecnológicas basadas en objetivos de negocio.",
    details: ["Planificación", "Auditoría IT", "Estrategia digital"]
  },
  {
    icon: <Settings size={24} />,
    title: "Administración tecnológica",
    desc: "Gestión completa de sus activos digitales, servidores y plataformas para asegurar continuidad y escalabilidad.",
    details: ["Gestión de activos", "Control de sistemas", "Monitoreo"]
  },
  {
    icon: <Cloud size={24} />,
    title: "Servicios en la nube",
    desc: "Migración, gestión y optimización de infraestructura cloud. Soluciones escalables para almacenamiento y aplicaciones empresariales.",
    details: ["Microsoft 365", "Cloud Storage", "Migración Cloud"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-4 block">Especialidades</span>
          <h2 className="text-3xl font-bold text-corp-navy uppercase tracking-tight">Nuestros Servicios</h2>
          <div className="w-12 h-1 bg-corp-accent mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((s, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-sm group">
              <div className="text-corp-accent mb-8 group-hover:scale-110 transition-transform inline-block p-4 bg-corp-light rounded-sm">
                {s.icon}
              </div>
              <h3 className="text-[12px] font-bold text-corp-navy mb-5 uppercase tracking-widest">{s.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-8">
                {s.desc}
              </p>
              <ul className="space-y-3">
                {s.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-wider text-corp-navy/40">
                    <div className="w-1 h-1 bg-corp-accent rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
