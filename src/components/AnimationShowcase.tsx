import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, RefreshCw } from "lucide-react";

const AnimationShowcase = () => {
  const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const animations = [
    {
      id: 1,
      name: "Fade In Up",
      description: "Плавное появление снизу",
      className: "animate-fade-in",
      style: {
        animation: "fadeInUp 0.6s ease-out"
      }
    },
    {
      id: 2,
      name: "Scale Bounce",
      description: "Масштабирование с отскоком",
      className: "",
      style: {
        animation: "scaleBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      }
    },
    {
      id: 3,
      name: "Slide From Left",
      description: "Выезд слева с поворотом",
      className: "",
      style: {
        animation: "slideFromLeft 0.7s ease-out"
      }
    },
    {
      id: 4,
      name: "Elastic Scale",
      description: "Эластичное увеличение",
      className: "",
      style: {
        animation: "elasticScale 1s ease-out"
      }
    },
    {
      id: 5,
      name: "Matrix Drop",
      description: "Падение как в Матрице",
      className: "",
      style: {
        animation: "matrixDrop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    },
    {
      id: 6,
      name: "Glow Pulse",
      description: "Пульсирующее свечение",
      className: "",
      style: {
        animation: "glowPulse 1.5s ease-in-out infinite"
      }
    },
    {
      id: 7,
      name: "Wobble Rotate",
      description: "Покачивание с поворотом",
      className: "",
      style: {
        animation: "wobbleRotate 1.2s ease-out"
      }
    },
    {
      id: 8,
      name: "Matrix Drop",
      description: "Падение как в Матрице",
      className: "",
      style: {
        animation: "matrixDrop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    },
    {
      id: 9,
      name: "Rubber Band",
      description: "Резиновая лента",
      className: "",
      style: {
        animation: "rubberBand 1s ease-out"
      }
    },
    {
      id: 10,
      name: "Laser Beam",
      description: "Лазерный луч",
      className: "",
      style: {
        animation: "laserBeam 0.8s ease-out"
      }
    }
  ];

  const playAnimation = (id: number) => {
    setActiveAnimation(id);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => setActiveAnimation(null), 2000);
  };

  const restartAll = () => {
    setAnimationKey(prev => prev + 1);
    setActiveAnimation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes scaleBounce {
            0% { opacity: 0; transform: scale(0.3); }
            50% { opacity: 1; transform: scale(1.1); }
            70% { transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes slideFromLeft {
            0% { opacity: 0; transform: translateX(-100px) rotate(-10deg); }
            100% { opacity: 1; transform: translateX(0) rotate(0deg); }
          }
          
          @keyframes elasticScale {
            0% { opacity: 0; transform: scale(0); }
            60% { opacity: 1; transform: scale(1.2); }
            80% { transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes flipInY {
            0% { opacity: 0; transform: perspective(400px) rotateY(90deg); }
            40% { transform: perspective(400px) rotateY(-20deg); }
            60% { opacity: 1; transform: perspective(400px) rotateY(10deg); }
            80% { transform: perspective(400px) rotateY(-5deg); }
            100% { opacity: 1; transform: perspective(400px) rotateY(0deg); }
          }
          
          @keyframes glowPulse {
            0%, 100% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
            }
            50% { 
              opacity: 0.8; 
              transform: scale(1.05);
              box-shadow: 0 0 40px rgba(99, 102, 241, 0.8), 0 0 60px rgba(99, 102, 241, 0.4);
            }
          }
          
          @keyframes wobbleRotate {
            0% { opacity: 0; transform: rotate(-10deg) scale(0.8); }
            15% { transform: rotate(5deg) scale(1.1); }
            30% { transform: rotate(-3deg) scale(0.95); }
            45% { transform: rotate(2deg) scale(1.05); }
            60% { transform: rotate(-1deg) scale(0.98); }
            75% { transform: rotate(0.5deg) scale(1.02); }
            100% { opacity: 1; transform: rotate(0deg) scale(1); }
          }
          
          @keyframes matrixDrop {
            0% { 
              opacity: 0; 
              transform: translateY(-100px) scaleY(0.1);
              filter: brightness(0);
            }
            50% { 
              opacity: 1; 
              transform: translateY(10px) scaleY(1.1);
              filter: brightness(1.5);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scaleY(1);
              filter: brightness(1);
            }
          }
          
          @keyframes rubberBand {
            0% { opacity: 0; transform: scaleX(1) scaleY(1); }
            30% { opacity: 1; transform: scaleX(1.25) scaleY(0.75); }
            40% { transform: scaleX(0.75) scaleY(1.25); }
            50% { transform: scaleX(1.15) scaleY(0.85); }
            65% { transform: scaleX(0.95) scaleY(1.05); }
            75% { transform: scaleX(1.05) scaleY(0.95); }
            100% { opacity: 1; transform: scaleX(1) scaleY(1); }
          }
          
          @keyframes laserBeam {
            0% { 
              opacity: 0; 
              transform: scaleX(0) scaleY(1);
              background: linear-gradient(45deg, #ff0000, #ff6600);
            }
            50% { 
              opacity: 1; 
              transform: scaleX(1) scaleY(1);
              background: linear-gradient(45deg, #00ff00, #00ffff);
              box-shadow: 0 0 30px rgba(0, 255, 0, 0.8);
            }
            100% { 
              opacity: 1; 
              transform: scaleX(1) scaleY(1);
              background: linear-gradient(45deg, #6366f1, #8b5cf6);
            }
          }
        `}
      </style>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Варианты анимации
          </h1>
          <p className="text-white/80 mb-6">
            Нажмите на карточку, чтобы увидеть анимацию
          </p>
          <Button 
            onClick={restartAll}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            icon={<RefreshCw className="w-4 h-4" />}
          >
            Перезапустить все
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animations.map((animation) => (
            <Card 
              key={`${animation.id}-${animationKey}`}
              className="bg-white/10 border-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => playAnimation(animation.id)}
              style={activeAnimation === animation.id ? animation.style : {}}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-white font-semibold mb-2">
                  {animation.name}
                </h3>
                
                <p className="text-white/70 text-sm mb-4">
                  {animation.description}
                </p>
                
                <div className="text-xs text-white/50">
                  Вариант #{animation.id}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80">
            Выберите понравившуюся анимацию, и я применю её к нужному элементу
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationShowcase;