import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { telegramWebApp } from "@/utils/telegramWebApp";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnimationShowcase from "./components/AnimationShowcase";
import FontUploader from "./pages/FontUploader";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const cleanup = telegramWebApp.init();
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/animations" element={<AnimationShowcase />} />
            <Route path="/fonts" element={<FontUploader />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
