import { ButtonAdd, ButtonDelete } from '../element/control-button';
import { DataformStoreProps, useDataformStore } from '../../context/store';
import { renderProperties } from './rederer';
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Icon, iconType } from '../../assets/icons/list';

export const RenderArray = (props: { prop: any; keyPath: string }) => {
  const { prop, keyPath } = props;

  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    return true;
  };

  const { getData, setData, addArrayItem, removeArrayItem, refreshList } =
    useDataformStore(state => state, shouldNotUpdate);
  const [itemStates, setItemState] = useState<any>({});
  const [arrayItems, setArrayItems] = useState<any>();

  const handleClick = (e: any, _index: number) => {
    e.preventDefault();
    setItemState({ ...itemStates, [_index]: !itemStates[_index] });
  };

  useEffect(() => {
    setArrayItems(getData(keyPath) || []);
  }, [refreshList[keyPath]]);

  const inlineDelete =
    prop.items.type !== 'object' && prop.items.type !== 'array';

  const classes =
    'flex items-center justify-between text-gray-900 p-4 flex just cursor-pointer w-full rounded-2xl bg-[#00000011]';
  const getClass = (_index: number) => {
    if (itemStates[_index]) {
      return classes + 'cursor-pointer w-full border-b-2 p-4 border-blue-500';
    }
    return classes;
  };

  const propType = prop.items.type;
  const defaultItem =
    propType === 'object' ? {} : propType === 'array' ? [] : '';

  let arrayComponent;
  if (['number', 'string'].includes(propType)) {
    arrayComponent = arrayItems?.map((item: any, _index: number) => (
      <div key={_index} className="flex items-center  text-slate-500 ">
        {' '}
        <span className="drag-handle cursor-grab mr-2 ">
          <Icon color="#888" name={iconType.MdDragIndicator} />
        </span>
        {_index + 1}
        {renderProperties({
          properties: { [_index]: { ...prop.items, title: '' } },
          parentKeyPath: `${keyPath}`,
          index: _index,
        })}{' '}
        <div className=" w-[20px] mr-[30px]">
          <ButtonDelete clickHandler={() => removeArrayItem(keyPath, _index)} />
        </div>
      </div>
    ));
  } else {
    arrayComponent = arrayItems?.map((item: any, _index: number) => (
      <div
        key={_index}
        className={_index === arrayItems.length - 1 ? '' : 'mb-4  '}
      >
        <div className={getClass(_index)}>
          <div
            key={_index}
            onClick={e => handleClick(e, _index)}
            className="flex-grow"
          >
            {prop.title + ' ' + (_index + 1)}
          </div>
          <div className=" w-[20px] mr-[30px]">
            <ButtonDelete
              clickHandler={() => removeArrayItem(keyPath, _index)}
            />
          </div>
        </div>
        <Transition
          show={itemStates[_index] || false}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-4">
            <div
              key={`${keyPath}.${_index}`}
              className={
                inlineDelete
                  ? ' flex justify-between items-center mr-7 d gap-2 '
                  : ''
              }
            >
              {renderProperties({
                properties: { [_index]: prop.items },
                parentKeyPath: `${keyPath}`,
                index: _index,
              })}
            </div>
          </div>
        </Transition>
      </div>
    ));
  }

  return (
    <div key={keyPath} className=" mb-10">
      <h3 className="mb-2">{prop.title}</h3>
      <div className={`  w-full shadow  bg-[#00000011] rounded-xl p-2`}>
        {arrayComponent}
      </div>
      <div className="flex items-center justify-center my-2">
        {' '}
        <ButtonAdd clickHandler={() => addArrayItem(keyPath, defaultItem)} />
      </div>
    </div>
  );
};
