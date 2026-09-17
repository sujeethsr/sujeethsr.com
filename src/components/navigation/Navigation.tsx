'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileNavigation from './MobileNavigation';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Education', href: '/education' },
    { name: 'Projects', href: '/projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-card backdrop-blur-md border-x-0' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex justify-center">
            <DesktopNavigation
              navItems={navItems}
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <MobileNavigation
          navItems={navItems}
          isOpen={isOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;