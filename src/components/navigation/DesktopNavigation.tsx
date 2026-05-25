import React from 'react';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface DesktopNavigationProps {
  readonly navItems: NavItem[];
  readonly scrollToSection: (href: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems, scrollToSection }) => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className="text-sm text-foreground hover:text-primary transition-colors duration-200 relative group whitespace-nowrap"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </button>
      ))}
    </div>
  );
};

export default DesktopNavigation;
