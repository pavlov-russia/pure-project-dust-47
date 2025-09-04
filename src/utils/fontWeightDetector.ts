export const detectFontWeight = (fileName: string): string => {
  const nameLower = fileName.toLowerCase();
  
  // Специальное определение весов для TT Fors Trial
  if (nameLower.includes('variable')) {
    return '200-900'; // Variable font range
  } else if (nameLower.includes('medium')) {
    return '500';
  } else if (nameLower.includes('semibold') || nameLower.includes('demibold')) {
    return '600';
  }
  
  // Fallback для других шрифтов
  if (nameLower.includes('thin') || nameLower.includes('hairline')) {
    return '100';
  } else if (nameLower.includes('extralight') || nameLower.includes('ultralight')) {
    return '200';
  } else if (nameLower.includes('light')) {
    return '300';
  } else if (nameLower.includes('regular') || nameLower.includes('normal')) {
    return '400';
  } else if (nameLower.includes('bold')) {
    return '700';
  } else if (nameLower.includes('extrabold') || nameLower.includes('ultrabold')) {
    return '800';
  } else if (nameLower.includes('black') || nameLower.includes('heavy')) {
    return '900';
  }
  
  // По умолчанию возвращаем normal (400)
  return '400';
};

export const getFontWeightName = (weight: string): string => {
  const weightMap: { [key: string]: string } = {
    '100': 'Thin',
    '200': 'Extra Light',
    '300': 'Light',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'DemiBold',
    '700': 'Bold',
    '800': 'Extra Bold',
    '900': 'Black'
  };
  
  return weightMap[weight] || 'Regular';
};

export const extractFontFamily = (fileName: string): string => {
  // Всегда возвращаем "TT Fors Trial" для всех загружаемых шрифтов
  return "TT Fors Trial";
};