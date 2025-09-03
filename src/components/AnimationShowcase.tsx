import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnimationShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <style>
        {`
          :root{
            --tg-spoiler-dot-size: 8px;
            --tg-spoiler-dot-color: rgba(255,255,255,.95);
            --tg-spoiler-fade: .18s;
            --tg-spoiler-twinkle-a: .9;
            --tg-spoiler-twinkle-b: .55;
          }

          .tg-spoiler{
            position: relative;
            display: inline;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            text-decoration: none;
            outline: none;
          }

          .tg-spoiler::after{
            content:"";
            position: absolute;
            inset: -2px;
            pointer-events: auto;
            background:
              radial-gradient(var(--tg-spoiler-dot-color) 36%, transparent 37%) 0 0/var(--tg-spoiler-dot-size) var(--tg-spoiler-dot-size),
              radial-gradient(var(--tg-spoiler-dot-color) 36%, transparent 37%) calc(var(--tg-spoiler-dot-size)/2) calc(var(--tg-spoiler-dot-size)/2)/var(--tg-spoiler-dot-size) var(--tg-spoiler-dot-size);
            border-radius: 4px;
            opacity: var(--tg-spoiler-twinkle-a);
            transition: opacity var(--tg-spoiler-fade) linear;
            animation:
              tg-spoiler-drift 10s linear infinite,
              tg-spoiler-twinkle 2.2s ease-in-out infinite alternate;
          }

          .tg-spoiler.revealed::after{
            opacity: 0;
            pointer-events: none;
          }

          .tg-spoiler.hiding::after{
            opacity: var(--tg-spoiler-twinkle-a);
            pointer-events: auto;
          }

          @media (hover:hover){
            .tg-spoiler:active::after{
              opacity: 0;
              pointer-events: none;
              transition: none;
            }
          }

          @keyframes tg-spoiler-drift{
            from { background-position: 0px 0, calc(var(--tg-spoiler-dot-size)/2) calc(var(--tg-spoiler-dot-size)/2); }
            to   { background-position: 200px 0, calc(200px + var(--tg-spoiler-dot-size)/2) calc(var(--tg-spoiler-dot-size)/2); }
          }
          @keyframes tg-spoiler-twinkle{
            from { opacity: var(--tg-spoiler-twinkle-a); }
            to   { opacity: var(--tg-spoiler-twinkle-b); }
          }

          @media (prefers-reduced-motion: reduce){
            .tg-spoiler::after{ animation: none; }
          }

          .tg-spoiler a{ pointer-events: none; }
          .tg-spoiler.revealed a{ pointer-events: auto; }
        `}
      </style>
      
      <script>
        {`
          (function(){
            const DURATION_MS = 20000;

            document.querySelectorAll('[data-spoiler]').forEach(sp=>{
              let timer = null;
              const isTouchOnly = window.matchMedia('(hover: none)').matches;

              sp.addEventListener('click', (e)=>{
                if(!isTouchOnly){
                  e.preventDefault();
                  if(sp.classList.contains('revealed')){
                    sp.classList.remove('revealed');
                    sp.classList.add('hiding');
                    setTimeout(()=> sp.classList.remove('hiding'), 180);
                  }else{
                    sp.classList.add('revealed');
                  }
                  return;
                }

                e.preventDefault();
                sp.classList.add('revealed');
                sp.classList.remove('hiding');
                clearTimeout(timer);
                timer = setTimeout(()=>{
                  sp.classList.remove('revealed');
                  sp.classList.add('hiding');
                  setTimeout(()=> sp.classList.remove('hiding'), 180);
                }, DURATION_MS);
              }, {passive:false});

              sp.setAttribute('tabindex', '0');
              sp.setAttribute('role', 'button');
              sp.setAttribute('aria-label', 'Показать скрытый текст');
              sp.addEventListener('keydown', (e)=>{
                if(e.key === 'Enter' || e.key === ' '){
                  e.preventDefault();
                  sp.click();
                }
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
                <span className="tg-spoiler" data-spoiler>
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
                <span className="tg-spoiler" data-spoiler>
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
                <span className="tg-spoiler" data-spoiler>
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