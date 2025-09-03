import { Button } from "@/components/ui/button";
import ChecklistPopup from "@/components/ChecklistPopup";
import AnimatedCountdown from "@/components/AnimatedCountdown";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";
import HandwritingAnimation from "@/components/HandwritingAnimation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  // All state declarations together
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isTargetSectionInView, setIsTargetSectionInView] = useState(false);
  const [hasTargetAnimationPlayed, setHasTargetAnimationPlayed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasCountdownRun, setHasCountdownRun] = useState(false);
  const [freezeCountdown, setFreezeCountdown] = useState(false);
  const [completedAnimations, setCompletedAnimations] = useState(0);
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
      <ChecklistPopup isOpen={isPopupOpen} onClose={() => { setIsPopupOpen(false); setFreezeCountdown(true); }} />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-0 w-full flex items-center justify-center bg-gradient-to-b from-[#563AF0] to-white" data-hero>
        <div className="container mx-auto px-6 max-w-full">
          <div className="max-w-lg mx-auto relative">
            <div className="backdrop-blur-[40px] bg-white/10 p-8 md:p-12 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative z-10 text-center rounded-3xl py-[199px]">
            
            {/* Background Owl - positioned randomly with rotation */}
            <div className="absolute top-8 right-4 opacity-8 pointer-events-none transform rotate-12">
              <style>{`
                @keyframes wink {
                  0%, 85%, 100% { transform: scaleY(1); }
                  90%, 95% { transform: scaleY(0.1); }
                }
                .winking-eye {
                  animation: wink 3s infinite;
                  transform-origin: center;
                  transform-box: fill-box;
                }
                .btn-grab {
                  display: inline-block;
                  transition: all 0.2s ease;
                  filter: brightness(1);
                  will-change: transform, filter;
                  animation: grab-pulse 2s ease-in-out infinite;
                }
                .btn-grab:active {
                  transform: scale(0.94);
                  filter: brightness(1.2) saturate(1.3);
                }
                @keyframes grab-pulse {
                  0%, 100% { 
                    filter: brightness(1) saturate(1);
                    transform: scale(1);
                  }
                  50% { 
                    filter: brightness(1.15) saturate(1.3);
                    transform: scale(1.06);
                  }
                }
              `}</style>
              <svg width="160" height="110" viewBox="0 0 288 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_25_18)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M194.414 196.841C180.105 197.833 162.129 198.233 143.747 198.153C125.365 198.233 107.39 197.833 93.08 196.841C65.4504 194.927 54.9184 193.309 47.5347 189.844C34.9492 183.937 24.4914 169.772 22.23 155.567C21.3821 150.236 21.1027 149.966 15.6969 149.242C11.5494 148.686 8.92077 147.254 5.79261 143.844C2.05556 139.769 1.41295 137.908 0.543498 128.631C-0.879498 113.465 0.627199 92.5058 3.48804 87.6676C5.88176 83.6185 11.3982 80.2276 17.7045 78.9273C20.2859 78.3946 21.5212 77.1308 22.0518 74.4736C22.4609 72.4329 25.292 57.4098 28.3459 41.0893C31.3998 24.7688 34.6076 8.98773 35.4744 6.02036C36.416 2.79872 39.3162 0.541104 42.6733 0.416547L47.8479 0.224545C48.4021 0.204053 48.9371 0.183589 49.4539 0.163831C56.4693 -0.104398 60.1167 -0.243845 62.549 1.40533C65.1832 3.1913 66.3923 7.07497 68.911 15.1645C69.0823 15.7147 69.2597 16.2844 69.444 16.8742L74.307 32.4327L98.8813 31.3658C114.219 30.6996 128.614 30.3614 143.109 30.3509C143.345 30.3508 143.581 30.3508 143.817 30.3508C144.007 30.3508 144.196 30.3508 144.386 30.3509C158.88 30.3614 173.276 30.6996 188.613 31.3658L213.187 32.4327L218.05 16.8742C218.235 16.2844 218.412 15.7147 218.583 15.1645C221.102 7.07496 222.311 3.1913 224.945 1.40533C227.378 -0.243845 231.025 -0.104398 238.041 0.163831C238.557 0.183589 239.092 0.204053 239.647 0.224545L244.821 0.416526C248.178 0.541084 251.078 2.79872 252.02 6.02036C252.887 8.98773 256.095 24.7688 259.149 41.0893C262.202 57.4098 265.034 72.4329 265.443 74.4736C265.973 77.1307 267.209 78.3946 269.79 78.9273C276.096 80.2276 281.613 83.6185 284.006 87.6676C286.867 92.5058 288.374 113.465 286.951 128.631C286.081 137.908 285.439 139.769 281.702 143.844C278.574 147.254 275.945 148.686 271.798 149.242C266.392 149.966 266.112 150.236 265.264 155.567C263.003 169.772 252.545 183.937 239.96 189.844C232.576 193.309 222.044 194.927 194.414 196.841Z" fill="#563AF0"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M36.2764 85.2716C36.2764 68.169 49.1623 53.7872 66.2286 51.8422L81.8674 50.0598C97.9126 48.2312 111.979 60.7241 111.979 76.8034V88.3512C111.979 93.5544 116.215 97.7725 121.442 97.7725H166.052C171.278 97.7725 175.515 93.5544 175.515 88.3512V76.8035C175.515 60.7242 189.581 48.2313 205.626 50.06L221.265 51.8423C238.331 53.7873 251.217 68.1691 251.217 85.2717V143.62C251.217 160.273 238.982 174.421 222.441 176.894L206.567 179.268C190.219 181.712 175.515 169.107 175.515 152.648V137.885C175.515 129.373 165.077 125.225 159.19 131.397L150.38 140.635C146.736 144.455 140.653 144.558 136.881 140.862L128.079 132.239C122.096 126.377 111.979 130.597 111.979 138.954V152.648C111.979 169.107 97.2747 181.712 80.9268 179.268L65.0528 176.894C48.5118 174.421 36.2764 160.273 36.2764 143.62V85.2716Z" fill="white"/>
                  {/* Left eye with winking animation */}
                  <path className="winking-eye" d="M85.2569 114.502C85.2569 123.393 79.7753 130.6 73.0135 130.6C66.2516 130.6 60.77 123.393 60.77 114.502C60.77 105.612 66.2516 98.4043 73.0135 98.4043C79.7753 98.4043 85.2569 105.612 85.2569 114.502Z" fill="#563AF0"/>
                  {/* Right eye - static */}
                  <path d="M225.374 114.497C225.374 123.388 219.993 130.595 213.357 130.595C206.72 130.595 201.34 123.388 201.34 114.497C201.34 105.607 206.72 98.3994 213.357 98.3994C219.993 98.3994 225.374 105.607 225.374 114.497Z" fill="#563AF0"/>
                </g>
                <defs>
                  <clipPath id="clip0_25_18">
                    <rect width="288" height="199" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-xl md:text-3xl font-bold mb-4 leading-tight text-white relative z-10">
                Управляйте впечатлением о своём бизнесе с{" "}
                <span className="font-bold text-white">TapBlog</span>
              </h1>
              
              <p className="text-sm md:text-base mb-6 leading-relaxed text-white/90 max-w-md mx-auto">
                У вас есть менее <AnimatedCountdown active={!hasCountdownRun} frozen={freezeCountdown} onComplete={() => { setHasCountdownRun(true); setIsPopupOpen(true); }} /> секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
              </p>
              
              <p className="text-sm md:text-base mb-8 font-semibold text-white leading-relaxed">
                И мы поможем использовать их в вашу пользу!
              </p>
            </div>
            
            {/* CTA Button positioned at bottom with minimal margins */}
            <div className="absolute inset-x-[14px] bottom-4">
              <Button variant="glass-breath" style={{
                  backgroundColor: 'rgba(255,255,255,0.18)'
                }} className="w-full transition-all duration-300 h-12 rounded-2xl md:text-base font-regular text-xs">
                Получить индивидуальное предложение
              </Button>
            </div>
          </div>
          </div>
        </div>
      </section>
      
      {/* Strategy Section */}
      <section className="py-8 bg-white relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="1486" height="1080" viewBox="0 0 1486 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 w-full h-full object-cover" style={{ transform: 'translateX(50%)' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M231 -220.162C231 -264.807 194.712 -301 149.947 -301L81.0527 -301C36.2885 -301 -6.32811e-06 -264.807 -1.41342e-05 -220.162L-2.61483e-05 -151.449C-3.39544e-05 -106.803 36.2885 -70.6108 81.0526 -70.6108L149.947 -70.6108C194.711 -70.6108 231 -34.4182 231 10.2275L231 70.8563C231 115.502 267.288 151.695 312.053 151.695L372.842 151.695C417.606 151.695 453.895 187.887 453.895 232.533L453.895 293.162C453.895 337.807 490.183 374 534.947 374L603.842 374C648.606 374 684.895 337.807 684.895 293.162L684.895 224.449C684.895 179.803 648.606 143.611 603.842 143.611L543.053 143.611C498.289 143.611 462 107.418 462 62.7725L462 10.2276C462 -34.4182 498.289 -70.6107 543.053 -70.6107L611.947 -70.6107C656.712 -70.6107 693 -106.803 693 -151.449L693 -220.162C693 -264.807 656.712 -301 611.947 -301L543.053 -301C498.289 -301 462 -264.807 462 -220.162L462 -159.533C462 -114.887 425.712 -78.6946 380.947 -78.6946L312.053 -78.6946C267.289 -78.6946 231 -114.887 231 -159.533L231 -220.162Z" fill="#563AF0" fillOpacity="0.1"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-2 max-w-full">
          <div className="w-full relative">
            <div className="p-8 md:p-12 relative z-10">
              {/* Декоративная полоска сверху */}
              <div className="w-full h-[3px] mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7962F4] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9580FF] to-transparent opacity-70"></div>
              </div>
              
              <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-4 text-center leading-tight">
                Стратегическая упаковка — катализатор доверия и конверсии
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
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
              <div className="space-y-6 text-gray-700">
                <p className="text-base md:text-lg leading-relaxed text-center">
                  <strong className="text-gray-900">Опасная иллюзия:</strong> многие эксперты/владельцы бизнеса уверены, что их предложение «упаковано».
                </p>
                
                <div className="pl-4">
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-center">
                    Чаще всего это лишь визуальный фасад:
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-center">
                    название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов –
                  </p>
                  <div className="text-center mt-4">
                    <span className="px-2 py-1 rounded font-semibold text-white inline-block relative" style={{
                      background: `linear-gradient(135deg, #563AF0 0%, #7962F4 50%, #272727 100%)`
                    }}>
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
      <section className="py-8 bg-gradient-to-b from-white to-[#563AF0]">
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
      <section ref={sectionRef} className="py-8 bg-gradient-to-b from-[#563AF0] to-white">
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
      <section className="py-8 bg-gradient-to-b from-white to-[#7460f1]">
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
      <section className="pt-2 pb-8 bg-gradient-to-b from-[#7460f1] to-[#563AF0]">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Мудрые учатся на чужих ошибках — забирайте оберег от слитого бюджета
            </h3>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              <span className="text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">5 ошибок</span> в вашем Телеграм-канале, которые съедают более <span className="text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">50% продаж</span>
            </p>
            
            <p className="text-sm text-white/70 italic mt-2 mx-auto" style={{ marginLeft: '-18px', marginRight: '-18px' }}>
              • разобрали на реальных примерах наших клиентов •
            </p>
            
            <div className="text-center mt-4">
              <span className="btn-grab text-white font-bold text-2xl md:text-3xl underline cursor-pointer select-none px-4 py-2 inline-block">
                ЗАБРАТЬ!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TapBlog Solution Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-full">
          <SectionCard className="bg-white/10 border-white/20">
            <div className="text-center space-y-8">
              {/* Main Heading */}
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Попытка сэкономить на упаковке или сделать её наскоро —
                гарантированно сольёт ваш бюджет впустую!
              </h2>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                TapBlog — готовое решение для системной упаковки и продажи ваших продуктов и услуг в Telegram
              </p>
              
              {/* Features List with Handwriting Animation */}
              <div className="space-y-6 max-w-4xl mx-auto text-left">
                {[
                  "Всё под ключ – от оформленного ТГ-канала с контент-стратегией до разработки web-app",
                  "Продуманная и прозрачная воронка от первого клика по рекламному объявлению до денег в кассе",
                  "WOW-эффект и яркое впечатление",
                  "Увеличение лояльности и доверия, эмоциональная связь",
                  "Гибкий функционал с внедрением ИИ – под ваши цели, задачи и потребности"
                ].map((text, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Stylized Checkmark */}
                    <div className="flex-shrink-0 mt-1">
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 16L12 22L26 8" stroke="#563AF0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-5 16 16)"/>
                      </svg>
                    </div>
                    {/* Handwriting Animation - только показывать когда предыдущий завершен */}
                    {(index === 0 || completedAnimations >= index) && (
                      <HandwritingAnimation 
                        text={text}
                        delay={index === 0 ? 500 : 100} // Первый с задержкой, остальные сразу после предыдущего
                        className="text-white/90 text-base md:text-lg flex-1"
                        onComplete={() => setCompletedAnimations(prev => Math.max(prev, index + 1))}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
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