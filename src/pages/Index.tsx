import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChecklistPopup from "@/components/ChecklistPopup";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";
import { 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  AlertTriangle,
  Rocket,
  MessageSquare,
  Eye,
  Palette,
  Heart,
  Shield
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <SectionCard className="pt-20 md:pt-48 bg-gradient-hero text-white text-center">
        <h1 className="mobile-heading-scale md:text-6xl font-regular mb-4 md:mb-6 leading-tight">
          Управляйте впечатлением о своём бизнесе с <span className="font-demibold text-white">TapBlog</span>
        </h1>
        <p className="mobile-subheading-scale md:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          У вас есть менее 7 секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
        </p>
        <p className="text-base md:text-lg mb-8 md:mb-10 font-medium">
          И мы поможем использовать их в вашу пользу!
        </p>
        <Button 
          size="lg" 
          className="bg-white text-[#272727] rounded-xl px-4 md:px-5 py-3 shadow-md hover:bg-gray-50 transition-all duration-300 font-semibold touch-target text-sm md:text-base"
        >
          <Target className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          <span className="hidden sm:inline">Получить индивидуальное КП</span>
          <span className="sm:hidden">Получить КП</span>
        </Button>
      </SectionCard>

      {/* Strategic Packaging Section */}
      <SectionCard className="bg-gradient-hero text-white text-center">
        <h2 className="mobile-subheading-scale md:text-4xl font-regular mb-4 md:mb-6 px-2">
          <span className="font-demibold text-white">Стратегическая упаковка</span> — катализатор доверия и конверсии
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 px-2">
          Это основа, без которой продвижение теряет смысл, а вы – бюджет
        </p>
        <div className="bg-white/10 border border-white/25 rounded-lg p-4 md:p-6 mb-6 md:mb-8 max-w-2xl mx-auto">
          <h3 className="text-lg md:text-xl font-demibold text-white mb-2">
            <span className="font-demibold">СНАЧАЛА УПАКОВКА</span> — ПОТОМ ТРАФИК
          </h3>
        </div>

        <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-center space-y-3 md:space-y-0 md:space-x-4 text-left">
            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-300 mt-1 flex-shrink-0 mx-auto md:mx-0" />
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-demibold text-red-300 mb-3 md:mb-4">
                Опасная иллюзия
              </h3>
              <p className="text-white mb-3 md:mb-4 text-sm md:text-base">
                Многие эксперты/владельцы бизнеса уверены, что их предложение «упаковано».
              </p>
              <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
                Чаще всего это лишь визуальный фасад:
              </p>
              <p className="font-medium text-white text-sm md:text-base">
                название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов – ЭТО НЕ УПАКОВКА!
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Express Test Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-full">
          <div className="max-w-5xl mx-auto bg-gradient-telegram rounded-[16px] md:rounded-[24px] text-white shadow-large p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">ЭКСПРЕСС-ТЕСТ</h2>
            <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-8 space-y-4 md:space-y-0 md:space-x-4">
              <Eye className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-medium leading-tight max-w-2xl">
                Как понять, что ваше предложение не упаковано или упаковано плохо?
              </h3>
            </div>
            <p className="text-lg md:text-xl mb-6 md:mb-8 font-medium">
              Очень просто. Трафик есть, а продаж нет или они минимальны.
            </p>
            <p className="text-sm md:text-base opacity-75 mb-8 md:mb-10">
              *при условии адекватного профессионального трафик-менеджера
            </p>
            <Button 
              size="lg"
              className="backdrop-blur-[40px] bg-white/70 text-primary hover:bg-gray-100/60 transition-all duration-300 font-semibold px-8 md:px-10 py-4 md:py-5 h-auto text-base md:text-lg rounded-[34px] shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 md:w-6 md:h-6 mr-3" />
              Хочу мощную упаковку 🔥
            </Button>
          </div>
        </div>
      </section>

      {/* Real Packaging System */}
      <section className="py-8 md:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-4xl mx-auto">
            {/* Wisdom Style Header */}
            <div className="max-w-2xl mx-auto mb-8 md:mb-12">
              <div className="glass relative overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 rounded-[28px] p-6 md:p-8 shadow-[0_8px_32px_rgba(86,58,240,0.12)] hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_48px_rgba(86,58,240,0.18)]">
                {/* Multiple liquid glass layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/5 rounded-[28px] pointer-events-none"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-[27px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-accent/10 rounded-[28px] pointer-events-none"></div>
                
                <div className="relative z-10 text-center">
                  {/* Quote content */}
                  <h2 className="mobile-subheading-scale md:text-3xl font-medium text-foreground leading-relaxed">
                    <span className="font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Настоящая упаковка</span> — это система
                  </h2>
                </div>
                
                {/* Enhanced animated glow with multiple layers */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[30px] opacity-60 blur-md pointer-events-none animate-pulse"></div>
                <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-[29px] opacity-40 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Glass-morphism container */}
            <div className="relative backdrop-blur-[40px] bg-white/70 border border-white/20 rounded-[34px] p-6 md:p-8 shadow-2xl">
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-black/[0.01] rounded-[34px] pointer-events-none"></div>
              
              <div className="relative z-10 grid gap-4 md:gap-6">
                {[
                  {
                    icon: Target,
                    title: "Глубинная распаковка вашего продукта, УТП и анализ аудитории",
                    description: "Чтобы сформировать убийственный оффер, обнажить реальные боли клиентов, закрыть возражения и вызвать доверие"
                  },
                  {
                    icon: Star,
                    title: "Кристальное позиционирование, понятное даже школьнику",
                    description: "Почему именно ваш продукт необходим аудитории и как именно он решит их проблему?"
                  },
                  {
                    icon: TrendingUp,
                    title: "Продуманный путь клиента от А до Я",
                    description: "От первого клика по рекламе до оставления довольного отзыва о вашем продукте и рекомендаций вас знакомым — каждый шаг должен быть удобен, прост и понятен"
                  },
                  {
                    icon: MessageSquare,
                    title: "Осмысленный и целевой контент",
                    description: "Что, кому, как и зачем вы доносите? Какие задачи решает каждое слово в контенте?"
                  },
                  {
                    icon: Heart,
                    title: "Выраженный стиль коммуникации",
                    description: "Чтобы отстроиться от пресных конкурентов, показать аутентичность и привлечь своих"
                  },
                  {
                    icon: Palette,
                    title: "Визуальная идентичность",
                    description: "Не просто «красиво», а работающий дизайн, который доносит нужные смыслы, усиливает доверие и подводит к нужному действию"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative backdrop-blur-[40px] bg-neutral-100/60 border border-white/30 rounded-[34px] p-4 md:p-6 hover:bg-neutral-200/80 transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Dark overlay for color-dodge effect */}
                    <div className="absolute inset-0 bg-[#0F0F0F] rounded-[34px] pointer-events-none opacity-10 mix-blend-color-dodge"></div>
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-black/[0.01] rounded-[34px] pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4">
                      <div className="bg-success/20 backdrop-blur-sm p-2 md:p-3 rounded-full mx-auto md:mx-0 border border-success/30">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 mb-3">
                          <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                          <h3 className="font-semibold text-foreground leading-tight text-sm md:text-base">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative z-10 text-center mt-8 md:mt-12">
                <Button 
                  size="lg"
                  className="bg-gradient-telegram text-white hover:shadow-medium transition-smooth font-semibold px-6 md:px-8 py-4 md:py-6 h-auto touch-target text-sm md:text-base"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Заказать упаковку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - iOS 26 Liquid Glass Style */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center max-w-full relative">
          <div className="max-w-2xl mx-auto">
            {/* iOS Notification Style Card with enhanced liquid glass */}
            <div className="glass relative overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 rounded-[28px] p-6 md:p-8 shadow-[0_8px_32px_rgba(86,58,240,0.12)] hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_48px_rgba(86,58,240,0.18)]">
              {/* Multiple liquid glass layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/5 rounded-[28px] pointer-events-none"></div>
              <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-[27px] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-accent/10 rounded-[28px] pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* iOS style notification header */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-success to-accent rounded-full mr-2 opacity-90 animate-pulse"></div>
                  <p className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Мудрость</p>
                </div>
                
                {/* Quote content */}
                <blockquote className="text-lg md:text-2xl font-medium text-foreground leading-relaxed mb-4">
                  "У вас не будет <span className="font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">второго шанса</span> произвести первое впечатление"
                </blockquote>
                
                {/* Author attribution */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mr-3"></div>
                  <p className="text-sm font-medium text-muted-foreground">Коко Шанель</p>
                  <div className="w-8 h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-transparent ml-3"></div>
                </div>
              </div>
              
              {/* Enhanced animated glow with multiple layers */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[30px] opacity-60 blur-md pointer-events-none animate-pulse"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-[29px] opacity-40 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        {/* SVG-inspired glass morphism container */}
        <div 
          className="relative"
          style={{
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
        >
          {/* Background blur layer */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'black',
              opacity: 0.08,
              mixBlendMode: 'hard-light'
            }}
          ></div>
          
          {/* Color dodge layer */}
          <div 
            className="absolute inset-0"
            style={{
              background: '#0F0F0F',
              mixBlendMode: 'color-dodge'
            }}
          ></div>
          
          {/* Main content layer */}
          <div 
            className="relative"
            style={{
              background: '#FAFAFA',
              opacity: 0.7
            }}
          >
            {/* Subtle overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'black',
                opacity: 0.01
              }}
            ></div>
            
            <div className="container mx-auto px-4 md:px-6 text-center max-w-full relative z-10 text-foreground py-8 md:py-16">
              <h2 className="mobile-subheading-scale md:text-3xl font-regular mb-4 md:mb-6 px-2">
                ☝🏼 Мудрые учатся на чужих ошибках — забирайте <span className="font-demibold">оберег от слитого бюджета</span>
              </h2>
              <Card className="max-w-2xl mx-auto bg-white text-foreground shadow-large">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <Shield className="w-10 h-10 md:w-12 md:h-12 text-warning" />
                  </div>
                  <h3 className="text-lg md:text-xl font-regular mb-3 md:mb-4">
                    <span className="font-demibold">5 ошибок</span> в вашем Телеграм-канале, которые съедают более <span className="font-demibold">50% продаж</span>
                  </h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                    (разобрали на реальных примерах наших клиентов)
                  </p>
                  <Button 
                    size="lg"
                    className="bg-white text-[#272727] hover:bg-gray-100 transition-smooth font-semibold px-6 md:px-8 py-4 md:py-6 h-auto touch-target text-sm md:text-base"
                  >
                    <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Получить чек-лист бесплатно
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TapBlog Features */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large border-l-4 border-l-warning mb-6 md:mb-8">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-lg md:text-2xl font-regular text-center mb-4 md:mb-6">
                  Попытка сэкономить на упаковке или сделать её наскоро — <span className="font-demibold">гарантированно сольёт ваш бюджет впустую!</span>
                </h2>
              </CardContent>
            </Card>

            <div className="text-center mb-8 md:mb-12">
              <h2 className="mobile-subheading-scale md:text-4xl font-regular mb-4 md:mb-6 px-2">
                <span className="font-demibold">TapBlog</span> — готовое решение для системной упаковки и продажи ваших продуктов и услуг в Telegram
              </h2>
            </div>

            <div className="grid gap-3 md:gap-4 mb-8 md:mb-12">
              {[
                "Всё под ключ – от оформленного ТГ-канала с контент-стратегией до разработки web-app",
                "Продуманная и прозрачная воронка от первого клика по рекламному объявлению до денег в кассе",
                "WOW-эффект и яркое впечатление",
                "Увеличение лояльности и доверия, эмоциональная связь",
                "Гибкий функционал с внедрением ИИ – под ваши цели, задачи и потребности"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-warning mt-1 flex-shrink-0" />
                  <p className="text-foreground font-medium text-sm md:text-base">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-8 md:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="mobile-subheading-scale md:text-3xl font-regular text-center mb-8 md:mb-12 px-2">
              Кому подходит <span className="font-demibold">наша упаковка?</span>
            </h2>
            
            <div className="grid gap-3 md:gap-4 mb-8 md:mb-12">
              {[
                "экспертам и компаниям, продающим услуги и продукты",
                "брендам / онлайн-магазинам", 
                "сообществам / клубам",
                "авторам курсов / интенсивов / тренингов",
                "авторам тематических ТГ-каналов"
              ].map((audience, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0" />
                  <p className="text-foreground font-medium text-sm md:text-base">{audience}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-telegram text-white shadow-large">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-regular mb-3 md:mb-4">
                  <span className="font-demibold">УПАКОВКА</span> – ПЕРВЫЙ ШАГ, С КОТОРОГО НАЧИНАЮТСЯ ВАШИ ПРОДАЖИ.
                </h3>
                <p className="text-base md:text-lg font-semibold">
                  САМОЕ ВРЕМЯ ЕГО СДЕЛАТЬ 👇🏼
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
};

export default Index;