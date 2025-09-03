import React from 'react';
import Header from "@/components/Header";

const CheckmarkAnimations = () => {
  const checkmarkVariants = [
    {
      name: "Простая галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16L12 22L26 8" stroke="#563AF0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Изогнутая галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16C8 18 10 20 12 22C16 18 20 14 26 8" stroke="#563AF0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Толстая галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16L12 22L26 8" stroke="#563AF0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Галочка в кружке",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="#563AF0" strokeWidth="2" fill="none"/>
          <path d="M10 16L14 20L22 12" stroke="#563AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Заполненная галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="#563AF0"/>
          <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Квадратная галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="24" height="24" stroke="#563AF0" strokeWidth="2" fill="none" rx="4"/>
          <path d="M10 16L14 20L22 12" stroke="#563AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Заполненный квадрат",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="24" height="24" fill="#563AF0" rx="4"/>
          <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Минималистичная галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 18L12 22L24 10" stroke="#563AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Двойная галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16L10 20L18 12" stroke="#563AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 16L18 20L26 12" stroke="#563AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Стрелка-галочка",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16L12 24L28 8" stroke="#563AF0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 16L12 24" stroke="#563AF0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Варианты галочек
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            10 различных вариантов галочек в стиле проекта для использования в интерфейсе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {checkmarkVariants.map((variant, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {variant.svg}
              </div>
              <h3 className="text-white font-medium text-sm">
                {variant.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Как использовать
            </h2>
            <p className="text-white/80 text-left">
              Каждая галочка создана в едином стиле проекта с использованием цвета <span className="text-primary font-mono">#563AF0</span>. 
              Вы можете скопировать SVG код любой галочки и использовать её в своих компонентах. 
              Все галочки адаптивны и хорошо масштабируются для различных размеров.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckmarkAnimations;