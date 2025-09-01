import { Button } from "@/components/ui/button";
import ChecklistPopup from "@/components/ChecklistPopup";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-48 pb-16 w-full min-h-screen flex items-center justify-center" data-hero>
        <div className="relative max-w-lg mx-auto px-6">
          {/* iOS 26 Liquid Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-purple-500/30 via-purple-600/20 to-purple-700/30 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
          <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-purple-600/20 rounded-[40px]"></div>
          <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Управляйте впечатлением о своём бизнесе с{" "}
              <span className="font-bold text-white">TapBlog</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90 max-w-md mx-auto">
              У вас есть менее 7 секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
            </p>
            
            <p className="text-lg md:text-xl mb-10 font-semibold text-white leading-relaxed">
              И мы поможем использовать их в вашу пользу!
            </p>
            
            {/* CTA Button with iOS style */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg"></div>
              <Button 
                className="relative z-10 bg-transparent border-none hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
              >
                Получить индивидуальное КП
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
};

export default Index;