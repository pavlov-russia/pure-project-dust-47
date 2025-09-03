import React, { useState, useEffect } from 'react';

interface HandwritingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const HandwritingAnimation: React.FC<HandwritingAnimationProps> = ({ 
  text, 
  delay = 0, 
  className = "",
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`handwriting-${text.substring(0, 10)}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [text, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startDelay = setTimeout(() => {
      setIsWriting(true);
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsWriting(false);
          // Вызываем callback когда текст полностью напечатан
          if (onComplete) {
            onComplete();
          }
        }
      }, 50); // Скорость написания

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [isVisible, text, delay, onComplete]);

  return (
    <div 
      id={`handwriting-${text.substring(0, 10)}`}
      className={`relative inline-block ${className}`}
    >
      <span className="relative">
        {displayedText}
        {/* Мигающий курсор во время написания */}
        {isWriting && (
          <span className="animate-pulse text-primary">|</span>
        )}
      </span>
    </div>
  );
};

export default HandwritingAnimation;