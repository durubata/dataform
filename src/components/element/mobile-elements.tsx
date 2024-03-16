import { DataformStoreProps, useDataformStore } from '../../context/store';
import React, { useEffect, useState } from 'react';
import { Icon } from '@/assets/icons/list';

export const MobileElements = ({
  id,
  keyPath = '',
  label = '',
  labelPosition = '',
  placeholderInside = false,
  icon = undefined,
  image = undefined,
  type = 'string',
  format = '',
  controlType = undefined,
  errorMessage = '',
  className = '',
  variant = '',
  compact = false,
  readOnly = false,
  hideLabel = false,
  valueMap,
  max = 100,
  min = 0,
  initialValue,
  step = 1,
  extraProps = {},
  creatable = false,
  multiple = false,
  layout,
  description,
  helpText,
  errorText,
  required,
  ...props
}) => {

  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[props.keyPath] !== next.refreshList[props.keyPath]) return false;
    return true;
  };
  const { getData, setData, setStateItem } = useDataformStore(state => state, shouldNotUpdate);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    setChecked(getData(props.id, props.keyPath));
  }, [getData(props.id, props.keyPath)]);


  const handleClick = (e: any, option) => {
    e.preventDefault();
    e.stopPropagation();
    let newChecked;
    if (props.maxItems && checked?.length >= props.maxItems) {
      setStateItem({ notice: { message: 'max item reached' } });
      return;
    }
    newChecked = checked ? [...checked, option] : [option];
    setChecked(newChecked);
    setData(props.id, props.keyPath, newChecked.map(option => ({ title: option.label, icon: option.icon, name: option.label, ...option })))
  };

  let options = props.options as any;
  options =
    (typeof options === 'string'
      ? options.split(',').map(item => ({ label: item, value: item }))
      : props.options) || [];

  return (
    <div className='flex flex-wrap items-center justify-start'>
      {props.label && (
        <legend className="text-base font-semibold leading-6 text-gray-900">
          {props.label}
        </legend>
      )}
      {options.map((option, index) => (
        <div key={index}
          className={`hover:bg-cyan-100 relative  text-center justify-center items-center m-2 p-2 rounded-lg  cursor-pointer`}
          onClick={e => handleClick(e, option)}
        >
          {option.icon && (
            <button className="p-2 shadow-product rounded-lg border-2 border-gray-50">
              <Icon
                className="h-10 w-10 flex-none  bg-gray-50"
                name={option.icon}
              />
            </button>
          )}
          {option.label && !option['x-hide-label'] &&
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor="candidates" className="font-medium text-gray-900">
                {option.label}
              </label>
            </div>
          }
        </div>
      ))}
    </div>
  );
};
