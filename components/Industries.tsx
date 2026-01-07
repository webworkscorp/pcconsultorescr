
import React from 'react';
import { Monitor, ShoppingBag, Briefcase, Shield, Store } from 'lucide-react';

const industries = [
  { icon: <Monitor size={20} />, name: "Software & Tecnología" },
  { icon: <ShoppingBag size={20} />, name: "Comercio & Logística" },
  { icon: <Briefcase size={20} />, name: "Servicios de Negocio" },
  { icon: <Shield size={20} />, name: "Empresas de Seguridad" },
  { icon: <Store size={20} />, name: "Pequeñas y Medianas Empresas" }
];

const Industries: React.FC = () => {
  const scrollToTestimonios = () => {
    const el = document.getElementById('testimonios');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="sectores" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-4 block">Especialización</span>
            <h2 className="text-2xl font-bold text-corp-navy uppercase tracking-tight leading-tight mb-6">
              Sectores <br/> Estratégicos
            </h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8">
              Adaptamos nuestras soluciones a las necesidades específicas de cada industria, garantizando eficiencia y escalabilidad tecnológica.
            </p>
            <button 
              onClick={scrollToTestimonios}
              className="px-6 py-3 border border-slate-200 text-corp-navy text-[9px] font-bold uppercase tracking-widest hover:border-corp-navy transition-all rounded-sm cursor-pointer bg-transparent"
            >
              Ver Casos de Éxito
            </button>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {industries.map((ind, i) => (
              <div key={i} className="bg-corp-light p-6 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="text-corp-accent mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {ind.icon}
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-corp-navy">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
