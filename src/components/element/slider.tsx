import React, { useState } from 'react';
import { LayoutCard } from '../layout/card';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange: (value: number) => void;
}

export const SliderInput: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 0,
  onChange = null,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-full outline-none appearance-none cursor-pointer transition duration-200 ease-in hover:bg-blue-400 focus:bg-blue-500"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
            ((value - min) / (max - min)) * 100
          }%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`,
        }}
      />
      <div className="text-xs font-semibold text-gray-600 mt-1">{value}</div>
    </>
  );
};
