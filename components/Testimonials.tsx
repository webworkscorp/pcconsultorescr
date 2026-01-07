
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jonathan Villalobos",
    company: "Enterate Noticias",
    text: "Empresa responsable, con excelente atención al cliente y asesoría profesional.",
    role: "Cliente"
  },
  {
    name: "Priscilla Chávez",
    company: "LP Fotografía",
    text: "Muy satisfecha con el servicio de diseño web y la atención recibida.",
    role: "Cliente"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-corp-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-corp-accent opacity-5 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-4 block">Experiencias</span>
          <h2 className="text-3xl font-bold uppercase tracking-tight">Lo que dicen nuestros clientes</h2>
          <div className="w-12 h-1 bg-corp-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 backdrop-blur-sm relative group rounded-sm hover:bg-white/10 transition-all">
              <Quote className="absolute top-8 right-8 text-corp-accent opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
              <p className="text-sm italic font-medium leading-relaxed mb-8 text-white/80">
                "{t.text}"
              </p>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-corp-accent">{t.name}</span>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-white/30">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
