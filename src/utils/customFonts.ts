export interface StoredFont {
  name: string;
  fontFamily: string;
  fontWeight: string;
  dataUrl: string;
  originalFileName: string;
}

export const injectFontFace = (font: StoredFont): void => {
  const styleId = `custom-font-${font.fontFamily}`;
  
  // Remove existing style if it exists
  const existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create new style element
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @font-face {
      font-family: '${font.fontFamily}';
      src: url('${font.dataUrl}') format('truetype');
      font-weight: ${font.fontWeight};
      font-style: normal;
      font-display: swap;
    }
  `;
  
  document.head.appendChild(style);
};

export const applyGlobalFont = (fontFamily: string, weight: string = '400'): void => {
  // Update CSS custom property for global font family
  document.documentElement.style.setProperty('--custom-font-family', `'${fontFamily}', 'TT Fors Trial', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`);
  
  // Apply to body as fallback
  document.body.style.fontFamily = `'${fontFamily}', 'TT Fors Trial', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
  document.body.style.fontWeight = weight;
};

export const saveFontsToStorage = (fonts: StoredFont[]): void => {
  try {
    localStorage.setItem('customFonts', JSON.stringify(fonts));
  } catch (error) {
    console.error('Failed to save fonts to localStorage:', error);
  }
};

export const loadFontsFromStorage = (): StoredFont[] => {
  try {
    const stored = localStorage.getItem('customFonts');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load fonts from localStorage:', error);
    return [];
  }
};

export const loadFontsFromStorageAndApply = (): void => {
  const fonts = loadFontsFromStorage();
  
  // Inject all font faces
  fonts.forEach(font => {
    injectFontFace(font);
  });
  
  // Apply first font family globally through CSS custom property
  if (fonts.length > 0) {
    const fontFamily = fonts[0].fontFamily;
    // Update CSS custom property for global font family
    document.documentElement.style.setProperty('--custom-font-family', `'${fontFamily}', 'TT Fors Trial', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`);
    
    // Apply to body as fallback
    document.body.style.fontFamily = `'${fontFamily}', 'TT Fors Trial', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
  } else {
    // Reset to default fonts if no custom fonts
    document.documentElement.style.setProperty('--custom-font-family', `'TT Fors Trial', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`);
  }
};

export const generateCSSContent = (fonts: StoredFont[]): string => {
  return fonts.map(font => `
@font-face {
  font-family: '${font.fontFamily}';
  src: url('${font.dataUrl}') format('truetype');
  font-weight: ${font.fontWeight};
  font-style: normal;
  font-display: swap;
}
`).join('\n');
};

export const downloadCSS = (fonts: StoredFont[]): void => {
  const cssContent = generateCSSContent(fonts);
  const blob = new Blob([cssContent], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'custom-fonts.css';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};