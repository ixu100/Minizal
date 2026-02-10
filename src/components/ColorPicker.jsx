import React from 'react';

const ColorPicker = ({ currentColor, onColorChange }) => {
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFA500', '#800080'];

  return (
    <div className="color-picker">
      <label>Text Color: </label>
      <select 
        value={currentColor}
        onChange={(e) => onColorChange(e.target.value)}
      >
        {colors.map(color => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorPicker;