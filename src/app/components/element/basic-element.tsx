import { useState } from 'react';
import { Label } from './label';
import { Icon } from 'assets/icons/list';
import { DataformStoreProps, useDataformStore } from 'context/store';
import { NumberInput } from './number';
import { basicElementList } from './basic-element-list';

export const BasicElement = ({
  keyPath = '',
  label = '',
  labelPosition = 'inline',
  placeholderInside = false,
  icon = undefined,
  type = 'string',
  controlType = 'input',
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

  const Element: any =
    basicElementList[controlType] || basicElementList['input'];

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
      {labelPosition === 'top' && label && labelControl}
      <div className="flex items-center w-full gap-2 ">
        {labelPosition === 'left' && label && labelControl}
        {icon && (
          <div
            className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc] ${
              isFocused ? 'text-blue-500' : ''
            }`}
          >
            <Icon name={icon} color="ff0000" size={24} />
          </div>
        )}
        {labelPosition === 'inline' && label && labelControl}
        {type === 'number' && (
          <NumberInput
            initialValue={undefined}
            onChange={onChangeNumber}
            step={0}
          />
        )}

        <Element
          {...props}
          onFocus={onFocus}
          type={type}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          className={`block w-full px-4 py-2 mt-1 border bg-[#ffffffcc]  border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300`}
          placeholder={label || ''}
        />
      </div>
      {(labelPosition === 'bottom' || labelPosition === 'right') &&
        label &&
        labelControl}
      {errorMessage && (
        <div className="mt-2 text-sm text-red-600">{errorMessage}</div>
      )}
    </div>
  );
};
