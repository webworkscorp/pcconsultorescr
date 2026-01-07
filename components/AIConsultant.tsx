
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageRole, ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Bienvenido a PC Consultores. ¿Cómo puedo asistirle con sus requerimientos técnicos hoy?" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;
    const userMessage = inputText;
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userMessage }]);
    setInputText('');
    setIsLoading(true);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const chat = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: { 
              systemInstruction: "Eres el Asistente Técnico de PC Consultores. Tu tono es profesional, breve y directo. Evita respuestas largas. Ayuda con soporte técnico, páginas web y equipo de cómputo en Costa Rica. Si no sabes algo, pide que escriban a info@pcconsultorescr.com."
            }
        });
        
        let responseText = "";
        const responseStream = await chat.sendMessageStream({ message: userMessage });
        setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "" }]);
        
        for await (const chunk of responseStream) {
             const c = chunk as GenerateContentResponse;
             if (c.text) {
                 responseText += c.text;
                 setMessages(prev => {
                     const newMessages = [...prev];
                     newMessages[newMessages.length - 1] = { role: MessageRole.MODEL, text: responseText };
                     return newMessages;
                 });
             }
        }
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Lo sentimos, el servicio no está disponible. Por favor escriba a info@pcconsultorescr.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-10 right-10 z-[200] w-14 h-14 bg-corp-navy text-white flex items-center justify-center shadow-2xl transition-all duration-500 hover:bg-corp-accent ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={20} />
      </button>

      <div
        className={`fixed bottom-10 right-10 z-[200] w-[380px] bg-white border border-slate-100 shadow-2xl flex flex-col transition-all duration-500 ease-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', borderRadius: '4px' }}
      >
        <div className="flex items-center justify-between p-6 bg-corp-navy text-white">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Asistente Técnico</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] text-[12px] leading-relaxed p-4 rounded-sm shadow-sm ${
                  msg.role === MessageRole.USER
                    ? 'bg-corp-navy text-white'
                    : 'bg-white text-slate-700 border border-slate-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && <div className="flex justify-center"><Loader2 className="w-4 h-4 animate-spin text-corp-accent" /></div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escriba su consulta..."
              className="w-full bg-slate-50 border border-slate-100 py-3 px-4 pr-12 text-[12px] focus:ring-1 focus:ring-corp-accent outline-none text-corp-navy transition-all rounded-sm"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputText.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-corp-navy/40 hover:text-corp-accent transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIConsultant;
