import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { LayoutCard } from '../layout/card';

export const GradientColorPicker = () => {
    const [color1, setColor1] = useState('#3b82f6');
    const [color2, setColor2] = useState('#9333EA');
    const [showPicker1, setShowPicker1] = useState(false);
    const [showPicker2, setShowPicker2] = useState(false);

    const togglePicker1 = () => setShowPicker1(!showPicker1);
    const togglePicker2 = () => setShowPicker2(!showPicker2);

    const handleColorChange1 = (color) => {
        setColor1(color.hex);
    };

    const handleColorChange2 = (color) => {
        setColor2(color.hex);
    };

    return (
        <>
            <div className="relative">
                <button
                    className="bg-blue-500 text-white py-1 px-2 rounded"
                    onClick={togglePicker1}
                >
                    Pick Color 1
                </button>
                {showPicker1 && (
                    <div className="absolute z-10 mt-2">
                        <div
                            className="fixed inset-0 h-full w-full"
                            onClick={togglePicker1}
                        />
                        <SketchPicker color={color1} onChange={handleColorChange1} />
                    </div>
                )}
            </div>
            <div className="relative mt-2">
                <button
                    className="bg-blue-500 text-white py-1 px-2 rounded"
                    onClick={togglePicker2}
                >
                    Pick Color 2
                </button>
                {showPicker2 && (
                    <div className="absolute z-10 mt-2">
                        <div
                            className="fixed inset-0 h-full w-full"
                            onClick={togglePicker2}
                        />
                        <SketchPicker color={color2} onChange={handleColorChange2} />
                    </div>
                )}
            </div>
            <div
                className="w-full h-10 mt-4 rounded"
                style={{
                    background: `linear-gradient(to right, ${color1}, ${color2})`,
                }}
            ></div>
        </>
    );
};

