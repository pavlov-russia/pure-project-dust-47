import React from 'react';
import { cn } from '@/lib/utils';

interface SectionCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ children, className, ...rest }) => {
  return (
    <section 
      className={cn(
        "mx-auto max-w-6xl rounded-[16px] md:rounded-[24px] relative overflow-hidden px-4 py-4 md:px-12 md:py-16",
        "before:absolute before:inset-0 before:pointer-events-none",
        "before:bg-[radial-gradient(140px_70px_at_calc(100%-36px)_50%,rgba(255,255,255,0.35),rgba(255,255,255,0.14)_45%,transparent_75%)]",
        "before:mix-blend-screen before:opacity-90",
        "after:absolute after:inset-0 after:pointer-events-none after:opacity-[0.025]",
        "after:bg-[url('data:image/svg+xml,%3Csvg_viewBox=%270_0_400_400%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noiseFilter%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]",
        "after:bg-[length:200px_200px]",
        className
      )}
      style={{
        backdropFilter: 'blur(28px) saturate(160%)',
        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4), 0 12px 40px rgba(17,1,61,0.25)',
        isolation: 'isolate'
      }}
      {...rest}
    >
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;