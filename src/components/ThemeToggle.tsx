import React from 'react';
import { useTheme } from '../theme/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'var(--button-bg)',
        color: 'var(--button-text)'
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'} Toggle Theme
    </button>
  );
};