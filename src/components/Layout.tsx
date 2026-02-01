import { useTheme } from '../hooks/useTheme';

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='layout'>
      <button onClick={toggleTheme} className='theme-toggle'>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      {children}
    </div>
  );
};