import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle } from "lucide-react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    niche: "",
    currentState: "",
    planTraffic: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission
  };

  return (
    <div className="bg-gradient-subtle py-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto shadow-large border-0">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-telegram rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Запишитесь на бесплатную консультацию
            </CardTitle>
            <p className="text-muted-foreground">
              Составим индивидуальный план вашей упаковки в ТГ и подготовим ваш бизнес к запуску трафика
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  1) Какая у вас ниша?
                </label>
                <Input
                  placeholder="Например, авто из Китая / юридические услуги"
                  value={formData.niche}
                  onChange={(e) => setFormData({...formData, niche: e.target.value})}
                  className="focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  2) Опишите свою точку А
                </label>
                <Textarea
                  placeholder="Уже есть канал? Сколько подписчиков? Упакован ли продукт? Тестировали ли какие-то инструменты трафика? Расскажите, что есть сейчас"
                  value={formData.currentState}
                  onChange={(e) => setFormData({...formData, currentState: e.target.value})}
                  className="min-h-[100px] focus:border-primary resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  3) Планируете ли вы запускать трафик в ТГ в ближайшее время?
                </label>
                <Select
                  value={formData.planTraffic}
                  onValueChange={(value) => setFormData({...formData, planTraffic: value})}
                  required
                >
                  <SelectTrigger className="focus:border-primary">
                    <SelectValue placeholder="Выберите вариант" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Да, планирую продвигаться</SelectItem>
                    <SelectItem value="no">Пока нет</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  4) Какой бюджет вы готовы вкладывать в Телеграм?
                </label>
                <Input
                  placeholder="Укажите сумму"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="focus:border-primary"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-telegram hover:shadow-medium transition-smooth text-lg py-6 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Отправить и записаться на консультацию
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConsultationForm;