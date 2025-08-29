import React, { useState } from 'react';
import { H1, H2, H3, GradientHeading } from '@/components/Typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TypographyShowcase: React.FC = () => {
  const [headingText, setHeadingText] = useState('Пример заголовка с выделением');
  const [highlightWords, setHighlightWords] = useState('заголовка, выделением');
  const [headingType, setHeadingType] = useState<'h1' | 'h2' | 'h3' | 'gradient'>('h1');

  const renderPreviewHeading = () => {
    const wordsArray = highlightWords.split(',').map(word => word.trim()).filter(Boolean);
    
    switch (headingType) {
      case 'h1':
        return <H1 highlightWords={wordsArray}>{headingText}</H1>;
      case 'h2':
        return <H2 highlightWords={wordsArray}>{headingText}</H2>;
      case 'h3':
        return <H3 highlightWords={wordsArray}>{headingText}</H3>;
      case 'gradient':
        return <GradientHeading level={1} highlightWords={wordsArray}>{headingText}</GradientHeading>;
      default:
        return <H1 highlightWords={wordsArray}>{headingText}</H1>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Заголовок страницы */}
        <div className="text-center space-y-4">
          <GradientHeading level={1} highlightWords={['Типографика', 'DemiBold']}>
            Типографика с выделением DemiBold
          </GradientHeading>
          <p className="text-muted-foreground text-lg">
            Демонстрация концепции выделения ключевых слов в заголовках
          </p>
        </div>

        {/* Интерактивный конструктор */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Конструктор заголовков</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Панель управления */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="heading-text">Текст заголовка</Label>
                  <Input
                    id="heading-text"
                    value={headingText}
                    onChange={(e) => setHeadingText(e.target.value)}
                    placeholder="Введите текст заголовка"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="highlight-words">Ключевые слова (через запятую)</Label>
                  <Input
                    id="highlight-words"
                    value={highlightWords}
                    onChange={(e) => setHighlightWords(e.target.value)}
                    placeholder="слово1, слово2, слово3"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="heading-type">Тип заголовка</Label>
                  <Select value={headingType} onValueChange={(value: 'h1' | 'h2' | 'h3' | 'gradient') => setHeadingType(value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="h1">H1 - Главный заголовок</SelectItem>
                      <SelectItem value="h2">H2 - Заголовок раздела</SelectItem>
                      <SelectItem value="h3">H3 - Подзаголовок</SelectItem>
                      <SelectItem value="gradient">Градиентный заголовок</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Превью */}
              <div className="border-l border-border pl-6">
                <Label className="text-sm font-medium text-muted-foreground mb-4 block">Превью:</Label>
                <div className="min-h-[100px] flex items-center">
                  {renderPreviewHeading()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Примеры использования */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Примеры заголовков</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* H1 с выделением */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">H1 с выделением ключевых слов:</h4>
              <H1 highlightWords={['инновационное', 'решение']}>
                Наше инновационное решение для бизнеса
              </H1>
            </div>

            {/* H2 с выделением */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">H2 с выделением:</h4>
              <H2 highlightWords={['качество', 'сервис']}>
                Высокое качество и надежный сервис
              </H2>
            </div>

            {/* H3 с выделением */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">H3 с выделением:</h4>
              <H3 highlightWords={['современные', 'технологии']}>
                Используем современные технологии для достижения целей
              </H3>
            </div>

            {/* Без выделения */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Обычный заголовок без выделения:</h4>
              <H2>
                Стандартный заголовок без ключевых слов
              </H2>
            </div>

            {/* Градиентный заголовок */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Градиентный заголовок с выделением:</h4>
              <GradientHeading level={2} highlightWords={['будущее', 'уже']}>
                Будущее уже здесь
              </GradientHeading>
            </div>

          </CardContent>
        </Card>

        {/* Концепция */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Концепция типографики</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Фирменная типографика:</strong> В заголовках предусмотрено выделение 
                ключевых слов начертанием <span className="font-semibold">DemiBold (font-weight: 600)</span> 
                при остальном тексте, написанном начертанием Regular (font-weight: 400).
              </p>
              
              <h3 className="font-semibold mt-6 mb-3">Как использовать:</h3>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                <code>
                  {`<H1 highlightWords={['ключевые', 'слова']}>
  Заголовок с ключевые слова для выделения
</H1>`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default TypographyShowcase;