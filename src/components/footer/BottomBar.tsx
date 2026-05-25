// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Cpu, Zap } from 'lucide-react';

const BottomBar: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/30 flex justify-center items-center">
      <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-muted-foreground text-xs md:text-sm max-w-[320px] md:max-w-none">
        <span>© {currentYear}</span>
        <span className="text-primary font-semibold">Sujeeth S R</span>
        <span>· Powered by</span>
        <Cpu size={13} className="text-primary animate-pulse" />
        <span>AI &</span>
        <Zap size={13} className="text-primary animate-pulse" />
        <span>too much curiosity.</span>
      </div>
    </div>
  );
};

export default BottomBar;