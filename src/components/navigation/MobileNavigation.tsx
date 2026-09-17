import React from 'react';
import Link from 'next/link';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface MobileNavigationProps {
  readonly navItems: NavItem[];
  readonly isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navItems,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;