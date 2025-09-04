import { useState, useEffect } from "react";

interface AnimatedCountdownProps {
  onComplete: () => void;
  active: boolean;
  frozen: boolean;
}

const AnimatedCountdown = ({ onComplete, active, frozen }: AnimatedCountdownProps) => {
  const [count, setCount] = useState(7);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (frozen) {
      setIsAnimating(false);
      setCount(7);
      return;
    }
    if (!active) return;

    let outer: any;
    let inner: any;

    if (count > 0) {
      outer = setTimeout(() => {
        setIsAnimating(true);
        inner = setTimeout(() => {
          setCount(prev => prev - 1);
          setIsAnimating(false);
        }, 500); // Half of animation duration
      }, 1000);
    } else {
      outer = setTimeout(onComplete, 500);
    }

    return () => {
      if (outer) clearTimeout(outer);
      if (inner) clearTimeout(inner);
    };
  }, [count, onComplete, active, frozen]);

  return (
    <span 
      className={`
        inline-block text-white u-strong mx-1
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