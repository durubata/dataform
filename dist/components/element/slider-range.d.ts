import React from 'react';
interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    initialMinValue?: number;
    initialMaxValue?: number;
    onChange: (minValue: number, maxValue: number) => void;
}
export declare const SliderRangeInput: React.FC<SliderProps>;
export {};
