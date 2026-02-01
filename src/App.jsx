import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';

function App() {
  const [textColor, setTextColor] = useState('#000000');

  return (
    <div className="App">
      <ColorPicker 
        currentColor={textColor}
        onColorChange={setTextColor}
      />
      <div style={{ color: textColor }}>
        <h1>Sample Text</h1>
        <p>This text will change color based on your selection.</p>
      </div>
    </div>
  );
}

export default App;