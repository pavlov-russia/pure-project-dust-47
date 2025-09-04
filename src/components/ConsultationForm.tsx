import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, ChevronRight, CheckCircle, X, ChevronLeft } from "lucide-react";

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    niche: "",
    currentState: "",
    planTraffic: "",
    budget: ""
  });
  const [typedText, setTypedText] = useState("");

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const questions = [
    {
      question: "В какой сфере вы работаете?",
      placeholder: "Например, авто из Китая / авторские тренинги",
      field: "niche" as keyof typeof formData,
      type: "input"
    },
    {
      question: "Опишите вашу точку А",
      placeholder: "Уже есть канал? Сколько подписчиков? Упакован ли продукт? Тестировали ли какие-то инструменты трафика? Расскажите, что есть сейчас",
      field: "currentState" as keyof typeof formData,
      type: "textarea"
    },
    {
      question: "Планируете ли вы запускать трафик в ТГ в ближайшее время?",
      field: "planTraffic" as keyof typeof formData,
      type: "select",
      options: [
        { value: "yes", label: "Да, планирую продвигаться" },
        { value: "no", label: "Пока нет" }
      ]
    },
    {
      question: "Какой бюджет вы готовы вкладывать в Телеграм?",
      placeholder: "Укажите сумму",
      field: "budget" as keyof typeof formData,
      type: "input"
    }
  ];

  // Fixed typing animation effect
  useEffect(() => {
    const currentQuestion = questions[currentStep - 1];
    if (!currentQuestion.placeholder) return;
    
    setTypedText(""); // Clear immediately
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      if (!isMounted) return;
      
      const text = currentQuestion.placeholder;
      let index = 0;
      
      const typeChar = () => {
        if (!isMounted || index > text.length) return;
        
        setTypedText(text.substring(0, index));
        index++;
        
        if (index <= text.length) {
          timeoutId = setTimeout(typeChar, 50);
        } else {
          // Wait 2 seconds then restart
          timeoutId = setTimeout(() => {
            if (isMounted) {
              index = 0;
              startTyping();
            }
          }, 2000);
        }
      };
      
      typeChar();
    };
    
    // Small delay to prevent flickering
    timeoutId = setTimeout(startTyping, 100);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      setTypedText("");
    };
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSuccessPopup(true);
      console.log("Form data:", formData);
      // Handle form submission
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (value: string) => {
    const currentQuestion = questions[currentStep - 1];
    setFormData({...formData, [currentQuestion.field]: value});
  };

  const currentQuestion = questions[currentStep - 1];
  const currentValue = formData[currentQuestion.field];
  const isStepValid = currentValue.trim() !== "";

  return (
    <>
      <style>
        {`
          @keyframes elasticScale {
            0% { opacity: 0; transform: scale(0); }
            60% { opacity: 1; transform: scale(1.2); }
            80% { transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
      
      <div className="py-16 pb-24" data-consultation-form>
        <div className="container mx-auto px-6 max-w-full">
          {/* iOS 26 Liquid Glass Container */}
          <div className="max-w-lg mx-auto relative">
            {/* Multiple liquid glass layers for iOS 26 effect */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/25 via-white/15 to-white/20 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[39px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/15 rounded-[40px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[40px]"></div>
            
            {/* Content layer */}
            <div className="relative z-10 p-8">
              {/* Header */}
              <div className="text-center mb-8">
                {/* Telegram Icon with liquid glass effect */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 backdrop-blur-[40px] bg-white/20 rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-full"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                      <g clipPath="url(#clip0_1_942)">
                        <rect x="0.651611" y="0.63208" width="150" height="150" rx="75" fill="#563AF0"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M90.7921 100.123C86.769 100.402 81.7155 100.514 76.5475 100.492C71.3795 100.514 66.326 100.402 62.3029 100.123C54.5351 99.5849 51.5741 99.1298 49.4982 98.1556C45.9599 96.4951 43.0198 92.5127 42.384 88.5189C42.1457 87.0203 42.0671 86.9445 40.5473 86.7408C39.3813 86.5846 38.6423 86.1819 37.7628 85.2233C36.7122 84.0777 36.5315 83.5544 36.2871 80.9462C35.887 76.6824 36.3106 70.79 37.1149 69.4298C37.7879 68.2914 39.3388 67.3381 41.1117 66.9725C41.8375 66.8228 42.1848 66.4674 42.3339 65.7204C42.4489 65.1467 43.2449 60.9231 44.1035 56.3347C44.962 51.7463 45.8639 47.3097 46.1076 46.4754C46.3723 45.5697 47.1877 44.935 48.1315 44.8999L49.5863 44.846C49.7421 44.8402 49.8925 44.8345 50.0378 44.8289C52.0101 44.7535 53.0355 44.7143 53.7194 45.1779C54.4599 45.68 54.7999 46.7719 55.508 49.0462C55.5561 49.2009 55.606 49.361 55.6578 49.5269L57.025 53.901L63.9339 53.601C68.2459 53.4137 72.293 53.3187 76.3681 53.3157C76.4345 53.3157 76.5008 53.3157 76.5672 53.3157C76.6205 53.3157 76.6737 53.3157 76.7269 53.3157C80.802 53.3187 84.8491 53.4137 89.1611 53.601L96.07 53.901L97.4372 49.5269C97.489 49.361 97.5389 49.2009 97.587 49.0462C98.2951 46.7719 98.6351 45.68 99.3756 45.1779C100.059 44.7143 101.085 44.7535 103.057 44.8289C103.202 44.8345 103.353 44.8402 103.509 44.846L104.964 44.8999C105.907 44.935 106.723 45.5697 106.987 46.4754C107.231 47.3097 108.133 51.7463 108.992 56.3347C109.85 60.9231 110.646 65.1467 110.761 65.7204C110.91 66.4674 111.258 66.8227 111.983 66.9725C113.756 67.3381 115.307 68.2914 115.98 69.4298C116.784 70.79 117.208 76.6824 116.808 80.9462C116.563 83.5544 116.383 84.0777 115.332 85.2233C114.453 86.1819 113.714 86.5846 112.548 86.7408C111.028 86.9445 110.949 87.0203 110.711 88.5189C110.075 92.5127 107.135 96.4951 103.597 98.1556C101.521 99.1298 98.5599 99.5849 90.7921 100.123Z" fill="white"/>
                        <circle cx="75.9477" cy="138.435" r="39.8012" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_942">
                          <rect x="0.651611" y="0.63208" width="150" height="150" rx="75" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                <h1 className="typo-h1 text-2xl text-[#272727] mb-3 drop-shadow-lg">
                  Консультация по Telegram
                </h1>
                <p className="text-[#272727] text-sm leading-relaxed">
                  Ответьте на несколько вопросов для записи на консультацию
                </p>
              </div>

              {/* Progress Section with iOS 26 styling */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-[#272727] text-sm u-strong">Вопрос {currentStep} из {totalSteps}</span>
                   <span className="text-[#272727] text-sm u-strong">{Math.round(progress)}%</span>
                </div>
                
                {/* Progress Bar with liquid glass */}
                <div className="relative mb-6">
                  <div className="w-full h-3 backdrop-blur-sm bg-[rgba(86,58,240,0.2)] rounded-full border border-[rgba(86,58,240,0.3)] shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-[#563AF0] to-[#7962F4] rounded-full transition-all duration-700 ease-out shadow-sm"
                      style={{width: `${progress}%`}}
                    ></div>
                  </div>
                </div>
                
              </div>

              {/* Question Section */}
              <div className="space-y-6">
                <h2 className="typo-h2 text-lg md:text-xl text-[#272727] leading-tight drop-shadow-sm text-center">
                  {currentQuestion.question}
                </h2>

                {/* Input Container with liquid glass */}
                <div 
                  key={currentStep}
                  className="animate-fade-in"
                >
                  <div className="relative">
                    {/* Input field background with iOS 26 liquid glass */}
                    <div className="absolute inset-0 backdrop-blur-[40px] bg-white/15 border border-white/25 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 via-transparent to-white/5 rounded-[15px]"></div>
                    
                    {/* Input fields */}
                    <div className="relative z-10">
                      {currentQuestion.type === "input" && (
                        <Input
                          placeholder={typedText + "|"}
                          value={currentValue}
                          onChange={(e) => handleInputChange(e.target.value)}
                          className="bg-transparent border-none text-[#272727] placeholder:text-[#9E9E9E] text-base p-4 h-14 rounded-2xl focus:ring-2 focus:ring-[#563AF0] transition-all duration-300"
                        />
                      )}

                      {currentQuestion.type === "textarea" && (
                        <Textarea
                          placeholder={typedText + "|"}
                          value={currentValue}
                          onChange={(e) => handleInputChange(e.target.value)}
                          className="bg-transparent border-none text-[#272727] placeholder:text-[#9E9E9E] text-base p-4 min-h-[160px] rounded-2xl resize-none focus:ring-2 focus:ring-[#563AF0] transition-all duration-300"
                        />
                      )}

                      {currentQuestion.type === "select" && (
                        <Select
                          value={currentValue}
                          onValueChange={handleInputChange}
                        >
                          <SelectTrigger className="bg-transparent border-none text-[#272727] h-14 p-4 rounded-2xl focus:ring-2 focus:ring-[#563AF0] transition-all duration-300">
                            <SelectValue placeholder="Выберите вариант" className="text-[#9E9E9E]" />
                          </SelectTrigger>
                          <SelectContent className="backdrop-blur-[40px] bg-white/90 border border-white/30 rounded-2xl">
                            {currentQuestion.options?.map((option) => (
                              <SelectItem key={option.value} value={option.value} className="text-[#272727] hover:bg-[rgba(86,58,240,0.1)]">
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons with iOS 26 liquid glass */}
                <div className="flex gap-4 pt-4">
                  {currentStep > 1 && (
                    <div className="relative">
                      <div className="absolute inset-0 backdrop-blur-[40px] bg-white/15 border border-white/25 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 via-transparent to-white/5 rounded-[15px]"></div>
                      <Button 
                        onClick={handlePrevious}
                        className="relative z-10 bg-transparent border-none hover:bg-white/10 text-[#272727] h-14 w-14 rounded-2xl transition-all duration-300 flex items-center justify-center"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <Button 
                      onClick={handleNext}
                      disabled={!isStepValid}
                      variant="glass-breath"
                      className="w-full h-14 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {currentStep === totalSteps ? "Записаться" : "Далее"}
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup with iOS 26 Liquid Glass */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            className="relative max-w-md w-full"
            style={{ animation: "elasticScale 1s ease-out" }}
          >
            {/* Multiple liquid glass layers */}
            <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-br from-white/25 via-white/15 to-white/20 rounded-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)]"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-white/10 rounded-[31px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/15 rounded-[32px]"></div>
            <div className="absolute inset-0 border border-white/30 rounded-[32px]"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-4 right-4 text-[#9E9E9E] hover:text-[#272727] transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Success Icon with liquid glass */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 backdrop-blur-[40px] bg-white/20 rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                <div className="absolute inset-[2px] bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-full"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-[#563AF0] drop-shadow-lg" />
                </div>
              </div>
              
              <h2 className="typo-h2 text-2xl text-[#272727] mb-4 drop-shadow-sm">
                Заявка отправлена!
              </h2>
              
              <p className="text-[#272727] mb-8 leading-relaxed">
                Спасибо за интерес к нашим услугам! Мы свяжемся с вами в ближайшее время для назначения консультации.
              </p>
              
              {/* Close Button with liquid glass */}
              <div className="relative">
                <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[15px]"></div>
                <Button 
                  onClick={() => setShowSuccessPopup(false)}
                  className="btn relative z-10 bg-transparent border-none hover:bg-white/10 text-[#272727] px-8 py-3 rounded-2xl transition-all duration-300"
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;