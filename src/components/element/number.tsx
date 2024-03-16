import React, { useState } from 'react';

interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  value: number | undefined;
  onChange: any
  onBlur: any
}

export const NumberInput: React.FC<NumberInputProps> = ({
  min,
  max,
  step,
  value: initialValue,
  onChange,
  onBlur,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (
      (min === undefined || newValue >= min) &&
      (max === undefined || newValue <= max)
    ) {
      setValue(newValue);
      onChange({ target: { value: newValue } });
    }
  };

  const increment = () => {
    const newValue = value + step;
    if (max === undefined || newValue <= max) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  const decrement = () => {
    const newValue = value - step;
    if (min === undefined || newValue >= min) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={decrement}
        className="bg-blue-400 text-white p-1 rounded-l focus:outline-none w-6 text-center"
      >
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className="w-full text-center border-0 p-1  focus:border-0 focus:outline-none"
      />
      <button
        onClick={increment}
        className="bg-blue-400 text-white p-1 rounded-r focus:outline-none w-6 text-center"
      >
        +
      </button>
    </div>
  );
};
