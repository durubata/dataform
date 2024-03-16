import React, { useState } from 'react';
import { useDataformStore } from '../../context/store';
import { Icon } from '../../assets/icons/list';


export const ToggleInput = (props: any) => {
  const { id, keyPath, label, controlType, icon, hideLabel } = props;
  const shouldNotUpdate = (prev, next): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    return true;
  };

  const { getData, setData } = useDataformStore(state => state, shouldNotUpdate,);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(getData(id, keyPath));
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (e) => {
    setChecked(!checked);
    setValue(!checked);

    const pValue = processValue(!checked)
    setData(id, keyPath, pValue);
  };

  const processValue = (_value) => {
    if (!props.valueMap) return _value
    const pValue = props.valueMap[_value];
    return pValue;
  }

  const className = `${checked ? 'text-sky-100 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ' text-slate-400 '}  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'} relative flex cursor-pointer rounded-lg px-2 py-2 m-1 shadow-md focus:outline-none`

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <input type="checkbox" className="hidden" checked={checked} onChange={() => { }} />
      <div className={className} >
        <Icon name={icon} className="text-xl cursor-pointer" />
        {(!hideLabel && label) && <label className="ml-1 cursor-pointer">{label}</label>}
      </div>
    </div>
  );
};