export type StoredFont = {
  fontFamily: string;
  dataUrl: string; // data: URL for TTF
  weight?: string;
  style?: string;
};

const STORAGE_KEY = "custom_fonts_v1";

export const injectFontFace = (font: StoredFont) => {
  if (!font?.fontFamily || !font?.dataUrl) return;
  const style = document.createElement("style");
  style.setAttribute("data-custom-font", font.fontFamily);
  style.textContent = `
  @font-face {
    font-family: "${font.fontFamily}";
    src: url("${font.dataUrl}") format("truetype");
    font-weight: ${font.weight ?? "normal"};
    font-style: ${font.style ?? "normal"};
    font-display: swap;
  }
`;
  document.head.appendChild(style);
};

export const applyGlobalFont = (fontFamily: string) => {
  const fallback = 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
  const value = `"${fontFamily}", ${fallback}`;
  document.documentElement.style.setProperty("--app-font-family", value);
  document.body.style.fontFamily = value;
};

export const saveFontsToStorage = (fonts: StoredFont[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fonts));
  } catch {}
};

export const loadFontsFromStorageAndApply = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [] as StoredFont[];
    const fonts = JSON.parse(raw) as StoredFont[];
    fonts.forEach(injectFontFace);
    if (fonts.length) applyGlobalFont(fonts[0].fontFamily);
    return fonts;
  } catch {
    return [] as StoredFont[];
  }
};
