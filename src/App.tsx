import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh',
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <header style={{ padding: '1rem' }}>
        <ThemeToggle />
      </header>
      {/* Rest of your app content */}
    </div>
  );
}

export default App;