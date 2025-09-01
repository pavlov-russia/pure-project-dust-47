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
      
      {/* Strategy Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto px-6 max-w-full">
          <div className="max-w-lg mx-auto relative">
            <div className="backdrop-blur-[40px] bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative z-10">
              <h2 className="text-lg md:text-3xl font-bold text-white mb-4 text-center leading-tight">
                Стратегическая упаковка — катализатор доверия и конверсии
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 text-center mb-8 leading-relaxed">
                Это основа, без которой продвижение теряет смысл, а вы – бюджет
              </p>
              
              <div className="bg-white/15 rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-center text-white font-semibold text-lg tracking-wide">
                  СНАЧАЛА УПАКОВКА — ПОТОМ ТРАФИК
                </p>
              </div>
              
              <div className="space-y-6 text-white/90">
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="text-red-300">‼️</span> <strong className="text-white">Опасная иллюзия:</strong> многие эксперты/владельцы бизнеса уверены, что их предложение «упаковано».
                </p>
                
                <div className="pl-4 border-l-2 border-white/30">
                  <p className="text-base md:text-lg leading-relaxed mb-4">
                    Чаще всего это лишь визуальный фасад:
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов – <span className="bg-white/20 px-2 py-1 rounded font-semibold text-white">ЭТО НЕ УПАКОВКА!</span>
                  </p>
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