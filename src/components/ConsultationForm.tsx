import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, ChevronRight, CheckCircle, X } from "lucide-react";

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
      question: "Какая у тебя ниша?",
      placeholder: "Например, авто из Китая / авторские тренинги",
      field: "niche" as keyof typeof formData,
      type: "input"
    },
    {
      question: "Опишите свою точку А",
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

  // Typing animation effect
  useEffect(() => {
    if (currentStep === 1) {
      const text = questions[0].placeholder;
      let index = 0;
      setTypedText("");
      
      const timer = setInterval(() => {
        if (index < text.length) {
          setTypedText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
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
      
      <div className="bg-gradient-subtle py-16" data-consultation-form>
        <div className="container mx-auto px-6 max-w-full">
          <Card className="max-w-lg mx-auto bg-card backdrop-blur-xl border shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-telegram rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-1">
                Консультация по Telegram
              </CardTitle>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Ответь на несколько вопросов для записи на консультацию
              </p>
            </CardHeader>
            
            <CardContent className="px-6 pb-6">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-xs">Вопрос {currentStep} из {totalSteps}</span>
                  <span className="text-muted-foreground text-xs">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-telegram h-2 rounded-full transition-all duration-500 ease-out"
                    style={{width: `${progress}%`}}
                  ></div>
                </div>
                
                {/* Step Indicators */}
                <div className="flex justify-center space-x-3">
                  {Array.from({length: totalSteps}, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i + 1 <= currentStep 
                          ? 'bg-gradient-telegram' 
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {currentQuestion.question}
                </h3>

                {/* Input Field */}
                <div className="space-y-4">
                  {currentQuestion.type === "input" && (
                    <Input
                      placeholder={currentStep === 1 ? typedText + "|" : currentQuestion.placeholder}
                      value={currentValue}
                      onChange={(e) => handleInputChange(e.target.value)}
                      className="focus:border-primary rounded-xl"
                    />
                  )}

                  {currentQuestion.type === "textarea" && (
                    <Textarea
                      placeholder={currentQuestion.placeholder}
                      value={currentValue}
                      onChange={(e) => handleInputChange(e.target.value)}
                      className="focus:border-primary rounded-xl min-h-[120px] resize-none"
                    />
                  )}

                  {currentQuestion.type === "select" && (
                    <Select
                      value={currentValue}
                      onValueChange={handleInputChange}
                    >
                      <SelectTrigger className="focus:border-primary rounded-xl">
                        <SelectValue placeholder="Выберите вариант" />
                      </SelectTrigger>
                      <SelectContent>
                        {currentQuestion.options?.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Next Button */}
                <Button 
                  onClick={handleNext}
                  disabled={!isStepValid}
                  className="w-full bg-gradient-telegram hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {currentStep === totalSteps ? "Записаться на консультацию" : "Далее"}
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div 
            className="bg-card border shadow-2xl rounded-2xl p-8 max-w-md mx-4 text-center"
            style={{ animation: "elasticScale 1s ease-out" }}
          >
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-20 h-20 bg-gradient-telegram rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Заявка отправлена!
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Спасибо за интерес к нашим услугам! Мы свяжемся с вами в ближайшее время для назначения консультации.
            </p>
            
            <Button 
              onClick={() => setShowSuccessPopup(false)}
              className="bg-gradient-telegram hover:opacity-90 text-white px-8"
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;