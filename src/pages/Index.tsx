import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import ChecklistPopup, { ChecklistCountdown } from "@/components/ChecklistPopup";
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
import { useState, useEffect } from "react";

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api || isPaused) return;

    const intervalId = setInterval(() => {
      const nextIndex = current >= count ? 0 : current;
      api.scrollTo(nextIndex);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [api, current, count, isPaused]);
  return (
    <div className="min-h-screen">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <SectionCard className="pt-20 md:pt-48 bg-transparent text-white text-center" data-hero>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative z-10 p-8 md:p-12">
            <h1 className="mobile-heading-scale md:text-6xl font-regular mb-4 md:mb-6 leading-tight text-foreground">
              Управляйте впечатлением о своём бизнесе с <span className="font-demibold text-foreground">TapBlog</span>
            </h1>
            <p className="mobile-subheading-scale md:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed text-foreground/90">
              У вас есть менее <ChecklistCountdown /> секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
            </p>
            <p className="text-base md:text-lg mb-8 md:mb-10 font-medium text-foreground/85">
              И мы поможем использовать их в вашу пользу!
            </p>
            
            {/* CTA Button with liquid glass */}
            <div className="relative inline-block">
              <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
              <Button 
                className="relative z-10 bg-transparent border-none hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3"
                icon={
                  <svg width="20" height="20" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                    <rect width="52" height="52" rx="26" fill="#6155F5"/>
                    <path d="M16.7363 26.0068C16.7363 26.516 16.7778 27.0168 16.8608 27.5093C16.9438 27.9963 17.0601 28.4666 17.2095 28.9204L15.7817 29.5181C15.5936 28.9647 15.4469 28.3947 15.3418 27.8081C15.2367 27.216 15.1841 26.6156 15.1841 26.0068C15.1841 25.3926 15.2339 24.7922 15.3335 24.2056C15.4386 23.6134 15.5853 23.0435 15.7734 22.4956L17.2095 23.0933C17.0545 23.547 16.9355 24.0174 16.8525 24.5044C16.7751 24.9914 16.7363 25.4922 16.7363 26.0068ZM21.833 17.7144C20.9421 18.1626 20.1424 18.7437 19.4341 19.4575C18.7257 20.1659 18.1502 20.9683 17.7075 21.8647L16.2964 21.2671C16.8221 20.1991 17.5111 19.2389 18.3633 18.3867C19.2155 17.5345 20.1756 16.8455 21.2437 16.3198L21.833 17.7144ZM25.9834 16.7432C25.4743 16.7432 24.9735 16.7847 24.481 16.8677C23.994 16.9451 23.5208 17.0614 23.0615 17.2163L22.4639 15.7969C23.0173 15.6032 23.59 15.4538 24.1821 15.3486C24.7743 15.2435 25.3747 15.1909 25.9834 15.1909C26.5977 15.1909 27.1981 15.2435 27.7847 15.3486C28.3768 15.4538 28.9468 15.6032 29.4946 15.7969L28.9136 17.2163C28.4543 17.0614 27.9784 16.9451 27.4858 16.8677C26.9989 16.7847 26.498 16.7432 25.9834 16.7432ZM34.2759 21.8564C33.8276 20.9544 33.2493 20.152 32.541 19.4492C31.8327 18.7409 31.0303 18.1626 30.1338 17.7144L30.7231 16.3032C31.7912 16.8345 32.7513 17.5262 33.6035 18.3784C34.4613 19.2306 35.1558 20.1935 35.687 21.2671L34.2759 21.8564ZM35.2554 26.0068C35.2554 25.4922 35.2139 24.9914 35.1309 24.5044C35.0534 24.0119 34.9399 23.5387 34.7905 23.085L36.2017 22.4873C36.3953 23.0407 36.5448 23.6134 36.6499 24.2056C36.755 24.7922 36.8076 25.3926 36.8076 26.0068C36.8076 26.6156 36.755 27.216 36.6499 27.8081C36.5448 28.4002 36.3953 28.973 36.2017 29.5264L34.7905 28.9287C34.9399 28.4749 35.0534 28.0018 35.1309 27.5093C35.2139 27.0168 35.2554 26.516 35.2554 26.0068ZM30.1338 34.291C31.0358 33.8483 31.841 33.2728 32.5493 32.5645C33.2576 31.8561 33.8359 31.0537 34.2842 30.1572L35.6787 30.7466C35.1585 31.8146 34.4696 32.7747 33.6118 33.627C32.7596 34.4792 31.7967 35.1709 30.7231 35.7021L30.1338 34.291ZM25.9917 35.2705C26.5008 35.2705 26.9989 35.229 27.4858 35.146C27.9728 35.0685 28.446 34.9551 28.9053 34.8057L29.5029 36.2251C28.9495 36.4132 28.3796 36.5571 27.793 36.6567C27.2064 36.7619 26.606 36.8145 25.9917 36.8145C25.383 36.8145 24.7826 36.7619 24.1904 36.6567C23.5983 36.5516 23.0256 36.4049 22.4722 36.2168L23.0615 34.7891C23.5208 34.9495 23.994 35.0685 24.481 35.146C24.9735 35.229 25.4771 35.2705 25.9917 35.2705ZM17.7158 30.1572C18.1585 31.0482 18.7313 31.8478 19.4341 32.5562C20.1424 33.2645 20.9421 33.84 21.833 34.2827L21.252 35.6938C20.1784 35.1681 19.2155 34.4792 18.3633 33.627C17.5166 32.7747 16.8276 31.8146 16.2964 30.7466L17.7158 30.1572Z" fill="white"/>
                  </svg>
                }
              >
                <span className="hidden sm:inline">Получить индивидуальное КП</span>
                <span className="sm:hidden">Получить КП</span>
              </Button>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Strategic Packaging Section */}
      <SectionCard className="bg-transparent text-white">
        <div className="relative max-w-5xl mx-auto">
          {/* iOS 26 Liquid Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
          <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
          <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-4 md:mb-8">
              <h2 className="mobile-subheading-scale md:text-4xl font-bold mb-4 md:mb-6 px-2 text-foreground">
                <span className="font-bold text-foreground">Стратегическая упаковка</span> — катализатор доверия и конверсии
              </h2>
              <p className="text-lg md:text-xl mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed text-foreground/85 px-2">
                Это основа, без которой продвижение теряет смысл, а вы – бюджет
              </p>
              
              {/* Key principle highlight */}
              <div className="max-w-2xl mx-auto mb-4 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  <span className="font-bold">СНАЧАЛА УПАКОВКА</span> — ПОТОМ ТРАФИК
                </h3>
              </div>
            </div>

            {/* Warning Block */}
            <div className="relative max-w-4xl mx-auto">
              {/* Inner liquid glass container for warning */}
              <div className="relative">
                <div className="absolute inset-0 backdrop-blur-[60px] bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-[32px] border border-white/25"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[31px]"></div>
                
                <div className="relative z-10 p-6 md:p-10">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    {/* Warning icon with liquid glass */}
                    <div className="relative flex-shrink-0 mb-4 mt-6">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <div className="absolute inset-0 backdrop-blur-[40px] bg-white/20 rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                        <div className="absolute inset-[2px] bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-full"></div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                          <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                        Опасная иллюзия
                      </h3>
                      
                      <div className="space-y-4">
                        <p className="text-foreground/85 text-lg md:text-xl leading-relaxed font-medium">
                          Многие эксперты/владельцы бизнеса уверены, что их предложение «упаковано».
                        </p>
                        
                        {/* Enhanced final statement with nested liquid glass */}
                        <div className="relative">
                          <div className="absolute inset-0 backdrop-blur-[40px] bg-white/15 rounded-2xl border border-white/20"></div>
                          <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 via-transparent to-white/5 rounded-[15px]"></div>
                          <div className="relative z-10 p-5">
                            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-3">
                              Чаще всего это лишь визуальный фасад:
                            </p>
                            <p className="font-bold text-foreground text-base md:text-lg leading-relaxed">
                              Название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов – 
                              <span className="block mt-2 text-xl md:text-2xl font-black text-foreground">
                                ЭТО НЕ УПАКОВКА!
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Express Test Section */}
      <SectionCard className="py-6 md:py-16 bg-transparent text-white">
        <div className="container mx-auto px-4 md:px-12 max-w-full">
          <div className="relative max-w-3xl mx-auto">
            {/* iOS 26 Liquid Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
            
            <div className="relative z-10 text-foreground p-6 md:p-12 text-center aspect-square flex flex-col justify-center">
              {/* Express Test Title */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-8">
                {/* Express Stamp - smaller with continuous animation */}
                <div className="relative inline-block">
                  <div className="relative [transform-origin:center] will-change-transform transform-gpu backface-hidden animate-[swing_3s_ease-in-out_infinite]"
                       style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
                    <div className="font-black text-xl md:text-3xl text-foreground tracking-wider uppercase">
                      EXPRESS
                    </div>
                  </div>
                </div>
                
                <span className="text-xl md:text-3xl font-bold text-foreground/80">-</span>
               
                <h2 className="text-xl md:text-3xl font-bold">ТЕСТ</h2>
              </div>
              <div className="flex flex-col items-center justify-center mb-4 md:mb-8 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-2xl font-medium leading-tight max-w-xl px-2">
                  Как понять, что ваше предложение не упаковано или упаковано плохо?
                </h3>
              </div>
              <p className="text-base md:text-xl mb-4 md:mb-8 font-medium px-2">
                Очень просто. Трафик есть, а продаж нет или они минимальны.
              </p>
              <p className="text-xs md:text-base opacity-75 mb-6 md:mb-10 px-2">
                *при условии адекватного профессионального трафик-менеджера
              </p>
              {/* CTA Button with liquid glass */}
              <div className="relative inline-block">
                <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[15px]"></div>
                <Button 
                  className="relative z-10 bg-transparent border-none hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 flex items-center gap-2"
                  icon={<Zap className="w-4 h-4 md:w-6 md:h-6" />}
                >
                  Хочу мощную упаковку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Real Packaging System */}
      <SectionCard className="py-8 md:py-16 bg-transparent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="relative max-w-4xl mx-auto">
            {/* iOS 26 Liquid Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
            
            <div className="relative z-10 p-6 md:p-8">
              {/* Wisdom Style Header */}
              <div className="max-w-2xl mx-auto mb-8 md:mb-12">
                <div className="text-center">
                  {/* Quote content */}
                  <h2 className="mobile-subheading-scale md:text-3xl font-medium text-foreground leading-relaxed">
                    <span className="font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Настоящая упаковка</span> — это система
                  </h2>
                </div>
              </div>
              
              {/* Container without frame */}
              <div className="relative p-6 md:p-8">
                 <div className="relative z-10">
                   <Carousel 
                     setApi={setApi} 
                     className="w-full max-w-5xl mx-auto"
                     onMouseEnter={() => setIsPaused(true)}
                     onMouseLeave={() => setIsPaused(false)}
                     onTouchStart={() => setIsPaused(true)}
                     onTouchEnd={() => setIsPaused(false)}
                   >
                     <CarouselContent className="-ml-2 md:-ml-4">
                      {[
                        {
                          title: "Глубинная распаковка вашего продукта, УТП и анализ аудитории",
                          description: "Чтобы сформировать убийственный оффер, обнажить реальные боли клиентов, закрыть возражения и вызвать доверие"
                        },
                        {
                          title: "Кристальное позиционирование, понятное даже школьнику",
                          description: "Почему именно ваш продукт необходим аудитории и как именно он решит их проблему?"
                        },
                        {
                          title: "Продуманный путь клиента от А до Я",
                          description: "От первого клика по рекламе до оставления довольного отзыва о вашем продукте и рекомендаций вас знакомым — каждый шаг должен быть удобен, прост и понятен"
                        },
                        {
                          title: "Осмысленный и целевой контент",
                          description: "Что, кому, как и зачем вы доносите? Какие задачи решает каждое слово в контенте?"
                        },
                        {
                          title: "Выраженный стиль коммуникации",
                          description: "Чтобы отстроиться от пресных конкурентов, показать аутентичность и привлечь своих"
                        },
                        {
                          title: "Визуальная идентичность",
                          description: "Не просто «красиво», а работающий дизайн, который доносит нужные смыслы, усиливает доверие и подводит к нужному действию"
                        }
                      ].map((item, index) => (
                         <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                           <div className="relative overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 rounded-[20px] p-4 md:p-5 shadow-none hover:bg-white/25 transition-all duration-300 hover:scale-[1.01] h-[280px] md:h-[320px] flex flex-col">
                             <div className="relative z-10 flex flex-col h-full text-center justify-between">
                               <h3 className="font-bold text-foreground leading-tight mb-2 text-base md:text-lg lg:text-xl">
                                 {item.title}
                               </h3>
                               <p className="text-muted-foreground leading-relaxed flex-1 flex items-center justify-center text-sm md:text-base lg:text-lg overflow-hidden">
                                 {item.description}
                               </p>
                             </div>
                           </div>
                         </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 border-white/30 hover:bg-white/90" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white/80 border-white/30 hover:bg-white/90" />
                   </Carousel>

                   {/* Carousel Indicators */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                      {Array.from({ length: count }).map((_, index) => (
                         <button
                           key={index}
                           onClick={() => api?.scrollTo(index)}
                           className={`transition-all duration-300 ${
                             current === index + 1 
                               ? 'w-6 h-2 rounded-full bg-primary' 
                               : 'w-2 h-2 rounded-full bg-primary/60'
                           }`}
                           aria-label={`Перейти к слайду ${index + 1}`}
                         />
                      ))}
                    </div>
                 </div>
                 
                 <div className="relative z-10 text-center mt-8 md:mt-12">
                  {/* CTA Button with liquid glass */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[15px]"></div>
                    <Button 
                      className="relative z-10 bg-transparent border-none hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3"
                      icon={<Rocket className="w-4 h-4 md:w-5 md:h-5" />}
                    >
                      Заказать упаковку
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Quote Section - iOS 26 Liquid Glass Style */}
      <SectionCard className="py-4 md:py-8 bg-transparent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-full relative">
          <div className="relative max-w-md mx-auto">
            {/* iOS 26 Liquid Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
            
            <div className="relative z-10 p-4 md:p-6">
              {/* Quote content */}
              <div className="text-center">
                {/* iOS style notification header */}
                <div className="flex items-center justify-center mb-3">
                  <div className="w-2 h-2 rounded-full mr-2 opacity-90 animate-pulse bg-primary"></div>
                  <p className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Мудрость</p>
                </div>
                
                {/* Quote content */}
                <blockquote className="text-base md:text-xl font-medium text-foreground leading-relaxed mb-3">
                  "У вас не будет <span className="font-semibold text-primary">второго шанса</span> произвести первое впечатление"
                </blockquote>
                
                {/* Author attribution */}
                <div className="flex items-center justify-center">
                  <div className="w-6 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mr-2"></div>
                  <p className="text-sm font-medium text-foreground/70">Коко Шанель</p>
                  <div className="w-6 h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Checklist Section */}
      <SectionCard className="pt-6 md:pt-16 pb-3 md:pb-14 bg-transparent text-white">
        <div className="container mx-auto px-3 md:px-6 text-center max-w-full relative">
          <div className="relative max-w-lg md:max-w-2xl mx-auto">
            {/* iOS 26 Liquid Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
            
            <div className="relative z-10 p-5 md:p-8 text-foreground">
              <h2 className="text-xl md:text-3xl font-regular mb-4 md:mb-6 px-1 md:px-2 leading-tight">
                Мудрые учатся на чужих ошибках — забирайте <span className="font-demibold">оберег от слитого бюджета</span>
              </h2>
              
              {/* Inner checklist card with nested liquid glass */}
              <div className="max-w-lg md:max-w-2xl mx-auto relative">
                <div className="relative">
                  <div className="absolute inset-0 backdrop-blur-[60px] bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-[32px] border border-white/25"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[31px]"></div>
                  
                  <div className="relative z-10 p-5 md:p-8">
                    <h3 className="text-base md:text-xl font-regular mb-3 md:mb-4 leading-snug">
                      <span className="font-demibold">5 ошибок</span> в вашем Телеграм-канале, которые съедают более <span className="font-demibold">50% продаж</span>
                    </h3>
                    <p className="mb-4 md:mb-6 text-xs md:text-base text-foreground/80">
                      (разобрали на реальных примерах наших клиентов)
                    </p>
                    
                    {/* CTA Button with liquid glass */}
                    <div className="relative inline-block">
                      <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[15px]"></div>
                      <Button 
                        className="relative z-10 bg-transparent border-none hover:bg-white/10 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-300"
                      >
                        <span className="whitespace-nowrap">Получить чек-лист бесплатно</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* TapBlog Features */}
      <SectionCard className="py-8 md:py-16 bg-transparent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="relative max-w-4xl mx-auto">
            {/* iOS 26 Liquid Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
            
            <div className="relative z-10 p-6 md:p-8 text-foreground">
              <div className="mb-6 md:mb-8">
                <h2 className="text-lg md:text-2xl font-regular text-center mb-4 md:mb-6">
                  Попытка сэкономить на упаковке или сделать её наскоро — <span className="font-demibold">гарантированно сольёт ваш бюджет впустую!</span>
                </h2>
              </div>

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
        </div>
      </SectionCard>

      {/* Target Audience */}
      <SectionCard className="py-8 md:py-16 bg-transparent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="relative max-w-3xl mx-auto">
            {/* iOS 26 Liquid Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/30 via-white/10 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[40px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
            
            <div className="relative z-10 p-6 md:p-8 text-foreground">
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

              {/* Call to action card with nested liquid glass */}
              <div className="relative">
                <div className="absolute inset-0 backdrop-blur-[60px] bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-[32px] border border-white/25"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[31px]"></div>
                
                <div className="relative z-10 p-6 md:p-8 text-center">
                  <h3 className="text-lg md:text-xl font-regular mb-3 md:mb-4 text-foreground">
                    <span className="font-demibold">УПАКОВКА</span> – ПЕРВЫЙ ШАГ, С КОТОРОГО НАЧИНАЮТСЯ ВАШИ ПРОДАЖИ.
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-foreground">
                    САМОЕ ВРЕМЯ ЕГО СДЕЛАТЬ 👇🏼
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
};

export default Index;