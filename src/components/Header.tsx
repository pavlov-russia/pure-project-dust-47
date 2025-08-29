import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [showCTA, setShowCTA] = useState(false);

  const handleCTAClick = () => {
    // Находим форму консультации и скроллим к ней
    const consultationForm = document.querySelector('[data-consultation-form]');
    if (consultationForm) {
      consultationForm.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  useEffect(() => {
    const rootEl = document.getElementById('root');
    const heroEl = document.querySelector('[data-hero]');

    if (!rootEl) return;

    // Если есть Hero — используем IntersectionObserver относительно #root
    if (heroEl && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          // Показываем кнопку, когда Hero почти вышел из области (видимость < 20%)
          setShowCTA(entry.intersectionRatio < 0.2);
        },
        {
          root: rootEl,
          threshold: [0, 0.2, 0.5, 1],
        }
      );

      observer.observe(heroEl);

      return () => observer.disconnect();
    }

    // Fallback: слушаем скролл у #root
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = rootEl.scrollTop;
          setShowCTA(scrollTop > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    rootEl.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => rootEl.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      {/* Advanced Glassmorphism Container with SVG-inspired styling */}
      <div 
        className="relative overflow-hidden rounded-[24px] border-0"
        style={{
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          backgroundColor: 'rgba(255, 255, 255, 0.07)',
          mixBlendMode: 'screen',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container mx-auto px-3 md:px-6 pt-[84px] md:pt-[120px] pb-[3px] md:pb-[3px] flex items-center justify-center max-w-full mt-3 md:mt-4 relative">
        {/* Logo в центре */}
        <div className="flex items-center justify-center relative z-10">
          <img 
            src="/lovable-uploads/662af8ac-c68f-4d75-9ed4-d4b4d39d1e17.png" 
            alt="TapBlog Logo" 
            className="h-6 md:h-8 w-auto drop-shadow-sm"
          />
        </div>
        
        {/* CTA Button - показывается только после скролла, позиционируем абсолютно справа */}
        <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out ${
          showCTA 
            ? 'opacity-100 translate-y-[-50%] scale-100' 
            : 'opacity-0 translate-y-[-45%] scale-95 pointer-events-none'
        }`}>
          <Button 
            variant="glass-breath"
            size="touch"
            onClick={handleCTAClick}
            className={`slow-pulse transition-all duration-300 ${showCTA ? 'animate-fade-in' : ''}`}
            style={{
              backgroundColor: 'rgba(255,255,255,0.18)',
              animation: showCTA ? 'breath-glass 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
              willChange: 'transform, box-shadow, background-color',
            }}
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
    </header>
    </>
  );
};

export default Header;