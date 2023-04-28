import React, { useState } from 'react';
import { AiOutlineCheckSquare, } from 'react-icons/ai';

const CustomCheckbox = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    onChange(!checked);
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
        <AiOutlineCheckSquare className="text-xl" />
      )}
      <label className="ml-1">{label}</label>
    </div>
  );
};

export default CustomCheckbox;
