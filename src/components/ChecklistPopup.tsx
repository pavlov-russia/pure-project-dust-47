import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, FileText, Star } from "lucide-react";

const ChecklistPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(7);
  const [showCountdown, setShowCountdown] = useState(true);
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    if (!showCountdown || countdownFinished) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(true);
      setShowCountdown(false);
    }
  }, [countdown, showCountdown, countdownFinished]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCountdown(7);
    setShowCountdown(true);
    setCountdownFinished(true);
  };

  return (
    <>
      {/* Countdown Display */}
      {showCountdown && !countdownFinished && (
        <div className="fixed top-4 right-4 z-50">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)'
            }}
          >
            {countdown}
          </div>
        </div>
      )}
      
      <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogOverlay 
          className="fixed inset-0 z-50 bg-black/40 data-[state=open]:backdrop-blur-md data-[state=closed]:backdrop-blur-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-[2000ms]"
        />
        <DialogContent 
          className="sm:max-w-md border-0 shadow-2xl rounded-3xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-[2000ms]"
          style={{
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            mixBlendMode: 'screen',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
        <DialogHeader className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 bg-gradient-telegram rounded-full flex items-center justify-center mb-2">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">
            Забирайте оберег от слитого бюджета
          </DialogTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="font-semibold text-warning">5 ошибок</span> в вашем Телеграм-канале, которые съедают более <span className="font-semibold text-destructive">50% продаж</span>
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Ваш email для получения чек-листа"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center border-primary/20 focus:border-primary"
              required
            />
          </div>
          
          <Button 
            type="submit"
            variant="form-submit"
            size="lg"
            className="w-full"
            icon={<Star className="w-4 h-4" />}
          >
            Получить чек-лист бесплатно
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Разобрали на реальных примерах наших клиентов
          </p>
        </form>
        
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
    </>
  );
};

export default ChecklistPopup;