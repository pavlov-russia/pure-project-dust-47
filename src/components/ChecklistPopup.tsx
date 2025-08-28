import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, FileText, Star } from "lucide-react";

const ChecklistPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay 
          className="fixed inset-0 z-50 bg-black/40 transition-[backdrop-filter,opacity] duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] data-[state=open]:backdrop-blur-md data-[state=closed]:backdrop-blur-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
        />
        <DialogContent 
          className="sm:max-w-md border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
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
            className="w-full bg-gradient-telegram hover:shadow-medium transition-smooth font-semibold"
          >
            <Star className="w-4 h-4 mr-2" />
            Получить чек-лист бесплатно
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Разобрали на реальных примерах наших клиентов
          </p>
        </form>
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ChecklistPopup;