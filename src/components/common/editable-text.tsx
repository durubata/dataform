import React, { useState, useEffect } from 'react';
import { ButtonCancel, ButtonOk } from '../element/control-button';

export const EditableText = (props: { value: string; update; }) => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(props.value);
    }, []);

    let timer;
    let delay = 200;
    let prevent = false;

    const doDoubleClickAction = stepId => {
        setEditMode(true);
    };

    const handleClick = stepId => {
        timer = setTimeout(function () {
            prevent = false;
        }, delay);
    };

    const handleDoubleClick = stepId => {
        clearTimeout(timer);
        prevent = true;
        doDoubleClickAction(stepId);
    };

    const update = e => {
        setEditMode(false);
        props.update(value);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        editMode ? (
            <div className="w-full flex">
                <input className="w-full" placeholder="Rename" onChange={handleChange} value={value} id="standard-error-helper-text" />
                <ButtonOk clickHandler={update} className=' text-center ' />
                <ButtonCancel clickHandler={e => setEditMode(false)} />
            </div>
        ) : (
            <div onClick={handleClick} onDoubleClick={handleDoubleClick} className="w-full">
                {value}
            </div>
        )
    );
};
