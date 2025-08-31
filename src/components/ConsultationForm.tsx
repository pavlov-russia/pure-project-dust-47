import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, ChevronRight } from "lucide-react";

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    niche: "",
    currentState: "",
    planTraffic: "",
    budget: ""
  });

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

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
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
    <div className="bg-gradient-subtle py-16" data-consultation-form>
      <div className="container mx-auto px-6 max-w-full">
        <Card className="max-w-lg mx-auto bg-card backdrop-blur-xl border shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-telegram rounded-full flex items-center justify-center mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground mb-2">
              Консультация по Telegram
            </CardTitle>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ответь на несколько вопросов для записи на консультацию
            </p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-muted-foreground text-sm">Вопрос {currentStep} из {totalSteps}</span>
                <span className="text-muted-foreground text-sm">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-6">
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
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {currentQuestion.question}
              </h3>

              {/* Input Field */}
              <div className="space-y-4">
                {currentQuestion.type === "input" && (
                  <Input
                    placeholder={currentQuestion.placeholder}
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
  );
};

export default ConsultationForm;