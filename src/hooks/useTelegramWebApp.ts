import { useEffect, useState } from 'react';

export const useTelegramWebApp = () => {
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect Telegram WebApp
    const isInTelegram = !!window.Telegram?.WebApp;
    setIsTelegramWebApp(isInTelegram);

    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      return isMobileUA || isSmallScreen;
    };

    setIsMobile(checkMobile());

    // Listen for resize to update mobile status
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isTelegramWebApp,
    isMobile,
    shouldUseBlurFallback: isTelegramWebApp && isMobile
  };
};