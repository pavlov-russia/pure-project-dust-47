import React from 'react';
import { Type, Palette, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BrandTypography: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Фирменная типографика
          </h1>
          <p className="text-muted-foreground text-lg">
            Система шрифтов и типографических стилей проекта
          </p>
        </div>

        {/* Typography Rules */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              Правила применения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 text-sm">
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">H1 — Заголовок главный</span>
                <span className="text-muted-foreground">Вес 800, цвет #563AF0</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">H2 — Подзаголовок</span>
                <span className="text-muted-foreground">Вес 600, адаптивный размер</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">H3 — Подзаголовок меньший</span>
                <span className="text-muted-foreground">Вес 500, адаптивный размер</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">Body — Основной текст</span>
                <span className="text-muted-foreground">Вес 400, цвет #272727</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">Caption — Подписи</span>
                <span className="text-muted-foreground">Вес 300, 12px, цвет #7962F4</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">.u-strong — Акценты в тексте</span>
                <span className="text-muted-foreground">Вес 600 (DemiBold)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded border">
                <span className="font-medium">.btn — CTA кнопки</span>
                <span className="text-muted-foreground">Bold, UPPERCASE, #563AF0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Examples */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Примеры использования
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <h1 className="typo-h1">Заголовок H1 <span className="u-strong">Акцент</span></h1>
              <h2 className="typo-h2">Подзаголовок H2</h2>
              <h3 className="typo-h3">Подзаголовок H3</h3>
              <p className="typo-body">
                Основной текст. Ключевые слова <span className="u-strong">выделяем DemiBold</span>. 
                Цветовые акценты <span className="u-accent">используем точечно</span>.
              </p>
              <button className="btn">Получить КП</button>
              <small className="typo-caption block">Подпись / caption</small>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Цветовая палитра
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center space-y-2">
                <div className="w-full h-16 rounded-lg" style={{ backgroundColor: '#563AF0' }}></div>
                <div className="text-sm">
                  <div className="font-medium">Primary</div>
                  <div className="text-muted-foreground">#563AF0</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-full h-16 rounded-lg" style={{ backgroundColor: '#7962F4' }}></div>
                <div className="text-sm">
                  <div className="font-medium">Primary Light</div>
                  <div className="text-muted-foreground">#7962F4</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-full h-16 rounded-lg border" style={{ backgroundColor: '#FFFFFF' }}></div>
                <div className="text-sm">
                  <div className="font-medium">White</div>
                  <div className="text-muted-foreground">#FFFFFF</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-full h-16 rounded-lg" style={{ backgroundColor: '#E9E9E9' }}></div>
                <div className="text-sm">
                  <div className="font-medium">Muted</div>
                  <div className="text-muted-foreground">#E9E9E9</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-full h-16 rounded-lg" style={{ backgroundColor: '#272727' }}></div>
                <div className="text-sm">
                  <div className="font-medium">Dark</div>
                  <div className="text-muted-foreground">#272727</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CSS Classes */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              CSS классы для использования
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background/30 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="space-y-2">
                <div><span className="text-primary">.typo-h1</span> — Главные заголовки</div>
                <div><span className="text-primary">.typo-h2</span> — Подзаголовки</div>
                <div><span className="text-primary">.typo-h3</span> — Подзаголовки меньшие</div>
                <div><span className="text-primary">.typo-body</span> — Основной текст</div>
                <div><span className="text-primary">.typo-caption</span> — Подписи и мелкий текст</div>
                <div><span className="text-primary">.u-strong</span> — Жирное выделение в тексте</div>
                <div><span className="text-primary">.u-accent</span> — Цветовое выделение</div>
                <div><span className="text-primary">.u-muted</span> — Приглушенный текст</div>
                <div><span className="text-primary">.u-allcaps</span> — Текст заглавными буквами</div>
                <div><span className="text-primary">.btn</span> — CTA кнопки</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BrandTypography;