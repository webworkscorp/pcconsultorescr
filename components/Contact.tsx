
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola PC Consultores, mi nombre es ${formData.name}. Quisiera consultar lo siguiente: ${formData.message}`;
    const whatsappUrl = `https://wa.me/50683400564?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-corp-accent mb-4 block">Contacto</span>
            <h2 className="text-3xl font-bold text-corp-navy mb-8 uppercase tracking-tight leading-none">Estamos listos <br/> <span className="text-slate-300">para ayudarle.</span></h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-12">
              Soluciones tecnológicas integradas y soporte profesional en todo el territorio nacional.
            </p>
            <div className="space-y-8">
              <div className="group">
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-3">Teléfono de Contacto</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-corp-light rounded-sm flex items-center justify-center text-corp-accent group-hover:bg-corp-accent group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  <a href="tel:50683400564" className="text-sm font-bold text-corp-navy hover:text-corp-accent transition-colors">(506) 8340-0564</a>
                </div>
              </div>
              <div className="group">
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-3">Correo Electrónico</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-corp-light rounded-sm flex items-center justify-center text-corp-accent group-hover:bg-corp-accent group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:info@pcconsultorescr.com" className="text-sm font-bold text-corp-navy hover:text-corp-accent transition-colors">info@pcconsultorescr.com</a>
                </div>
              </div>
              <div className="group">
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-3">Ubicación Central</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-corp-light rounded-sm flex items-center justify-center text-corp-accent group-hover:bg-corp-accent group-hover:text-white transition-all">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm font-bold text-corp-navy uppercase tracking-tight">San José, Costa Rica.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-slate-50 p-12 border border-slate-100 rounded-sm shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-corp-navy mb-10 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-corp-accent"></div>
                Enviar Mensaje por WhatsApp
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-3">Nombre Completo</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Su nombre"
                    className="w-full bg-white border border-slate-200 py-4 px-5 text-[12px] outline-none focus:border-corp-accent transition-all rounded-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-3">Su Consulta</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Detalles de su requerimiento técnico..."
                    rows={6}
                    className="w-full bg-white border border-slate-200 py-4 px-5 text-[12px] outline-none focus:border-corp-accent transition-all rounded-sm resize-none font-medium"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-corp-navy text-white text-[10px] font-bold uppercase tracking-widest hover:bg-corp-accent transition-all flex items-center justify-center gap-4 shadow-xl border-none cursor-pointer rounded-sm"
                >
                  <Send size={14} />
                  Enviar a WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
