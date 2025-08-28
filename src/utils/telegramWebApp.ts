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

const safeCall = (fn: () => void, methodName: string) => {
  try {
    fn();
  } catch (error) {
    console.warn(`Telegram WebApp method "${methodName}" not supported:`, error);
  }
};

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
    if (!tg) {
      console.log('Telegram WebApp not available, running in browser mode');
      // Set fallback viewport height for browser mode
      document.documentElement.style.setProperty('--tg-viewport-height', '100vh');
      return;
    }

    try {
      // Basic Telegram WebApp initialization - these should always work
      tg.ready();
      tg.expand();

      // Set initial viewport height
      updateViewportHeight();

      // Listen for viewport changes
      const viewportChangedHandler = () => {
        updateViewportHeight();
      };

      tg.onEvent('viewportChanged', viewportChangedHandler);

      // Hide Telegram UI elements for fullscreen experience - these should always work
      safeCall(() => tg.MainButton.hide(), 'MainButton.hide');
      safeCall(() => tg.BackButton.hide(), 'BackButton.hide');
      safeCall(() => tg.SettingsButton.hide(), 'SettingsButton.hide');

      // Experimental/optional methods - wrap in safeCall
      if (tg.disableVerticalSwipes) {
        safeCall(() => tg.disableVerticalSwipes!(), 'disableVerticalSwipes');
      }

      if (tg.requestFullscreen) {
        safeCall(() => tg.requestFullscreen!(), 'requestFullscreen');
      }

      if (tg.setViewportHeight) {
        safeCall(() => tg.setViewportHeight!('100vh'), 'setViewportHeight');
      }

      if (tg.setHeaderColor) {
        safeCall(() => tg.setHeaderColor!('#563AF0'), 'setHeaderColor');
      }
      
      if (tg.setBackgroundColor) {
        safeCall(() => tg.setBackgroundColor!('#FFFFFF'), 'setBackgroundColor');
      }

      if (tg.enableClosingConfirmation) {
        safeCall(() => tg.enableClosingConfirmation!(), 'enableClosingConfirmation');
      }

      return () => {
        // Cleanup viewport listener
        safeCall(() => tg.offEvent('viewportChanged', viewportChangedHandler), 'offEvent');
      };
    } catch (error) {
      console.warn('Error initializing Telegram WebApp:', error);
      // Set fallback viewport height
      document.documentElement.style.setProperty('--tg-viewport-height', '100vh');
    }
  }
};