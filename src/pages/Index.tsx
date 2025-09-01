import { Button } from "@/components/ui/button";
import ChecklistPopup from "@/components/ChecklistPopup";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";

const Index = () => {
  return (
    <div 
      className="min-h-screen w-full fixed inset-0"
      style={{
        background: 'linear-gradient(135deg, #563AF0 0%, #563AF0 25%, #7962F4 50%, #7962F4 75%, #FFFFFF 100%)'
      }}
    >
      <div className="relative z-10 min-h-screen overflow-y-auto">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-0 w-full flex items-center justify-center" data-hero>
        <div className="container mx-auto px-6 max-w-full">
          <div className="max-w-lg mx-auto relative">
          {/* iOS 26 Liquid Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-purple-500/30 via-purple-600/20 to-purple-700/30 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
          <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-purple-600/20 rounded-[40px]"></div>
          <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h1 className="text-xl md:text-3xl font-bold mb-4 leading-tight text-white">
              Управляйте впечатлением о своём бизнесе с{" "}
              <span className="font-bold text-white">TapBlog</span>
            </h1>
            
            <p className="text-sm md:text-base mb-6 leading-relaxed text-white/90 max-w-md mx-auto">
              У вас есть менее 7 секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
            </p>
            
            <p className="text-sm md:text-base mb-8 font-semibold text-white leading-relaxed">
              И мы поможем использовать их в вашу пользу!
            </p>
            
            {/* CTA Button with header style - no icon */}
            <div className="relative inline-block w-full max-w-xs mx-auto">
              <Button 
                variant="glass-breath"
                className="transition-all duration-300 h-12 w-full px-4 py-3 rounded-2xl text-sm md:text-base"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.18)',
                }}
              >
                <span className="hidden sm:inline">Получить индивидуальное КП</span>
                <span className="sm:hidden">Получить КП</span>
              </Button>
            </div>
          </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Form */}
      <div className="-mt-12">
        <ConsultationForm />
      </div>
      </div>
    </div>
  );
};

export default Index;