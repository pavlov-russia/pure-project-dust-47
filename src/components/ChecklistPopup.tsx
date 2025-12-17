import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, FileText, Star } from "lucide-react";
const ChecklistPopup = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    onClose();
  };
  return <>
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
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-md w-full" style={{
        animation: "elasticScale 1s ease-out"
      }}>
            {/* Multiple liquid glass layers */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/25 via-white/15 to-white/20 rounded-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[31px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/15 rounded-[32px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[32px]"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6">
                <svg width="64" height="64" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
                  <g clipPath="url(#clip0_1_956)">
                    <rect x="0.111938" y="0.0577393" width="150" height="150" rx="75" fill="#563AF0" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M74.8263 46.2633C75.3552 46.444 75.929 46.444 76.4579 46.2633L100.415 38.0771C101.733 37.6266 103.167 38.3302 103.618 39.6487L106.995 49.5315C107.445 50.8499 106.742 52.284 105.423 52.7345L95.6832 56.0627C92.9853 56.9846 93.6479 60.9729 96.499 60.9729H104.056C106.843 60.9729 109.102 63.2319 109.102 66.0185V109.334C109.102 112.12 106.843 114.379 104.056 114.379H47.0403C44.2537 114.379 41.9946 112.12 41.9946 109.334V66.0185C41.9946 63.2319 44.2537 60.9729 47.0403 60.9729H54.7852C57.6363 60.9729 58.2989 56.9846 55.601 56.0627L45.8611 52.7345C44.5426 52.284 43.839 50.8499 44.2895 49.5315L47.6665 39.6487C48.117 38.3302 49.5511 37.6266 50.8696 38.0771L74.8263 46.2633ZM78.0294 56.7478C77.2517 54.4717 74.0325 54.4717 73.2548 56.7478L72.9519 57.6343C72.3925 59.2713 73.6092 60.9729 75.3392 60.9729H75.945C77.675 60.9729 78.8917 59.2713 78.3323 57.6343L78.0294 56.7478Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_956">
                      <rect x="0.111938" y="0.0577393" width="150" height="150" rx="75" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              
              <h3 className="typo-h3 text-2xl text-white mb-4 leading-tight">
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
                <Button onClick={onClose} className="btn relative z-10 bg-transparent border-none hover:bg-white/10 text-white px-8 py-3 rounded-2xl transition-all duration-300 w-full">
                  Получить
                </Button>
              </div>
            </div>
          </div>
        </div>}
    </>;
};
export default ChecklistPopup;