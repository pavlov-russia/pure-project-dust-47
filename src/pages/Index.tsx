import { Button } from "@/components/ui/button";
import ChecklistPopup from "@/components/ChecklistPopup";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ChecklistPopup />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-48 text-white text-center w-full" data-hero>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative z-10 p-8 md:p-12">
            <h1 className="mobile-heading-scale md:text-6xl font-regular mb-4 md:mb-6 leading-tight text-foreground">
              Управляйте впечатлением о своём бизнесе с <span className="font-demibold text-foreground">TapBlog</span>
            </h1>
            <p className="mobile-subheading-scale md:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed text-foreground/90">
              У вас есть менее 7 секунд, чтобы сформировать о своём продукте нужное впечатление и повлиять на решение потребителя.
            </p>
            <p className="text-base md:text-lg mb-8 md:mb-10 font-medium text-foreground/85">
              И мы поможем использовать их в вашу пользу!
            </p>
            
            {/* CTA Button */}
            <div className="relative inline-block">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Получить индивидуальное КП
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
};

export default Index;