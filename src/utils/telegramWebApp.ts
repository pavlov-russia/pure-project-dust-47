declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        MainButton: { hide: () => void };
        BackButton: { hide: () => void };
        SettingsButton: { hide: () => void };
        disableVerticalSwipes?: () => void;
        requestFullscreen?: () => void;
        setViewportHeight?: (height: string) => void;
        setHeaderColor?: (color: string) => void;
        setBackgroundColor?: (color: string) => void;
        enableClosingConfirmation?: () => void;
        viewportHeight: number;
        onEvent: (eventType: string, callback: () => void) => void;
        offEvent: (eventType: string, callback: () => void) => void;
      };
    };
  }
}

const updateViewportHeight = () => {
  const tg = window.Telegram?.WebApp;
  if (tg?.viewportHeight) {
    document.documentElement.style.setProperty('--tg-viewport-height', `${tg.viewportHeight}px`);
  } else {
    // Fallback to browser viewport height
    document.documentElement.style.setProperty('--tg-viewport-height', '100vh');
  }
};

export const telegramWebApp = {
  init() {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    // Basic Telegram WebApp initialization
    tg.ready();
    tg.expand();

    // Set initial viewport height
    updateViewportHeight();

    // Listen for viewport changes
    const viewportChangedHandler = () => {
      updateViewportHeight();
    };

    tg.onEvent('viewportChanged', viewportChangedHandler);

    // Disable vertical swipes if available
    if (tg.disableVerticalSwipes) {
      tg.disableVerticalSwipes();
    }

    // Hide Telegram UI elements for fullscreen experience
    tg.MainButton.hide();
    tg.BackButton.hide();
    tg.SettingsButton.hide();

    // Request fullscreen if available
    if (tg.requestFullscreen) {
      tg.requestFullscreen();
    }

    // Set viewport height if available
    if (tg.setViewportHeight) {
      tg.setViewportHeight('100vh');
    }

    // Set header and background colors
    if (tg.setHeaderColor) {
      tg.setHeaderColor('#563AF0');
    }
    
    if (tg.setBackgroundColor) {
      tg.setBackgroundColor('#FFFFFF');
    }

    // Enable closing confirmation
    if (tg.enableClosingConfirmation) {
      tg.enableClosingConfirmation();
    }

    return () => {
      // Cleanup viewport listener
      tg.offEvent('viewportChanged', viewportChangedHandler);
    };
  }
};