import { useTheme } from '../hooks/useTheme';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );