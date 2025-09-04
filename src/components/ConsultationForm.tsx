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
                    <MessageCircle className="w-10 h-10 text-[#563AF0] drop-shadow-lg" />
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold text-[#272727] mb-3 drop-shadow-lg">
                  Консультация по Telegram
                </h1>
                <p className="text-[#272727] text-sm leading-relaxed">
                  Ответьте на несколько вопросов для записи на консультацию
                </p>
              </div>

              {/* Progress Section with iOS 26 styling */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#272727] text-sm font-medium">Вопрос {currentStep} из {totalSteps}</span>
                  <span className="text-[#272727] text-sm font-medium">{Math.round(progress)}%</span>
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
                
                {/* Step Indicators with liquid glass dots */}
                <div className="flex justify-center items-center space-x-3">
                  {Array.from({length: totalSteps}, (_, i) => {
                    const stepNumber = i + 1;
                    const isCurrentStep = stepNumber === currentStep;
                    const isPastStep = stepNumber < currentStep;
                    const stepQuestion = questions[i];
                    const stepValue = formData[stepQuestion.field];
                    const isStepCompleted = stepValue.trim() !== "";
                    
                    return (
                      <div
                        key={i}
                        className={`relative transition-all duration-500 ${
                          isCurrentStep
                            ? 'w-8 h-4 rounded-full' 
                            : 'w-4 h-4 rounded-full'
                        } ${
                          isPastStep || isCurrentStep
                            ? 'scale-110' 
                            : 'scale-100'
                        }`}
                      >
                        <div className={`absolute inset-0 backdrop-blur-sm rounded-full border transition-all duration-500 ${
                          (isPastStep && isStepCompleted) || (isCurrentStep && isStepCompleted)
                            ? 'bg-[#563AF0] border-[#7962F4] shadow-lg' 
                            : isPastStep || isCurrentStep
                            ? 'bg-[#563AF0]/50 border-[#7962F4]/50 shadow-md'
                            : 'bg-[rgba(158,158,158,0.3)] border-[rgba(158,158,158,0.5)]'
                        }`}></div>
                        {((isPastStep && isStepCompleted) || (isCurrentStep && isStepCompleted)) && (
                          <div className="absolute inset-[2px] bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.6)] rounded-full"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Question Section */}
              <div className="space-y-6">
                <h2 className="text-lg md:text-xl font-semibold text-[#272727] leading-tight drop-shadow-sm text-center">
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
                          className="bg-transparent border-none text-[#272727] placeholder:text-[#9E9E9E] text-base p-4 min-h-[120px] rounded-2xl resize-none focus:ring-2 focus:ring-[#563AF0] transition-all duration-300"
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
                  
                  <div className="relative flex-1">
                    <div className="absolute inset-0 backdrop-blur-[40px] bg-white/25 border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-transparent to-white/5 rounded-[15px]"></div>
                    <Button 
                      onClick={handleNext}
                      disabled={!isStepValid}
                      className="relative z-10 w-full bg-transparent border-none hover:bg-white/10 text-[#272727] font-semibold h-14 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {currentStep === totalSteps ? "Записаться на консультацию" : "Далее"}
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
              
              <h2 className="text-2xl font-bold text-[#272727] mb-4 drop-shadow-sm">
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
                  className="relative z-10 bg-transparent border-none hover:bg-white/10 text-[#272727] font-semibold px-8 py-3 rounded-2xl transition-all duration-300"
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