import { DataformStoreProps, useDataformStore } from '../../context/store';
import React, { useState } from 'react';

export const CheckboxInput = (props: {
  id;
  maxItems?: number;
  minItems?: number;
  label: string;
  type?: string;
  keyPath: string;
  getOptionIconOrImage?: (option) => any;
  options?: {
    label: string;
    value: string;
    description?: string;
    image?: string;
  }[];
}) => {
  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[props.keyPath] !== next.refreshList[props.keyPath]) return false;
    return true;
  };
  const { getData, setData, setStateItem } = useDataformStore(state => state, shouldNotUpdate,);
  const [checked, setChecked] = useState<string[]>([]);

  const handleClick = (e: any, index: string) => {
    e.preventDefault();
    let uChecked = checked;
    if (checked.includes(index)) {
      uChecked = checked.filter(value => value !== index)
    } else {
      if (props.maxItems && checked.length >= props.maxItems) {
        setStateItem({ notice: { message: 'max item reached' } });
        return;
      }
      uChecked = [...checked, index]
    }
    setChecked(uChecked);
    setData(props.id, props.keyPath, uChecked);
  };

  let options = props.options as any;
  if (props.type === 'boolean') {
    options = [
      { label: 'Yes', value: true },
    ];
  } else if (props.type === 'string' && typeof options === 'string') {
    options = options?.split(',').map(item => ({ label: item, value: item }))
  }

  const getCheckedClass = (index) => {
    if (checked.includes(index)) {
      return 'bg-sky-900 bg-opacity-75 text-white';
    }
    return 'bg-white border-gray-300 text-gray-900';
  };

  return (
    <div>
      {props.label && (
        <legend className="text-base font-semibold leading-6 text-gray-900">
          {props.label}
        </legend>
      )}
      {options?.map((option, index) => (
        <div className={`relative flex items-center justify-center p-2 shadow rounded-xl gap-1 mb-2 cursor-pointer ${getCheckedClass(index)}`} onClick={e => handleClick(e, index)}  >
          {props.getOptionIconOrImage && props.getOptionIconOrImage(option)}
          <div className="min-w-0 flex-1 text-sm leading-6">
            {option.label && (
              <label htmlFor="candidates" className="font-medium ">
                {option.label}
              </label>
            )}
            {option.description && (
              <p id="candidates-description" className="text-gray-500">
                {option.description}
              </p>
            )}
          </div>
          <input
            id={props.keyPath}
            aria-describedby={props.label}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
            checked={checked.includes(option.value)}
            onChange={() => { }}
          />
        </div>
      ))}
    </div>
  );
};
