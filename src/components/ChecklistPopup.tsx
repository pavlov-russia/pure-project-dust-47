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
  const [hasFinishedFirstTime, setHasFinishedFirstTime] = useState(false);

  useEffect(() => {
    if (!hasFinishedFirstTime && showCountdown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!hasFinishedFirstTime && countdown === 0) {
      setIsOpen(true);
      setShowCountdown(false);
      setHasFinishedFirstTime(true);
    }
  }, [countdown, showCountdown, hasFinishedFirstTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (hasFinishedFirstTime) {
      setCountdown(7);
      setShowCountdown(true);
    }
  };

  return (
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
            <p className="text-xs text-destructive text-center font-medium">
              Email будет изменён на то что в ТЗ!
            </p>
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
  );
};

// Экспортируем компонент для отображения отсчета в тексте
export const ChecklistCountdown = () => {
  const [countdown, setCountdown] = useState(7);
  const [showCountdown, setShowCountdown] = useState(true);
  const [hasFinishedFirstTime, setHasFinishedFirstTime] = useState(false);

  useEffect(() => {
    if (!hasFinishedFirstTime && showCountdown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!hasFinishedFirstTime && countdown === 0) {
      setShowCountdown(false);
      setHasFinishedFirstTime(true);
      // После завершения отсчета показываем 7 и останавливаем
      setTimeout(() => {
        setCountdown(7);
      }, 100);
    }
  }, [countdown, showCountdown, hasFinishedFirstTime]);

  return (
    <span 
      className={`
        inline-block px-3 py-1 mx-1 rounded-lg font-bold transition-all duration-300
        ${showCountdown && !hasFinishedFirstTime 
          ? 'bg-gradient-to-r from-accent via-primary to-accent text-white shadow-glow animate-pulse transform scale-110' 
          : 'text-white'
        }
      `}
      style={{
        animation: showCountdown && !hasFinishedFirstTime 
          ? 'breath-glass 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, pulse 1s ease-in-out infinite' 
          : 'none',
        boxShadow: showCountdown && !hasFinishedFirstTime 
          ? '0 0 30px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--accent) / 0.6), inset 0 1px 0 rgba(255,255,255,0.3)'
          : 'none',
        textShadow: showCountdown && !hasFinishedFirstTime 
          ? '0 0 10px rgba(255,255,255,0.8), 0 0 20px hsl(var(--primary) / 0.8)'
          : 'none'
      }}
    >
      {countdown}
    </span>
  );
};

export default ChecklistPopup;