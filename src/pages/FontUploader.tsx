import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, Download, Trash2, Type } from "lucide-react";
import Header from "@/components/Header";

interface FontFile {
  id: string;
  name: string;
  file: File;
  url: string;
  fontFamily: string;
}

const FontUploader = () => {
  const [fonts, setFonts] = useState<FontFile[]>([]);
  const [previewText, setPreviewText] = useState("Пример текста для предварительного просмотра");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type === "font/ttf" || file.name.endsWith(".ttf")) {
        const url = URL.createObjectURL(file);
        const fontFamily = file.name.replace(".ttf", "").replace(/[-_]/g, " ");
        
        const newFont: FontFile = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          file,
          url,
          fontFamily
        };

        // Создаем CSS @font-face правило
        const style = document.createElement("style");
        style.textContent = `
          @font-face {
            font-family: "${fontFamily}";
            src: url("${url}") format("truetype");
            font-weight: normal;
            font-style: normal;
          }
        `;
        document.head.appendChild(style);

        setFonts(prev => [...prev, newFont]);
        
        toast({
          title: "Шрифт загружен",
          description: `${file.name} успешно добавлен`,
        });
      } else {
        toast({
          title: "Неподдерживаемый формат",
          description: "Пожалуйста, загружайте только .ttf файлы",
          variant: "destructive",
        });
      }
    });
  };

  const removeFont = (id: string) => {
    const font = fonts.find(f => f.id === id);
    if (font) {
      URL.revokeObjectURL(font.url);
      setFonts(prev => prev.filter(f => f.id !== id));
      
      toast({
        title: "Шрифт удален",
        description: `${font.name} удален из проекта`,
      });
    }
  };

  const downloadFontCSS = () => {
    const cssContent = fonts.map(font => `
@font-face {
  font-family: "${font.fontFamily}";
  src: url("./fonts/${font.name}") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.font-${font.fontFamily.toLowerCase().replace(/\s+/g, "-")} {
  font-family: "${font.fontFamily}", sans-serif;
}
    `).join("\n");

    const blob = new Blob([cssContent], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "custom-fonts.css";
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "CSS файл загружен",
      description: "Скачайте файлы шрифтов и добавьте CSS в проект",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Загрузчик шрифтов
            </h1>
            <p className="text-muted-foreground text-lg">
              Загружайте фирменные .ttf шрифты для использования в проекте
            </p>
          </div>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Загрузка шрифтов
              </CardTitle>
              <CardDescription>
                Выберите .ttf файлы для загрузки в проект
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="font-upload">Файлы шрифтов (.ttf)</Label>
                <Input
                  id="font-upload"
                  type="file"
                  accept=".ttf,font/ttf"
                  multiple
                  onChange={handleFileUpload}
                  className="cursor-pointer"
                />
              </div>
              
              {fonts.length > 0 && (
                <Button onClick={downloadFontCSS} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Скачать CSS для шрифтов
                </Button>
              )}
            </CardContent>
          </Card>

          {fonts.length > 0 && (
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Предварительный просмотр
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="preview-text">Текст для предварительного просмотра</Label>
                  <Input
                    id="preview-text"
                    value={previewText}
                    onChange={(e) => setPreviewText(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div className="space-y-4">
                  {fonts.map((font) => (
                    <div key={font.id} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{font.fontFamily}</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFont(font.id)}
                          className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p 
                        className="text-lg"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        {previewText}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Класс: .font-{font.fontFamily.toLowerCase().replace(/\s+/g, "-")}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {fonts.length === 0 && (
            <Card className="glass border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Type className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Шрифты не загружены</h3>
                <p className="text-muted-foreground mb-4">
                  Загрузите .ttf файлы для начала работы с фирменными шрифтами
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default FontUploader;