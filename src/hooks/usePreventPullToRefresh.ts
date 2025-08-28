import { useEffect } from 'react';

export const usePreventPullToRefresh = () => {
  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Prevent pull-to-refresh when trying to scroll up from the top
      if (scrollTop === 0 && currentY > startY) {
        e.preventDefault();
      }
    };

    // Prevent overscroll and bouncing
    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Telegram-specific: disable vertical swipes
    const tg = window.Telegram?.WebApp;
    if (tg?.disableVerticalSwipes) {
      tg.disableVerticalSwipes();
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
};