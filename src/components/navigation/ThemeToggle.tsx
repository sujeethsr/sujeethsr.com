'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      style={{
        width: '52px',
        height: '28px',
        borderRadius: '999px',
        border: 'none',
        cursor: 'pointer',
        padding: '3px',
        position: 'relative',
        transition: 'background 0.3s ease',
        background: isDark
          ? 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)'
          : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Track icons */}
      <span style={{
        position: 'absolute',
        left: '6px',
        fontSize: '11px',
        transition: 'opacity 0.3s',
        opacity: isDark ? 1 : 0,
      }}>🌙</span>
      <span style={{
        position: 'absolute',
        right: '6px',
        fontSize: '11px',
        transition: 'opacity 0.3s',
        opacity: isDark ? 0 : 1,
      }}>☀️</span>

      {/* Thumb */}
      <span style={{
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        background: isDark ? '#e2e8f0' : '#ffffff',
        position: 'absolute',
        top: '3px',
        left: isDark ? '27px' : '3px',
        transition: 'left 0.3s ease, background 0.3s ease',
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
      }}>
        {isDark ? '🌑' : '🌤'}
      </span>
    </button>
  );
};

export default ThemeToggle;
