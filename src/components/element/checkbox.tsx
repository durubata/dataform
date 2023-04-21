import React, { useState } from 'react';
import { AiOutlineCheckSquare, AiOutlineSnippets } from 'react-icons/ai';

export const CheckboxInput = (props: { label: string }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = (e) => {
        setChecked(!checked);
        console.log(e)
    };

    return (
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={() => { }}
            />
            {checked ? (
                <AiOutlineCheckSquare className="text-xl" />
            ) : (
                <AiOutlineSnippets className="text-xl" />
            )}
            <label className="ml-1">{props.label}</label>
        </div>
    );
};
