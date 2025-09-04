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
    <>
      <style>
        {`
          @keyframes elasticScale {
            0% { opacity: 0; transform: scale(0); }
            60% { opacity: 1; transform: scale(1.2); }
            80% { transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      {/* ChecklistPopup with iOS 26 Liquid Glass */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            className="relative max-w-md w-full"
            style={{ animation: "elasticScale 1s ease-out" }}
          >
            {/* Multiple liquid glass layers */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/25 via-white/15 to-white/20 rounded-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[31px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/15 rounded-[32px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[32px]"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6">
                <FileText className="w-16 h-16 mx-auto mb-4 text-white" />
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-4 leading-tight">
                Забирайте оберег от слитого бюджета
              </h3>
              
              <p className="text-white/90 mb-8 leading-relaxed">
                <span className="u-strong text-lg text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">5 ошибок</span><br />в вашем Телеграм-канале, которые съедают более<br /><span className="u-strong text-lg text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">50% продаж</span>
              </p>
              
              <p className="text-xs text-white/70 mb-6">
                * Разобрали на реальных примерах наших клиентов
              </p>

              {/* Button with liquid glass */}
              <div className="relative">
                <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[15px]"></div>
                <Button 
                  onClick={onClose}
                  className="relative z-10 bg-transparent border-none hover:bg-white/10 text-white font-bold uppercase px-8 py-3 rounded-2xl transition-all duration-300 w-full"
                >
                  Забрать
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default ChecklistPopup;