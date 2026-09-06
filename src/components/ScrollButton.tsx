'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  targetId,
  children,
  className = '',
  ariaLabel
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTarget = () => {
    if (pathname === '/') {
      // Already on the homepage — just scroll directly.
      const element = document.querySelector(`#${targetId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On a different page — go home first, then scroll once loaded.
      router.push(`/#${targetId}`);
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
