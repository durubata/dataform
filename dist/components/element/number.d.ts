import React from 'react';
interface NumberInputProps {
    min?: number;
    max?: number;
    step?: number;
    initialValue: number | undefined;
    onChange: (value: number) => void;
}
export declare const NumberInput: React.FC<NumberInputProps>;
export {};
