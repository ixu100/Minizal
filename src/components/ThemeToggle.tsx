import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};