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
            <div className="backdrop-blur-[40px] bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative z-10 text-center">
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
      
      {/* Strategy Section */}
      <section className="py-8">
        <div className="container mx-auto px-2 max-w-full">
          <div className="w-full relative">
            <div className="p-8 md:p-12 relative z-10">
              {/* Декоративная полоска сверху */}
              <div className="w-full h-[3px] mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9580FF] to-transparent opacity-70"></div>
              </div>
              
              <h2 className="text-lg md:text-3xl font-bold text-white mb-4 text-center leading-tight">
                Стратегическая упаковка — катализатор доверия и конверсии
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 text-center mb-8 leading-relaxed">
                Это основа, без которой продвижение теряет смысл, а вы – бюджет
              </p>
            </div>
          </div>
        </div>
        
        {/* Карточка на всю ширину экрана */}
        <div className="w-full px-6 -mt-10">
          <div className="bg-white/15 rounded-2xl px-6 py-6 mb-8 border border-white/20 animate-pulse-slow shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-[2000ms]">
            <p className="text-center text-white font-semibold text-sm tracking-wide">
              СНАЧАЛА УПАКОВКА — ПОТОМ ТРАФИК
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-2 max-w-full -mt-10">
          <div className="w-full relative">
            <div className="p-8 md:p-12 relative z-10">
              <div className="space-y-6 text-white/90">
                <p className="text-base md:text-lg leading-relaxed text-center">
                  <strong className="text-white">Опасная иллюзия:</strong> многие эксперты/владельцы бизнеса уверены, что их предложение «упаковано».
                </p>
                
                <div className="pl-4">
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-center">
                    Чаще всего это лишь визуальный фасад:
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-center">
                    название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов – <span className="bg-white/20 px-2 py-1 rounded font-semibold text-white mt-4 inline-block">ЭТО НЕ <span className="relative inline-block">УПАКОВКА<span className="absolute top-1/2 left-0 h-0.5 bg-red-500 transform -translate-y-1/2 animate-strikethrough"></span></span>!</span>
                  </p>
                  
                  {/* Декоративная полоска после "ЭТО НЕ УПАКОВКА!" */}
                  <div className="w-full h-[3px] mt-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent blur-[3px] opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9580FF] to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                </div>
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