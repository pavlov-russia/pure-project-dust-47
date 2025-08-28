import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <SectionCard className="pt-20 md:pt-48 bg-gradient-hero text-white text-center" data-hero>
        <h1 className="mobile-heading-scale md:text-6xl font-regular mb-4 md:mb-6 leading-tight">
          Управляйте впечатлением о своём бизнесе с <span className="font-demibold text-white">TapBlog</span>
        </h1>
        <p className="mobile-subheading-scale md:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          У вас есть менее <ChecklistCountdown /> секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
        </p>
        <p className="text-base md:text-lg mb-8 md:mb-10 font-medium">
          И мы поможем использовать их в вашу пользу!
        </p>
        <Button 
          variant="hero-accent"
          size="xl"
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
      </SectionCard>

      {/* Strategic Packaging Section */}
      <SectionCard className="bg-gradient-hero text-white">
        <div className="text-center mb-8">
          <h2 className="mobile-subheading-scale md:text-4xl font-bold mb-4 md:mb-6 px-2">
            <span className="font-bold text-white">Стратегическая упаковка</span> — катализатор доверия и конверсии
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed opacity-90 px-2">
            Это основа, без которой продвижение теряет смысл, а вы – бюджет
          </p>
          
          {/* Key principle highlight */}
          <div className="bg-white/10 border border-white/25 rounded-xl p-4 md:p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white">
              <span className="font-bold">СНАЧАЛА УПАКОВКА</span> — ПОТОМ ТРАФИК
            </h3>
          </div>
        </div>

        {/* Warning Block */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated brand glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-xl animate-pulse"></div>
          
          {/* Main warning container with brand colors */}
          <div className="relative backdrop-blur-md bg-gradient-to-br from-primary/95 to-accent/95 border-2 border-primary/60 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            {/* Brand gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-accent/20 pointer-events-none"></div>
            
            {/* Animated border accent */}
            <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center">
              {/* Enhanced warning icon with brand colors */}
              <div className="relative flex-shrink-0 mb-4">
                {/* Pulsing background rings */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping scale-125"></div>
                <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse scale-110"></div>
                
                {/* Main icon container */}
                <div className="relative bg-white/15 backdrop-blur-sm p-4 rounded-full border-2 border-white/40 shadow-lg">
                  <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="text-center flex-1">
                {/* Enhanced title with better typography */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-white via-white to-accent-foreground bg-clip-text text-transparent">
                    Опасная иллюзия
                  </span>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-white/95 text-lg md:text-xl leading-relaxed font-medium">
                    Многие эксперты/владельцы бизнеса уверены, что их предложение «упаковано».
                  </p>
                  
                   {/* Enhanced final statement with brand styling */}
                   <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-inner">
                     <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-xl blur opacity-50"></div>
                     <div className="relative">
                       <p className="text-white/85 text-base md:text-lg leading-relaxed mb-3">
                         Чаще всего это лишь визуальный фасад:
                       </p>
                       <p className="font-bold text-white text-base md:text-lg leading-relaxed">
                         Название канала, красивая аватарка, описание, закреп, несколько постов и пара кейсов – 
                         <span className="block mt-2 text-xl md:text-2xl font-black bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent animate-pulse">
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
              variant="cta-tertiary"
              size="xl"
              icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
            >
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
                  <div key={index} className="relative backdrop-blur-[40px] bg-secondary/60 border border-white/30 rounded-[34px] p-4 md:p-6 hover:bg-secondary/80 transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Dark overlay for color-dodge effect */}
                    <div className="absolute inset-0 bg-foreground rounded-[34px] pointer-events-none opacity-10 mix-blend-color-dodge"></div>
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
                  variant="cta-primary"
                  size="xl"
                  icon={<Rocket className="w-4 h-4 md:w-5 md:h-5" />}
                >
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
      <section className="pt-6 md:pt-16 pb-3 md:pb-14 relative">
        {/* Background with rounded corners and dashed border like SVG */}
        <div className="absolute inset-0 m-2 md:m-8 rounded-[16px] md:rounded-[21px] bg-gradient-dark overflow-hidden">
          {/* Inner content background */}
          <div className="absolute inset-0 bg-gradient-dark"></div>
        </div>
        
        <div className="container mx-auto px-3 md:px-6 text-center max-w-full relative z-10">
          <h2 className="text-xl md:text-3xl font-regular mb-4 md:mb-6 px-1 md:px-2 text-white leading-tight">
            ☝🏼 Мудрые учатся на чужих ошибках — забирайте <span className="font-demibold">оберег от слитого бюджета</span>
          </h2>
          {/* SVG-styled card with large drop shadow */}
          <div className="max-w-lg md:max-w-2xl mx-auto relative">
            {/* Drop shadow background */}
            <div className="absolute inset-0 bg-black/20 rounded-[24px] md:rounded-[34px] blur-[20px] md:blur-[38px] translate-y-3 md:translate-y-5"></div>
            
            {/* Main glass morphism card */}
            <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-[24px] md:rounded-[34px] p-5 md:p-8 text-foreground shadow-[0_8px_32px_rgba(86,58,240,0.12)]">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <Shield className="w-8 h-8 md:w-12 md:h-12 text-warning" />
              </div>
              <h3 className="text-base md:text-xl font-regular mb-3 md:mb-4 leading-snug">
                <span className="font-demibold">5 ошибок</span> в вашем Телеграм-канале, которые съедают более <span className="font-demibold">50% продаж</span>
              </h3>
              <p className="text-muted-foreground mb-4 md:mb-6 text-xs md:text-base">
                (разобрали на реальных примерах наших клиентов)
              </p>
              <Button 
                variant="cta-secondary"
                size="xl"
                className="w-full md:w-auto"
                icon={<Shield className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Получить чек-лист бесплатно
              </Button>
              
              {/* SVG corner decoration - hidden on mobile */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 hidden md:block">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground md:w-6 md:h-6">
                  <path d="M20.175 18.149C19.887 19.642 19.484 20.737 18.191 21.054C17.897 21.37 16.819 21.801 15.335 22.121" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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