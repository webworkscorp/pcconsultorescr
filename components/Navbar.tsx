
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Menu, X } from 'lucide-react';

const WhatsAppIcon = ({ size = 12, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c0 5.45-4.435 9.884-9.886 9.884" />
  </svg>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenu(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-300">
      <div className={`bg-corp-navy text-white/90 py-1.5 transition-all duration-300 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <a href="tel:50683400564" className="flex items-center gap-2 hover:text-corp-accent transition-colors">
              <Phone size={10} className="text-corp-accent" /> (506) 8340-0564
            </a>
            <span className="hidden sm:inline-block opacity-30">|</span>
            <a href="mailto:info@pcconsultorescr.com" className="hidden sm:flex items-center gap-2 hover:text-corp-accent transition-colors">
              <Mail size={10} className="text-corp-accent" /> info@pcconsultorescr.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-corp-accent transition-colors">
              <Facebook size={12} className="opacity-70" />
            </a>
            <a href="https://wa.me/50683400564" target="_blank" rel="noopener noreferrer" className="hover:text-corp-accent transition-colors">
              <WhatsAppIcon size={12} className="opacity-70" />
            </a>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-white py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 bg-transparent border-none cursor-pointer group">
            <img src="https://i.imgur.com/WCml8XH.png" alt="PC Consultores Logo" className="h-9 w-auto object-contain" />
            <div className="text-left">
              <span className="block text-sm font-bold text-corp-navy uppercase leading-none">PC Consultores</span>
              <span className="block text-[7px] font-bold text-corp-accent uppercase tracking-[0.2em] mt-0.5">San José, Costa Rica</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {['Inicio', 'Nosotros', 'Servicios', 'Soporte', 'Contacto'].map(item => (
              <button 
                key={item} 
                onClick={() => {
                  const targetId = item === 'Soporte' ? 'soluciones' : item.toLowerCase();
                  scrollTo(targetId);
                }} 
                className="text-[9px] font-bold uppercase tracking-widest text-corp-navy/60 hover:text-corp-navy border-none bg-transparent cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contacto')} className="px-5 py-2.5 bg-corp-accent text-white text-[9px] font-bold uppercase tracking-widest rounded-sm hover:bg-corp-navy transition-all shadow-sm cursor-pointer border-none">
              Contáctenos
            </button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-corp-navy border-none bg-transparent cursor-pointer">
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
            {['Inicio', 'Nosotros', 'Servicios', 'Soporte', 'Contacto'].map(item => (
              <button 
                key={item} 
                onClick={() => {
                  const targetId = item === 'Soporte' ? 'soluciones' : item.toLowerCase();
                  scrollTo(targetId);
                }} 
                className="text-left text-[10px] font-bold uppercase tracking-widest text-corp-navy border-none bg-transparent py-2"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contacto')} 
              className="text-left text-[10px] font-bold uppercase tracking-widest text-corp-accent border-none bg-transparent py-2"
            >
              Contáctenos
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
