import { DataformStoreProps, useDataformStore } from '../../context/store';
import React, { useEffect, useState } from 'react';
import { RenderArray } from '../form/rederer-array';
import { classNames, deepCopy } from '../../utils/common';

export const SocialLinkInput = (props: {
  id;
  maxItems?: number;
  minItems?: number;
  label: string;
  keyPath: string;
  prop?: any
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

  useEffect(() => {
    setChecked(getData(props.id, props.keyPath));
  }, [getData(props.id, props.keyPath)]);


  const handleClick = (e: any, option) => {
    e.preventDefault();
    e.stopPropagation();
    let newChecked;
    if (checked?.find((item: any) => item.value === option.value)) {
      newChecked = checked?.filter((_item: any) => _item.value !== option.value);
    } else {
      if (props.maxItems && checked?.length >= props.maxItems) {
        setStateItem({ notice: { message: 'max item reached' } });
        return;
      }
      newChecked = checked ? [...checked, option] : [option];
    }
    setChecked(newChecked);
    setData(props.id, props.keyPath, newChecked.map(option => ({ name: option.label, ...option })))
  };

  let options = props.options as any;
  options =
    (typeof options === 'string'
      ? options.split(',').map(item => ({ label: item, value: item }))
      : props.options) || [];

  const subProp = deepCopy(props.prop)
  delete subProp.enum;
  delete subProp['x-control'];
  return (
    <div>
      <RenderArray id={props.id} prop={subProp} keyPath={props.keyPath} hideLabel={true} noAdd={true} />
      <div className='flex flex-wrap items-center justify-start'>
        {props.label && (
          <legend className="text-base font-semibold leading-6 text-gray-900">
            {props.label}
          </legend>
        )}
        {options.map((option, index) => (
          <div
            className={classNames(checked?.find((item: any) => item.value === option.value) ? ' bg-cyan-400' : '', `relative  items-center m-2 p-2 rounded-full shadow cursor-pointer`)}
            onClick={e => handleClick(e, option)}
          >
            {option.image && (
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={option.image}
                alt=""
              />
            )}
            {option.label && !option['x-hide-label'] &&
              <div className="min-w-0 flex-1 text-sm leading-6">
                (
                <label htmlFor="candidates" className="font-medium text-gray-900">
                  {option.label}
                </label>
                )
                {option.description && (
                  <p id="candidates-description" className="text-gray-500">
                    {option.description}
                  </p>
                )}
              </div>
            }
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name={option.value}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
              checked={checked?.includes(option.value)}
              onChange={() => { }}
            />
          </div>
        ))}
      </div>
    </div>

  );
};
