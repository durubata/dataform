import React from 'react';
interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    initialValue?: number;
    onChange: (value: number) => void;
}
export declare const SliderInput: React.FC<SliderProps>;
export {};
