import { Button } from "@/components/ui/button";
import ChecklistPopup from "@/components/ChecklistPopup";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
const Index = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isTargetSectionInView, setIsTargetSectionInView] = useState(false);
  const [hasTargetAnimationPlayed, setHasTargetAnimationPlayed] = useState(false);
  const sectionRef = useRef(null);
  const targetSectionRef = useRef(null);
  const timerRef = useRef(null);
  const carouselData = [{
    title: "Глубинная распаковка вашего продукта, УТП и анализ аудитории",
    description: "Чтобы сформировать убийственный оффер, обнажить реальные боли клиентов, закрыть возражения и вызвать доверие"
  }, {
    title: "✔️ Кристальное позиционирование, понятное даже школьнику",
    description: "Почему именно ваш продукт необходим аудитории и как именно он решит их проблему?"
  }, {
    title: "Продуманный путь клиента от А до Я",
    description: "От первого клика по рекламе до оставления довольного отзыва о вашем продукте и рекомендаций вас знакомым — каждый шаг должен быть удобен, прост и понятен"
  }, {
    title: "Осмысленный и целевой контент",
    description: "Что, кому, как и зачем вы доносите? Какие задачи решает каждое слово в контенте?"
  }, {
    title: "Выраженный стиль коммуникации",
    description: "Чтобы отстроиться от пресных конкурентов, показать аутентичность и привлечь своих"
  }, {
    title: "Визуальная идентичность",
    description: "Не просто «красиво», а работающий дизайн, который доносит нужные смыслы, усиливает доверие и подводит к нужному действию"
  }];
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      // Сбрасываем таймер при ручном переключении
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      startAutoPlay();
    });
  }, [api]);

  // Intersection Observer для отслеживания видимости блока карусели
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Intersection Observer для отслеживания видимости блока целевой аудитории
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTargetAnimationPlayed) {
        setIsTargetSectionInView(true);
        setHasTargetAnimationPlayed(true);
      }
    }, {
      threshold: 0.3
    });
    if (targetSectionRef.current) {
      observer.observe(targetSectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasTargetAnimationPlayed]);

  // Автопролистывание
  const startAutoPlay = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (isInView && api) {
      timerRef.current = setTimeout(() => {
        const nextSlide = (current + 1) % count;
        api.scrollTo(nextSlide);
      }, 5000);
    }
  };
  useEffect(() => {
    if (isInView && api && count > 0) {
      startAutoPlay();
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isInView, api, current, count]);
  const goToSlide = index => {
    if (api) {
      api.scrollTo(index);
    }
  };
  return <div className="min-h-screen w-full fixed inset-0 bg-transparent">
      <div className="relative z-10 min-h-screen overflow-y-auto">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-0 w-full flex items-center justify-center" data-hero>
        <div className="container mx-auto px-6 max-w-full">
          <div className="max-w-lg mx-auto relative">
            <div className="backdrop-blur-[40px] bg-white/10 p-8 md:p-12 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative z-10 text-center rounded-3xl py-[199px]">
            
            {/* Background Owl for the entire card */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <svg width="200" height="140" viewBox="0 0 290 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M196.109 198.666C181.674 199.667 163.543 200.071 145 199.99C126.458 200.071 108.326 199.667 93.8912 198.666C66.0209 196.734 55.397 195.101 47.949 191.604C35.2538 185.642 24.7049 171.346 22.4237 157.009C21.5685 151.629 21.2866 151.356 15.8338 150.626C11.6501 150.064 8.99851 148.619 5.8431 145.178C2.07348 141.065 1.42527 139.187 0.548235 129.824C-0.887163 114.517 0.632665 93.3634 3.51844 88.4804C5.93302 84.3938 11.4975 80.9714 17.8588 79.6591C20.4627 79.1214 21.7088 77.8459 22.244 75.1641C22.6567 73.1044 25.5124 57.9421 28.593 41.4702C31.6734 24.9984 34.9093 9.07105 35.7835 6.07618C36.7333 2.82467 39.6589 0.546116 43.0452 0.420409L48.2649 0.226628C48.8239 0.205945 49.3636 0.185291 49.885 0.16535C56.9614 -0.105366 60.6407 -0.246105 63.0942 1.41836C65.7513 3.22089 66.971 7.14056 69.5115 15.3051C69.6844 15.8604 69.8633 16.4353 70.0492 17.0306L74.9547 32.7334L99.7432 31.6565C115.214 30.9841 129.735 30.6428 144.356 30.6323C144.594 30.6322 144.833 30.6321 145.071 30.6321C145.262 30.6321 145.453 30.6322 145.644 30.6323C160.265 30.6428 174.786 30.9841 190.257 31.6565L215.045 32.7334L219.951 17.0306C220.137 16.4353 220.316 15.8604 220.488 15.3051C223.029 7.14055 224.249 3.22089 226.906 1.41836C229.359 -0.246105 233.039 -0.105366 240.115 0.16535C240.637 0.185291 241.177 0.205945 241.736 0.226628L246.955 0.420388C250.341 0.546096 253.266 2.82467 254.216 6.07618C255.091 9.07105 258.326 24.9984 261.407 41.4702C264.488 57.9421 267.344 73.1043 267.757 75.1641C268.291 77.8458 269.538 79.1214 272.141 79.6591C278.503 80.9714 284.067 84.3937 286.481 88.4804C289.367 93.3634 290.887 114.517 289.452 129.824C288.575 139.187 287.927 141.065 284.157 145.178C281.001 148.619 278.35 150.064 274.166 150.626C268.713 151.356 268.432 151.629 267.576 157.009C265.295 171.346 254.746 185.642 242.051 191.604C234.603 195.101 223.98 196.734 196.109 198.666Z" fill="currentColor"/>
              </svg>
            </div>
            
            <h1 className="text-xl md:text-3xl font-bold mb-4 leading-tight text-white relative z-10">
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
            <div className="relative inline-block mx-auto rounded-none">
              <Button variant="glass-breath" style={{
                  backgroundColor: 'rgba(255,255,255,0.18)'
                }} className="transition-all duration-300 h-12 rounded-2xl md:text-base font-regular py-0 my-0 mx-px px-0 text-xs">
                <span className="hidden sm:inline">Получить индивидуальное КП</span>
                <span className="sm:hidden">Получить индивидуальное
 предложение</span>
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
        
        {/* LED MARQUEE – адаптированный под палитру */}
        <div className="led-wrap">
          <div className="led-box">
            <div className="led-panel">
              <div className="led-track">
                <span className="led-msg">СНАЧАЛА УПАКОВКА — ПОТОМ ТРАФИК •&nbsp;</span>
                <span className="led-msg" aria-hidden="true">СНАЧАЛА УПАКОВКА — ПОТОМ ТРАФИК •&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-2 max-w-full" style={{
          marginTop: '-10px'
        }}>
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
                    название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов –
                  </p>
                  <div className="text-center mt-4">
                    <span className="bg-white/20 px-2 py-1 rounded font-semibold text-white inline-block relative">
                      ЭТО НЕ УПАКОВКА!
                      <span className="absolute left-0 top-1/2 h-0.5 bg-pink-500 pointer-events-none animate-strike-horizontal" style={{
                        transform: 'translateY(-50%)',
                        width: '0%'
                      }}></span>
                    </span>
                  </div>
                  
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

      {/* Express Test Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-full">
          <SectionCard className="bg-white/10 border-white/20">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                ЭКСПРЕСС-ТЕСТ
              </h2>
              
              <h3 className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Как понять, что ваше предложение не упаковано или упаковано плохо?
              </h3>
              
              <p className="text-base md:text-lg text-white mb-4 leading-relaxed">
                Очень просто. Трафик есть, а продаж нет или они минимальны.
              </p>
              
              <p className="text-sm text-white/70 mb-8 italic">
                *при условии адекватного профессионального трафик-менеджера
              </p>
              
              <Button variant="glass-breath" className="transition-all duration-300 h-12 px-6 py-3 rounded-2xl text-sm md:text-base" style={{
                backgroundColor: 'rgba(255,255,255,0.18)'
              }}>
                🚀 Хочу мощную упаковку
              </Button>
            </div>
          </SectionCard>
        </div>
      </section>

      {/* System Section */}
      <section ref={sectionRef} className="py-8">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center mb-8">
            {/* Декоративная полоска сверху */}
            <div className="w-full h-[3px] mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9580FF] to-transparent opacity-70"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Настоящая упаковка — это система:
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {carouselData.map((item, index) => <CarouselItem key={index}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 h-full">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
              
              {/* Индикатор точек */}
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({
                  length: count
                }).map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`} aria-label={`Перейти к слайду ${index + 1}`} />)}
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="glass-breath" className="transition-all duration-300 h-12 px-6 py-3 rounded-2xl text-sm md:text-base" style={{
                backgroundColor: 'rgba(255,255,255,0.18)'
              }}>
                Заказать упаковку
              </Button>
            </div>
            
            {/* Декоративная полоска снизу */}
            <div className="w-full h-[3px] mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent blur-[3px] opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9580FF] to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-full">
          <SectionCard className="bg-white/10 border-white/20">
            <div className="text-center">
              <blockquote className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight italic">
                «У вас не будет второго шанса произвести первое впечатление»
              </blockquote>
              
              <cite className="text-base md:text-lg text-white/80 not-italic">
                ©️Коко Шанель
              </cite>
            </div>
          </SectionCard>
        </div>
      </section>

      {/* Protection Section */}
      <section className="pt-2 pb-8">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Мудрые учатся на чужих ошибках — забирайте оберег от слитого бюджета
            </h3>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              5 ошибок в вашем Телеграм-канале, которые съедают более 50% продаж (разобрали на реальных примерах наших клиентов)
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section ref={targetSectionRef} className="py-8">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Кому подходит наша упаковка?
            </h2>
            
            <div className="space-y-4 max-w-3xl mx-auto mb-12">
              {["экспертам и компаниям, продающим услуги и продукты", "брендам / онлайн-магазинам", "сообществам / клубам", "авторам курсов / интенсивов / тренингов", "авторам тематических ТГ-каналов"].map((text, index) => <div key={index} className={`transition-all duration-700 ease-out ${hasTargetAnimationPlayed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'}`} style={{
                transitionDelay: hasTargetAnimationPlayed ? `${index * 150}ms` : '0ms'
              }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#7962F4] to-[#9580FF] rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white text-sm md:text-base font-medium group-hover:text-white/90 transition-colors duration-300">
                        {text}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg md:text-xl font-bold text-white tracking-wide">
                УПАКОВКА – ПЕРВЫЙ ШАГ, С КОТОРОГО НАЧИНАЮТСЯ ВАШИ ПРОДАЖИ.
              </p>
              <p className="text-lg md:text-xl font-bold text-white tracking-wide">
                САМОЕ ВРЕМЯ ЕГО СДЕЛАТЬ
              </p>
            </div>
            
            <div className="mb-8">
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                Запишитесь на бесплатную консультацию — составим индивидуальный план вашей упаковки в ТГ и подготовим ваш бизнес к запуску трафика
              </p>
              
              {/* Стрелка вниз */}
              <div className="flex justify-center">
                <div className="animate-bounce">
                  <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <div className="-mt-20 pb-0">
        <ConsultationForm />
      </div>
      </div>
    </div>;
};
export default Index;