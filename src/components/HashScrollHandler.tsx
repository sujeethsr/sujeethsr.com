'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scrolls to a #section on the homepage once it's loaded/navigated to,
// since Next.js doesn't do this automatically on client-side navigation.
const HashScrollHandler: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);

    // Small delay so the page's content has actually rendered first.
    const timeoutId = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default HashScrollHandler;
