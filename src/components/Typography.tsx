import React from 'react';
import SmartHeading from './SmartHeading';
import { cn } from '@/lib/utils';

// Типизированные компоненты для каждого уровня заголовков

interface HeadingProps {
  children: string;
  highlightWords?: string[];
  className?: string;
}

// H1 - Главный заголовок страницы
export const H1: React.FC<HeadingProps> = ({ children, highlightWords, className }) => (
  <SmartHeading 
    level={1} 
    highlightWords={highlightWords}
    className={cn("mb-6", className)}
  >
    {children}
  </SmartHeading>
);

// H2 - Основные разделы
export const H2: React.FC<HeadingProps> = ({ children, highlightWords, className }) => (
  <SmartHeading 
    level={2} 
    highlightWords={highlightWords}
    className={cn("mb-4", className)}
  >
    {children}
  </SmartHeading>
);

// H3 - Подразделы
export const H3: React.FC<HeadingProps> = ({ children, highlightWords, className }) => (
  <SmartHeading 
    level={3} 
    highlightWords={highlightWords}
    className={cn("mb-3", className)}
  >
    {children}
  </SmartHeading>
);

// H4 - Минорные заголовки
export const H4: React.FC<HeadingProps> = ({ children, highlightWords, className }) => (
  <SmartHeading 
    level={4} 
    highlightWords={highlightWords}
    className={cn("mb-2", className)}
  >
    {children}
  </SmartHeading>
);

// H5 - Мелкие заголовки
export const H5: React.FC<HeadingProps> = ({ children, highlightWords, className }) => (
  <SmartHeading 
    level={5} 
    highlightWords={highlightWords}
    className={cn("mb-2", className)}
  >
    {children}
  </SmartHeading>
);

// H6 - Самые мелкие заголовки
export const H6: React.FC<HeadingProps> = ({ children, highlightWords, className }) => (
  <SmartHeading 
    level={6} 
    highlightWords={highlightWords}
    className={cn("mb-1", className)}
  >
    {children}
  </SmartHeading>
);

// Компонент для градиентных заголовков (особые случаи)
export const GradientHeading: React.FC<HeadingProps & { level?: 1 | 2 | 3 }> = ({ 
  children, 
  highlightWords, 
  className,
  level = 1 
}) => (
  <SmartHeading 
    level={level} 
    highlightWords={highlightWords}
    className={cn(
      "bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent",
      className
    )}
  >
    {children}
  </SmartHeading>
);