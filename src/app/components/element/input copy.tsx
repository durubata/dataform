import React, { useEffect, useState } from 'react';
import { Label } from './label';
import { Icon } from 'assets/icons/list';
import { DataformStoreProps, useDataformStore } from 'context/store';
import { NumberInput } from './number';

export const Inputx = ({
  keyPath = '',
  label = '',
  labelPosition = 'inline',
  placeholderInside = false,
  icon = undefined,
  type = 'string',
  controlType = 'text',
  errorMessage = '',
  className = '',
  ...props
}) => {
  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    return true;
  };
  const { getData, setData } = useDataformStore(
    state => state,
    shouldNotUpdate,
  );

  const [value, setValue] = useState(getData(keyPath));
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChange = (e: { target: { value: any } }) => {
    setValue(e.target.value);
    setData(keyPath, e.target.value);
  };

  const onChangeNumber = (_value: number) => {
    setValue(_value);
    setData(keyPath, _value);
  };

  const labelControl = (
    <Label
      key={keyPath + '-label'}
      id={props.keyPath}
      isFocused={isFocused}
      label={label}
      position={labelPosition}
      className={`${
        ['left', 'inline'].includes(labelPosition) ? ' w-[200px]' : ''
      }`}
    />
  );
  return (
    <div
      key={keyPath}
      className={`${className} relative ${
        labelPosition === 'right' ? ' flex items-center gap-2' : ''
      }`}
    >
      {labelPosition === 'top' && labelControl}
      <div className="flex items-center w-full gap-2 ">
        {labelPosition === 'left' && labelControl}
        {icon && (
          <div
            className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc] ${
              isFocused ? 'text-blue-500' : ''
            }`}
          >
            <Icon name={icon} color="ff0000" size={24} />
          </div>
        )}
        {labelPosition === 'inline' && labelControl}
        {type === 'number' && (
          <NumberInput
            initialValue={undefined}
            onChange={onChangeNumber}
            step={0}
          />
        )}
        {type === 'string' && controlType === 'textarea' && (
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          />
        )}
        {type === 'string' && controlType !== 'textarea' && (
          <input
            {...props}
            onFocus={onFocus}
            type={type}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            className={`block w-full px-4 py-2 mt-1 border bg-[#ffffffcc]  border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300`}
            placeholder={label || ''}
          />
        )}
      </div>
      {(labelPosition === 'bottom' || labelPosition === 'right') &&
        labelControl}
      {errorMessage && (
        <div className="mt-2 text-sm text-red-600">{errorMessage}</div>
      )}
    </div>
  );
};
