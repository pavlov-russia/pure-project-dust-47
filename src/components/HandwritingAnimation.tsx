import React, { useState, useEffect } from 'react';

interface HandwritingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
}

const HandwritingAnimation: React.FC<HandwritingAnimationProps> = ({ 
  text, 
  delay = 0, 
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
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
          // Показываем подчеркивание после завершения написания
          setTimeout(() => {
            setShowUnderline(true);
          }, 300);
        }
      }, 50); // Скорость написания

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [isVisible, text, delay]);

  return (
    <div 
      id={`handwriting-${text.substring(0, 10)}`}
      className={`relative inline-block ${className}`}
    >
      {/* Текст */}
      <span className="relative">
        {displayedText}
        {/* Мигающий курсор во время написания */}
        {isWriting && (
          <span className="animate-pulse text-primary">|</span>
        )}
        {/* Анимированное подчеркивание */}
        {showUnderline && (
          <span 
            className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-700 ease-out"
            style={{
              width: showUnderline ? '100%' : '0%',
            }}
          />
        )}
      </span>
      
      {/* Анимированная рука (только во время написания) */}
      {isWriting && (
        <div 
          className="absolute pointer-events-none z-10"
          style={{
            left: `${(displayedText.length * 0.6)}ch`,
            top: '-10px',
            animation: 'handMove 0.1s ease-in-out infinite alternate'
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-primary rotate-12"
          >
            <path 
              d="M3 21l18-6-6-6-6 6-6 6z" 
              fill="currentColor"
              opacity="0.8"
            />
            <path 
              d="M15 9l6 6" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
      
      <style>{`
        @keyframes handMove {
          0% { transform: translateY(0px) rotate(12deg); }
          100% { transform: translateY(-2px) rotate(15deg); }
        }
      `}</style>
    </div>
  );
};

export default HandwritingAnimation;