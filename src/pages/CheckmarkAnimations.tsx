import React from 'react';
import Header from "@/components/Header";

const StarAnimations = () => {
  const starVariants = [
    {
      name: "Классическая звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20.12 12.24H30.24L22.06 18.26L26.18 28.5L16 22.48L5.82 28.5L9.94 18.26L1.76 12.24H11.88L16 2Z" stroke="#563AF0" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      name: "Заполненная звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20.12 12.24H30.24L22.06 18.26L26.18 28.5L16 22.48L5.82 28.5L9.94 18.26L1.76 12.24H11.88L16 2Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда с градиентом",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#563AF0"/>
              <stop offset="100%" stopColor="#8B5FFF"/>
            </linearGradient>
          </defs>
          <path d="M16 2L20.12 12.24H30.24L22.06 18.26L26.18 28.5L16 22.48L5.82 28.5L9.94 18.26L1.76 12.24H11.88L16 2Z" fill="url(#starGradient)"/>
        </svg>
      )
    },
    {
      name: "Звезда с лучами",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L18 8L16 14L14 8L16 2Z" fill="#563AF0"/>
          <path d="M16 18L18 24L16 30L14 24L16 18Z" fill="#563AF0"/>
          <path d="M2 16L8 14L14 16L8 18L2 16Z" fill="#563AF0"/>
          <path d="M18 16L24 14L30 16L24 18L18 16Z" fill="#563AF0"/>
          <path d="M6 6L10 10L14 6L10 2L6 6Z" fill="#563AF0"/>
          <path d="M18 26L22 22L26 26L22 30L18 26Z" fill="#563AF0"/>
          <path d="M26 6L22 10L18 6L22 2L26 6Z" fill="#563AF0"/>
          <path d="M14 26L10 22L6 26L10 30L14 26Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Многоконечная звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1L17.5 6.5L22 2L19 7.5L26 5L21.5 10L30 9L24 13.5L31 15L24.5 17.5L30 23L21.5 22L26 27L19 24.5L22 30L17.5 25.5L16 31L14.5 25.5L10 30L13 24.5L6 27L10.5 22L2 23L7.5 17.5L1 15L8 13.5L2 9L10.5 10L6 5L13 7.5L10 2L14.5 6.5L16 1Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда в кружке",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="#563AF0" strokeWidth="2" fill="none"/>
          <path d="M16 7L18 13H24L19 17L21 23L16 19L11 23L13 17L8 13H14L16 7Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда в квадрате",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="26" height="26" stroke="#563AF0" strokeWidth="2" fill="none" rx="4"/>
          <path d="M16 7L18 13H24L19 17L21 23L16 19L11 23L13 17L8 13H14L16 7Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Минималистичная звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L19 13H28L21 18L24 27L16 22L8 27L11 18L4 13H13L16 4Z" stroke="#563AF0" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      name: "Двойная звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14 9H20L15 13L17 19L12 15L7 19L9 13L4 9H10L12 3Z" fill="#563AF0" opacity="0.7"/>
          <path d="M20 13L22 19H28L23 23L25 29L20 25L15 29L17 23L12 19H18L20 13Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда с точками",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20.12 12.24H30.24L22.06 18.26L26.18 28.5L16 22.48L5.82 28.5L9.94 18.26L1.76 12.24H11.88L16 2Z" fill="#563AF0"/>
          <circle cx="8" cy="8" r="1.5" fill="#563AF0"/>
          <circle cx="24" cy="8" r="1.5" fill="#563AF0"/>
          <circle cx="28" cy="20" r="1.5" fill="#563AF0"/>
          <circle cx="4" cy="20" r="1.5" fill="#563AF0"/>
          <circle cx="16" cy="28" r="1.5" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда-снежинка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4V28M4 16H28M8 8L24 24M24 8L8 24" stroke="#563AF0" strokeWidth="2"/>
          <path d="M16 4L14 8L16 12L18 8L16 4Z" fill="#563AF0"/>
          <path d="M16 20L14 24L16 28L18 24L16 20Z" fill="#563AF0"/>
          <path d="M4 16L8 14L12 16L8 18L4 16Z" fill="#563AF0"/>
          <path d="M20 16L24 14L28 16L24 18L20 16Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Округлая звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C16 2 18 10 20 12C22 10 30 2 30 2C30 2 22 10 20 12C22 14 30 30 30 30C30 30 22 22 20 20C18 22 2 30 2 30C2 30 10 22 12 20C10 18 2 2 2 2C2 2 10 10 12 12C10 10 16 2 16 2Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Угловатая звезда",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1L19 10L28 7L21 14L31 16L21 18L28 25L19 22L16 31L13 22L4 25L11 18L1 16L11 14L4 7L13 10L16 1Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда с тенью",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3L21.12 13.24H31.24L23.06 19.26L27.18 29.5L17 23.48L6.82 29.5L10.94 19.26L2.76 13.24H12.88L17 3Z" fill="#563AF0" opacity="0.3"/>
          <path d="M16 2L20.12 12.24H30.24L22.06 18.26L26.18 28.5L16 22.48L5.82 28.5L9.94 18.26L1.76 12.24H11.88L16 2Z" fill="#563AF0"/>
        </svg>
      )
    },
    {
      name: "Звезда с свечением",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M16 2L20.12 12.24H30.24L22.06 18.26L26.18 28.5L16 22.48L5.82 28.5L9.94 18.26L1.76 12.24H11.88L16 2Z" fill="#563AF0" filter="url(#glow)"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="typo-h1 text-4xl md:text-6xl text-white mb-6">
            Варианты звёздочек
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            15 различных вариантов звёздочек в стиле проекта для использования в интерфейсе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {starVariants.map((variant, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {variant.svg}
              </div>
              <h3 className="typo-h3 text-white text-sm">
                {variant.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="typo-h2 text-2xl text-white mb-4">
              Как использовать
            </h2>
            <p className="text-white/80 text-left">
              Каждая звёздочка создана в едином стиле проекта с использованием цвета <span className="text-primary font-mono">#563AF0</span>. 
              Вы можете скопировать SVG код любой звёздочки и использовать её в своих компонентах. 
              Все звёздочки адаптивны и хорошо масштабируются для различных размеров. Включены варианты с градиентами, тенями и эффектами свечения.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StarAnimations;