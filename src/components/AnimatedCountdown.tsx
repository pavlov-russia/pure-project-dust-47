import { useState, useEffect } from "react";

interface AnimatedCountdownProps {
  onComplete: () => void;
}

const AnimatedCountdown = ({ onComplete }: AnimatedCountdownProps) => {
  const [count, setCount] = useState(7);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCount(prev => prev - 1);
          setIsAnimating(false);
        }, 500); // Half of animation duration
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      // Count reached 0, trigger popup
      setTimeout(onComplete, 500);
    }
  }, [count, onComplete]);

  return (
    <span 
      className={`
        inline-block text-white font-bold mx-1
        ${isAnimating ? 'animate-elastic-scale' : ''}
      `}
      style={{
        animation: isAnimating ? 'elasticScale 1s ease-out' : 'none'
      }}
    >
      {count}
    </span>
  );
};

export default AnimatedCountdown;