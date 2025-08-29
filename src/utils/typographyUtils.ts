// Утилиты для работы с типографикой и весами шрифтов
export const getTypographyClass = (weight: string): string => {
  const classMap: { [key: string]: string } = {
    '100': 'font-thin',
    '200': 'font-extralight', 
    '300': 'font-light',
    '400': 'font-normal',
    '500': 'font-medium',
    '600': 'font-semibold', // DemiBold
    '700': 'font-bold',
    '800': 'font-extrabold',
    '900': 'font-black'
  };
  
  return classMap[weight] || 'font-normal';
};

// Получение CSS переменной для веса шрифта
export const getFontWeightCSS = (weight: string): string => {
  return `font-weight: ${weight};`;
};

// Проверка доступности определенного веса в загруженных шрифтах
export const isWeightAvailable = (fontFamily: string, weight: string, loadedFonts: any[]): boolean => {
  return loadedFonts.some(font => 
    font.fontFamily === fontFamily && font.fontWeight === weight
  );
};

// Получение всех доступных весов для семейства шрифтов
export const getAvailableWeights = (fontFamily: string, loadedFonts: any[]): string[] => {
  return loadedFonts
    .filter(font => font.fontFamily === fontFamily)
    .map(font => font.fontWeight)
    .sort((a, b) => parseInt(a) - parseInt(b));
};