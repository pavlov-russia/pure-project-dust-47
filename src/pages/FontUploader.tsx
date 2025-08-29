import React, { useState, useRef, useCallback } from 'react';
import { Upload, Download, Trash2, Type, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  StoredFont, 
  injectFontFace, 
  applyGlobalFont, 
  saveFontsToStorage, 
  loadFontsFromStorage,
  downloadCSS 
} from '@/utils/customFonts';

const FontUploader: React.FC = () => {
  const [fonts, setFonts] = useState<StoredFont[]>(loadFontsFromStorage());
  const [previewText, setPreviewText] = useState('Пример текста для предпросмотра шрифта');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (!file.name.toLowerCase().endsWith('.ttf')) {
        toast({
          title: "Ошибка",
          description: `Файл ${file.name} не является TTF шрифтом`,
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        const fontFamily = file.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9]/g, '');
        
        const newFont: StoredFont = {
          name: file.name.replace(/\.[^/.]+$/, ""),
          fontFamily,
          dataUrl,
          originalFileName: file.name
        };

        // Immediately inject the font face
        injectFontFace(newFont);

        setFonts(prev => {
          const updated = [...prev, newFont];
          return updated;
        });

        toast({
          title: "Шрифт загружен",
          description: `${newFont.name} успешно добавлен`,
        });
      };

      reader.readAsDataURL(file);
    });

    // Clear the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [toast]);

  const handleApplyToProject = useCallback(() => {
    if (fonts.length === 0) {
      toast({
        title: "Нет шрифтов",
        description: "Сначала загрузите шрифты",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage
    saveFontsToStorage(fonts);
    
    // Inject all font faces
    fonts.forEach(font => {
      injectFontFace(font);
    });
    
    // Apply first font globally
    applyGlobalFont(fonts[0].fontFamily);

    toast({
      title: "Шрифты применены",
      description: `${fonts.length} шрифт(ов) применено к проекту`,
    });
  }, [fonts, toast]);

  const handleDownloadCSS = useCallback(() => {
    if (fonts.length === 0) {
      toast({
        title: "Нет шрифтов",
        description: "Сначала загрузите шрифты",
        variant: "destructive",
      });
      return;
    }

    downloadCSS(fonts);
    
    toast({
      title: "CSS файл загружен",
      description: "Файл с CSS для шрифтов сохранен",
    });
  }, [fonts, toast]);

  const handleDeleteFont = useCallback((index: number) => {
    const fontToDelete = fonts[index];
    
    // Remove the injected style
    const styleId = `custom-font-${fontToDelete.fontFamily}`;
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const updatedFonts = fonts.filter((_, i) => i !== index);
    setFonts(updatedFonts);
    saveFontsToStorage(updatedFonts);

    toast({
      title: "Шрифт удален",
      description: `${fontToDelete.name} удален из проекта`,
    });
  }, [fonts, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Управление шрифтами
          </h1>
          <p className="text-muted-foreground text-lg">
            Загружайте и управляйте фирменными шрифтами вашего проекта
          </p>
        </div>

        {/* Upload Section */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Загрузка шрифтов
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".ttf"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="font-upload"
              />
              <label 
                htmlFor="font-upload"
                className="flex-1 cursor-pointer"
              >
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium">Нажмите для выбора TTF файлов</p>
                  <p className="text-sm text-muted-foreground">Поддерживаются только файлы .ttf</p>
                </div>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        {fonts.length > 0 && (
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Предпросмотр шрифтов
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                placeholder="Введите текст для предпросмотра"
                className="mb-4"
              />
              
              <div className="grid gap-4">
                {fonts.map((font, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-background/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{font.name}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteFont(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p 
                      className="text-lg"
                      style={{ fontFamily: `'${font.fontFamily}', sans-serif` }}
                    >
                      {previewText}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        {fonts.length > 0 && (
          <Card className="glass">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleApplyToProject}
                  className="cta-glow flex-1"
                  size="lg"
                >
                  <Type className="h-5 w-5 mr-2" />
                  Загрузить в проект
                </Button>
                
                <Button 
                  onClick={handleDownloadCSS}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Скачать CSS
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                "Загрузить в проект" применит шрифты глобально и сохранит их для будущих сессий
              </p>
            </CardContent>
          </Card>
        )}

        {fonts.length === 0 && (
          <Card className="glass">
            <CardContent className="pt-6 text-center">
              <Type className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Шрифты не загружены</h3>
              <p className="text-muted-foreground">
                Загрузите TTF файлы шрифтов, чтобы начать работу
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FontUploader;