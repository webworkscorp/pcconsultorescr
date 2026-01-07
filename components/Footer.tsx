
import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-corp-navy text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://i.imgur.com/WCml8XH.png" alt="PC Consultores Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold uppercase tracking-tighter">PC Consultores</span>
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed font-medium mb-8 uppercase tracking-widest">
              Soluciones tecnológicas integradas para el crecimiento de negocios y profesionales en Costa Rica.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} className="text-white/30 hover:text-corp-accent cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-8">Atención Directa</h5>
            <ul className="space-y-6">
              <li className="flex gap-4 items-center">
                <Phone size={14} className="text-corp-accent" />
                <a href="tel:50683400564" className="text-[12px] font-bold tracking-widest hover:text-corp-accent transition-colors">
                  (506) 8340-0564
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={14} className="text-corp-accent" />
                <a href="mailto:info@pcconsultorescr.com" className="text-[12px] font-medium hover:text-corp-accent transition-colors">
                  info@pcconsultorescr.com
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Facebook size={14} className="text-corp-accent" />
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium hover:text-corp-accent transition-colors">
                  Síguenos en Facebook
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin size={14} className="text-corp-accent shrink-0" />
                <span className="text-[11px] text-white/40 leading-relaxed uppercase tracking-widest">
                  San José, Costa Rica.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-8">Menú</h5>
            <ul className="grid grid-cols-2 gap-y-4">
              {['Inicio', 'Servicios', 'Soporte', 'Contactenos'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      let targetId = item.toLowerCase();
                      if (item === 'Soporte') targetId = 'soluciones';
                      if (item === 'Contactenos') targetId = 'contacto';
                      scrollTo(targetId);
                    }}
                    className="text-[11px] font-bold text-white/30 hover:text-white transition-all bg-transparent border-none cursor-pointer p-0 uppercase tracking-widest"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 PC Consultores – Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[9px] font-bold text-white/10 uppercase tracking-widest">
            <span>Privacidad</span>
            <span>Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
