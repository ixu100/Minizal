import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header>
          <ThemeToggle />
        </header>
        {/* Rest of your app content */}
      </div>
    </ThemeProvider>
  );
}

export default App;