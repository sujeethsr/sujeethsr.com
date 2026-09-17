import React from 'react';
import Link from 'next/link';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface DesktopNavigationProps {
  readonly navItems: NavItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navItems,
}) => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm text-foreground hover:text-primary transition-colors duration-200 relative group whitespace-nowrap"
        >
          {item.name}

          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavigation;