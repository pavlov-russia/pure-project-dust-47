import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnimationShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <style>
        {`
          .tg-sp{
            all: unset;
            display: inline;
            position: relative;
            cursor: pointer;
            color: #fff;
            line-height: inherit;
            background: transparent !important;
            border: 0 !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .tg-sp::after{
            content: "";
            position: absolute;
            inset: -2px;
            pointer-events: auto;
            background:
              radial-gradient(rgba(255,255,255,.95) 36%, transparent 37%) 0 0/8px 8px,
              radial-gradient(rgba(255,255,255,.95) 36%, transparent 37%) 4px 4px/8px 8px;
            opacity: .9;
            transition: opacity .18s linear;
            animation: sp-drift 10s linear infinite, sp-twinkle 2.2s ease-in-out infinite alternate;
            -webkit-mask: 
              radial-gradient(closest-side, #000 80%, transparent 100%);
            mask: 
              radial-gradient(closest-side, #000 80%, transparent 100%);
          }

          .tg-sp.revealed::after{ opacity: 0; pointer-events: none; }

          @media (hover:hover){
            .tg-sp:hover::after{ opacity: 0; pointer-events: none; }
          }

          @keyframes sp-drift{
            from{ background-position: 0 0, 4px 4px; }
            to  { background-position: 200px 0, calc(200px + 4px) 4px; }
          }
          @keyframes sp-twinkle{
            from{ opacity:.9; } to{ opacity:.55; }
          }

          @media (prefers-reduced-motion: reduce){
            .tg-sp::after{ animation: none; }
          }
        `}
      </style>
      
      <script>
        {`
          (function(){
            const DURATION = 20000;
            const isTouchOnly = window.matchMedia('(hover: none)').matches;

            document.querySelectorAll('[data-sp]').forEach(el=>{
              el.setAttribute('role','button');
              el.setAttribute('tabindex','0');
              el.setAttribute('aria-label','Показать скрытый текст');

              let timer=null;

              const reveal=()=>{
                el.classList.add('revealed');
                clearTimeout(timer);
                timer=setTimeout(()=> el.classList.remove('revealed'), DURATION);
              };

              el.addEventListener('click', e=>{
                if(!isTouchOnly) return;
                e.preventDefault(); reveal();
              }, {passive:false});

              el.addEventListener('keydown', e=>{
                if(!isTouchOnly) return;
                if(e.key==='Enter' || e.key===' '){ e.preventDefault(); reveal(); }
              });
            });
          })();
        `}
      </script>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Варианты форматирования текста
          </h1>
          <p className="text-white/80 mb-6">
            Примеры различных стилей написания текста
          </p>
        </div>

        <div className="grid gap-6">
          {/* Italic */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Курсив</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                <em>Это текст написан курсивом</em>
              </p>
              <code className="text-xs text-white/60 mt-2 block">&lt;em&gt;Это текст написан курсивом&lt;/em&gt;</code>
            </CardContent>
          </Card>

          {/* Bold */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Жирный</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                <strong>Это жирный текст</strong>
              </p>
              <code className="text-xs text-white/60 mt-2 block">&lt;strong&gt;Это жирный текст&lt;/strong&gt;</code>
            </CardContent>
          </Card>

          {/* Underline */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Подчёркивание</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                <u>Это подчёркнутый текст</u>
              </p>
              <code className="text-xs text-white/60 mt-2 block">&lt;u&gt;Это подчёркнутый текст&lt;/u&gt;</code>
            </CardContent>
          </Card>

          {/* Strikethrough */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Зачёркнутый</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                <s>Это зачёркнутый текст</s>
              </p>
              <code className="text-xs text-white/60 mt-2 block">&lt;s&gt;Это зачёркнутый текст&lt;/s&gt;</code>
            </CardContent>
          </Card>

          {/* Hidden/Spoiler */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Скрытый (как в Telegram)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                Это секретная информация: {" "}
                <span className="tg-sp" data-sp>
                  скрытый текст, кликните чтобы увидеть
                </span>
              </p>
              <code className="text-xs text-white/60 mt-2 block">Телеграм-стиль спойлер с анимированными точками</code>
            </CardContent>
          </Card>

          {/* Quote */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Цитата</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-white/90 text-lg border-l-4 border-white/40 pl-4 italic">
                "Это цитата или важное высказывание"
              </blockquote>
              <code className="text-xs text-white/60 mt-2 block">&lt;blockquote&gt;"Это цитата или важное высказывание"&lt;/blockquote&gt;</code>
            </CardContent>
          </Card>

          {/* Monospace */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Моноширинный</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                <code className="bg-white/20 px-2 py-1 rounded font-mono">Это моноширинный текст</code>
              </p>
              <code className="text-xs text-white/60 mt-2 block">&lt;code&gt;Это моноширинный текст&lt;/code&gt;</code>
            </CardContent>
          </Card>

          {/* Combined */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Комбинированное форматирование</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-lg">
                <strong><em>Жирный курсив</em></strong>, <u><strong>подчёркнутый жирный</strong></u>, и даже{" "}
                <span className="tg-sp" data-sp>
                  скрытый жирный курсив
                </span>
              </p>
              <code className="text-xs text-white/60 mt-2 block">Комбинация различных стилей форматирования</code>
            </CardContent>
          </Card>

          {/* Typography showcase */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Пример статьи с разными форматами</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-bold text-white">Заголовок статьи</h2>
              
              <p className="text-white/90">
                Обычный текст с <strong>важными</strong> выделениями и <em>акцентами</em>.
              </p>
              
              <blockquote className="border-l-4 border-white/40 pl-4 italic text-white/80">
                "Цитата выдающегося человека о важной теме"
              </blockquote>
              
              <p className="text-white/90">
                В коде используется <code className="bg-white/20 px-1 py-0.5 rounded font-mono text-sm">console.log()</code> для вывода информации.
              </p>
              
              <p className="text-white/90">
                <s>Устаревшая информация</s> была заменена на актуальную.
              </p>
              
              <p className="text-white/90">
                Секретная информация: {" "}
                <span className="tg-sp" data-sp>
                  только для посвящённых
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80">
            Все примеры готовы к использованию в вашем проекте
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationShowcase;