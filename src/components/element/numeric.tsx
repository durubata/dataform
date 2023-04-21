import React, { useState } from 'react';

interface NumericInputProps {
    min?: number;
    max?: number;
    step: number;
    initialValue: number;
    onChange: (value: number) => void;
}

export const NumericInput: React.FC<NumericInputProps> = ({
    min,
    max,
    step,
    initialValue,
    onChange,
}) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (
            (min === undefined || newValue >= min) &&
            (max === undefined || newValue <= max)
        ) {
            setValue(newValue);
            onChange(newValue);
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
                className="bg-blue-400 text-white p-2 rounded-l focus:outline-none"
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
                className="w-full text-center border-t border-b border-blue-400 focus:border-blue-500 focus:outline-none"
            />
            <button
                onClick={increment}
                className="bg-blue-400 text-white p-2 rounded-r focus:outline-none"
            >
                +
            </button>
        </div>
    );
};

