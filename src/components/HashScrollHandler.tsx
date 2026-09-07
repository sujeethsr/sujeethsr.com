'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scrolls to a #section on the homepage once it's loaded/navigated to,
// then cleans the hash out of the URL so it doesn't linger after arriving.
const HashScrollHandler: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);

    const timeoutId = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Remove the hash from the URL once we've scrolled there,
        // without triggering a page reload or adding to browser history.
        window.history.replaceState(null, '', pathname);
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default HashScrollHandler;
