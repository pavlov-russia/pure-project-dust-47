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
                <svg width="64" height="64" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
                  <g clipPath="url(#clip0_1_942)">
                    <rect x="0.651611" y="0.63208" width="150" height="150" rx="75" fill="#563AF0"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M90.7921 100.123C86.769 100.402 81.7155 100.514 76.5475 100.492C71.3795 100.514 66.326 100.402 62.3029 100.123C54.5351 99.5849 51.5741 99.1298 49.4982 98.1556C45.9599 96.4951 43.0198 92.5127 42.384 88.5189C42.1457 87.0203 42.0671 86.9445 40.5473 86.7408C39.3813 86.5846 38.6423 86.1819 37.7628 85.2233C36.7122 84.0777 36.5315 83.5544 36.2871 80.9462C35.887 76.6824 36.3106 70.79 37.1149 69.4298C37.7879 68.2914 39.3388 67.3381 41.1117 66.9725C41.8375 66.8228 42.1848 66.4674 42.3339 65.7204C42.4489 65.1467 43.2449 60.9231 44.1035 56.3347C44.962 51.7463 45.8639 47.3097 46.1076 46.4754C46.3723 45.5697 47.1877 44.935 48.1315 44.8999L49.5863 44.846C49.7421 44.8402 49.8925 44.8345 50.0378 44.8289C52.0101 44.7535 53.0355 44.7143 53.7194 45.1779C54.4599 45.68 54.7999 46.7719 55.508 49.0462C55.5561 49.2009 55.606 49.361 55.6578 49.5269L57.025 53.901L63.9339 53.601C68.2459 53.4137 72.293 53.3187 76.3681 53.3157C76.4345 53.3157 76.5008 53.3157 76.5672 53.3157C76.6205 53.3157 76.6737 53.3157 76.7269 53.3157C80.802 53.3187 84.8491 53.4137 89.1611 53.601L96.07 53.901L97.4372 49.5269C97.489 49.361 97.5389 49.2009 97.587 49.0462C98.2951 46.7719 98.6351 45.68 99.3756 45.1779C100.059 44.7143 101.085 44.7535 103.057 44.8289C103.202 44.8345 103.353 44.8402 103.509 44.846L104.964 44.8999C105.907 44.935 106.723 45.5697 106.987 46.4754C107.231 47.3097 108.133 51.7463 108.992 56.3347C109.85 60.9231 110.646 65.1467 110.761 65.7204C110.91 66.4674 111.258 66.8227 111.983 66.9725C113.756 67.3381 115.307 68.2914 115.98 69.4298C116.784 70.79 117.208 76.6824 116.808 80.9462C116.563 83.5544 116.383 84.0777 115.332 85.2233C114.453 86.1819 113.714 86.5846 112.548 86.7408C111.028 86.9445 110.949 87.0203 110.711 88.5189C110.075 92.5127 107.135 96.4951 103.597 98.1556C101.521 99.1298 98.5599 99.5849 90.7921 100.123Z" fill="white"/>
                    <circle cx="75.9477" cy="138.435" r="39.8012" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_942">
                      <rect x="0.651611" y="0.63208" width="150" height="150" rx="75" fill="white"/>
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
                <Button 
                  onClick={onClose}
                  className="btn relative z-10 bg-transparent border-none hover:bg-white/10 text-white px-8 py-3 rounded-2xl transition-all duration-300 w-full"
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