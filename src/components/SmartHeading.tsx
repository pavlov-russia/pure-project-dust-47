import React from 'react';
import { cn } from '@/lib/utils';

interface SmartHeadingProps {
  children: string;
  highlightWords?: string[];
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  style?: React.CSSProperties;
}

const SmartHeading: React.FC<SmartHeadingProps> = ({ 
  children, 
  highlightWords = [], 
  className,
  level = 1,
  as,
  style
}) => {
  // Определяем HTML тег
  const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements);
  
  // Базовые стили для разных уровней заголовков
  const levelStyles = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl lg:text-5xl", 
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-xl md:text-2xl lg:text-3xl",
    5: "text-lg md:text-xl lg:text-2xl",
    6: "text-base md:text-lg lg:text-xl"
  };

  // Функция для разбора текста и выделения ключевых слов
  const parseText = (text: string): React.ReactNode[] => {
    if (highlightWords.length === 0) {
      return [text];
    }

    // Создаем регулярное выражение для поиска ключевых слов
    const pattern = new RegExp(`\\b(${highlightWords.join('|')})\\b`, 'gi');
    const parts = text.split(pattern);
    
    return parts.map((part, index) => {
      const isHighlighted = highlightWords.some(word => 
        word.toLowerCase() === part.toLowerCase()
      );
      
      if (isHighlighted) {
        return (
          <span 
            key={index} 
            className="font-demibold" // DemiBold
            style={{ fontWeight: '600' }}
          >
            {part}
          </span>
        );
      }
      
      return (
        <span 
          key={index}
          className="font-regular" // Regular
          style={{ fontWeight: '400' }}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <Tag 
      className={cn(
        "font-regular", // Базовый Regular weight
        levelStyles[level],
        "leading-tight tracking-tight",
        className
      )}
      style={{ fontWeight: '400', ...style }}
    >
      {parseText(children)}
    </Tag>
  );
};

export default SmartHeading;