import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AnimationShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <style>
        {`
          /* Button Animation Styles */
          .btn-press-1 {
            transition: all 0.1s ease;
          }
          .btn-press-1:active {
            transform: scale(0.95);
            box-shadow: inset 0 4px 8px rgba(0,0,0,0.3);
          }

          .btn-press-2 {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .btn-press-2:active {
            transform: translateY(4px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }

          .btn-press-3 {
            transition: all 0.15s ease-out;
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
          }
          .btn-press-3:active {
            transform: translateY(6px);
            box-shadow: 0 0px 0px rgba(0,0,0,0.2);
          }

          .btn-press-4 {
            transition: all 0.1s ease;
            transform-origin: center;
          }
          .btn-press-4:active {
            transform: scale(0.9) rotate(2deg);
          }

          .btn-press-5 {
            transition: all 0.2s ease;
            border: 2px solid rgba(255,255,255,0.3);
          }
          .btn-press-5:active {
            transform: scale(0.98);
            border-color: rgba(255,255,255,0.8);
            background: rgba(255,255,255,0.1);
          }

          .btn-press-6 {
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .btn-press-6:active {
            transform: scale(1.1);
          }

          .btn-press-7 {
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
          }
          .btn-press-7:active {
            transform: scale(0.96);
          }
          .btn-press-7:active::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
          }

          @keyframes ripple {
            to {
              width: 200px;
              height: 200px;
              opacity: 0;
            }
          }

          .btn-press-8 {
            transition: all 0.15s ease;
            transform-style: preserve-3d;
          }
          .btn-press-8:active {
            transform: rotateX(10deg) scale(0.98);
          }

          .btn-press-9 {
            transition: all 0.2s ease;
            filter: brightness(1);
          }
          .btn-press-9:active {
            transform: scale(0.94);
            filter: brightness(1.2) saturate(1.3);
          }

          .btn-press-10 {
            transition: all 0.1s ease;
            animation: float 3s ease-in-out infinite;
          }
          .btn-press-10:active {
            transform: scale(0.85) rotate(-5deg);
            animation-play-state: paused;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .demo-button {
            width: 200px;
            height: 50px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            user-select: none;
          }
        `}
      </style>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="typo-h1 text-4xl text-white mb-4">
            10 Вариантов Анимации Нажатия Кнопки
          </h1>
          <p className="text-white/80 mb-6">
            Нажмите на любую кнопку, чтобы увидеть анимацию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Button 1 - Scale Down */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">1. Сжатие с тенью</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-1 bg-blue-500 hover:bg-blue-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 2 - Push Down */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">2. Вдавливание</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-2 bg-green-500 hover:bg-green-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 3 - Button Press */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">3. Физическое нажатие</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-3 bg-purple-500 hover:bg-purple-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 4 - Rotate and Scale */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">4. Поворот с сжатием</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-4 bg-red-500 hover:bg-red-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 5 - Border Glow */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">5. Свечение границы</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-5 bg-orange-500 hover:bg-orange-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 6 - Bounce */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">6. Отскок</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-6 bg-pink-500 hover:bg-pink-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 7 - Ripple Effect */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">7. Эффект волны</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-7 bg-cyan-500 hover:bg-cyan-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 8 - 3D Press */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">8. 3D наклон</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-8 bg-indigo-500 hover:bg-indigo-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 9 - Brightness Change */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">9. Яркость и насыщенность</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-9 bg-yellow-500 hover:bg-yellow-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>

          {/* Button 10 - Floating with Stop */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">10. Плавающая с остановкой</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <button className="demo-button btn-press-10 bg-teal-500 hover:bg-teal-600 text-white">
                Нажми меня
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">
            Каждая анимация имеет уникальный эффект нажатия
          </p>
          <p className="text-white/60 text-sm">
            Попробуйте нажать и удерживать кнопки для лучшего понимания анимации
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationShowcase;