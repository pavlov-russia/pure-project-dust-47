import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, FileText, Star } from "lucide-react";

const ChecklistPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay 
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            backgroundColor: 'transparent'
          }}
        />
        <DialogContent
          hideClose
          className="sm:max-w-md border-0 shadow-2xl rounded-3xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-[2000ms]"
          style={{
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            mixBlendMode: 'screen',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
        <DialogHeader className="text-center space-y-4 px-12">
          <DialogTitle className="text-xl font-bold text-foreground leading-tight">
            Забирайте оберег от слитого бюджета
          </DialogTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="font-semibold text-warning">5 ошибок</span> в вашем Телеграм-канале, которые съедают более <span className="font-semibold text-destructive">50% продаж</span>
          </p>
        </DialogHeader>
        
        <div className="flex justify-center mt-6 px-4">
          <button
            className="relative w-full px-12 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 pulse-button"
            style={{
              background: '#563AF0',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animationDuration: '2s'
            }}
          >
            Забрать
          </button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          * Разобрали на реальных примерах наших клиентов
        </p>
        
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 transition-opacity hover:opacity-90"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255, 255, 255, 0.55)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)'
          }}
          aria-label="Закрыть"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};


export default ChecklistPopup;