import ChecklistPopup from "@/components/ChecklistPopup";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ChecklistPopup />
      
      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
};

export default Index;