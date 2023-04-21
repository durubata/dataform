import Input from '@/components/input';
import { useState } from 'react';

const App = () => {
    const [labelPosition, setLabelPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');

    const handleLabelPositionChange = (position: 'top' | 'left' | 'right' | 'bottom') => {
        setLabelPosition(position);
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold">Input Demo</h1>
                <div className="flex items-center">
                    <button
                        className={`mr-2 ${labelPosition === 'top' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleLabelPositionChange('top')}
                    >
                        Top
                    </button>
                    <button
                        className={`mr-2 ${labelPosition === 'left' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleLabelPositionChange('left')}
                    >
                        Left
                    </button>
                    <button
                        className={`mr-2 ${labelPosition === 'right' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleLabelPositionChange('right')}
                    >
                        Right
                    </button>
                    <button
                        className={`mr-2 ${labelPosition === 'bottom' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleLabelPositionChange('bottom')}
                    >
                        Bottom
                    </button>
                </div>
            </div>
            <div className="p-10">
                <Input
                    id="example"
                    label="Example Label"
                    position={labelPosition}
                    placeholderInside={true}
                />
            </div>
        </div>
    );
};

export default App;
