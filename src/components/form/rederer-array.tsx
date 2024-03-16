import { ButtonAdd, ButtonDelete } from '../element/control-button';
import { DataformStoreProps, useDataformStore } from '../../context/store';
import { renderProperties } from './rederer';
import React, { useEffect, useState } from 'react';
import { Icon, IconKeys, iconType } from '../../assets/icons/list';
import { CollapseLayout } from '../layout/collapse';

export const RenderArray = (props: { id; prop: any; keyPath: string, hideLabel?: boolean, classNames?: string, noAdd?: boolean }) => {
  const { prop, keyPath, hideLabel, classNames, noAdd } = props;

  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    return true;
  };

  const { getData, setData, addArrayItem, removeArrayItem, refreshList, setActivePath, getActivePath } = useDataformStore(state => state, shouldNotUpdate);
  const [itemStates, setItemState] = useState<any>({});
  const [arrayItems, setArrayItems] = useState<any>();

  const handleClick = (e: any, _index: number) => {
    e.preventDefault();
    setItemState({ ...itemStates, [_index]: !itemStates[_index] });
  };

  useEffect(() => {
    const defaultData = prop['x-default-data']
    if (defaultData && !getData(props.id, keyPath)) {
      setData(props.id, keyPath, defaultData);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(getData(props.id, keyPath))) {
      setArrayItems(getData(props.id, keyPath));
    } else {
      setArrayItems([]);
    }
  }, [refreshList[keyPath], getData(props.id, keyPath)]);

  const inlineDelete = prop.items.type !== 'object' && prop.items.type !== 'array';
  const classes = 'flex items-center justify-between text-gray-900 p-4 flex just cursor-pointer w-full rounded-2xl';
  const getClass = (_index: number) => {
    if (itemStates[_index]) {
      return classes + 'cursor-pointer w-full border-b-2 p-4 border-blue-500';
    }
    return classes;
  };

  // const getTitle = (idx, _title) => {
  //   let resolvedTitle = _title;
  //   if (resolvedTitle?.startsWith('{{')) {
  //     resolvedTitle = resolveArrayTemplate(resolvedTitle, keyPath + '.' + idx, getData(props.id, '')) || '';
  //     if (resolvedTitle) return resolvedTitle
  //   }
  //   return resolvedTitle + ' ' + (idx + 1);
  // }

  const getTitle = (idx) => {
    const _arrayItems = getData(props.id, keyPath);
    const _item = _arrayItems[idx];
    let title;
    if (prop.items.title && !prop.items.title.startsWith('{{')) {
      title = prop.items.title ? prop.items.title + ' ' + (idx + 1) : null;
    }
    if (!title) {
      title = _item?.itemTitle || _item?.title || _item?.name;
    }
    return title || (idx + 1)
  }

  const getIcon = (idx) => {
    const _arrayItems = getData(props.id, keyPath);
    const _item = _arrayItems[idx];
    const _icon = _item?.itemIcon || _item?.icon;
    if (!_icon) return null;
    if (_icon && typeof _icon === 'string') {
      return <div className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc]`}>
        {_icon?.length === 2 ? _icon : <Icon name={_icon as IconKeys} color="ff0000" size={24} />}
      </div>
    } else if (_icon && typeof _icon === 'object') {
      return <div className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc]`}>
        {_icon?.src ? <Icon name={_icon.name} color="ff0000" size={24} /> : _icon?.native}
      </div>
    }

    return null
  }

  const updateTitle = (title) => {
    const _arrayItems = getData(props.id, keyPath);
    const _newArrayItems = _arrayItems.map((item, idx) => {
      if (idx === 0) {
        return { ...item, itemTitle: title }
      }
      return item
    })
    setData(props.id, keyPath, _newArrayItems)
  }

  const propType = prop.items.type;
  const defaultItem = propType === 'object' ? {} : propType === 'array' ? [] : '';

  let arrayComponent;
  if (['number', 'string'].includes(propType) || prop.items.layout === 'card') {
    arrayComponent = arrayItems?.map((item: any, _index: number) => (
      <div key={_index} className="flex items-center  text-slate-500 ">
        <span className="drag-handle cursor-grab mr-1 lg:mr-2 ">
          <Icon color="#888" name={iconType.MdDragIndicator} />
        </span>
        {_index + 1}
        <div className='w-full px-2 lg:px-4'>
          {renderProperties({
            id: props.id,
            properties: { [_index]: { ...prop.items, title: '' } },
            parentKeyPath: `${keyPath}`,
            index: _index,
            getData,
            setActivePath,
            getActivePath,
          })}
        </div>
        <div className=" w-[10px] mr-[20px] lg:w-[20px] lg:mr-[30px]">
          <ButtonDelete clickHandler={() => removeArrayItem(props.id, keyPath, _index)} />
        </div>
      </div>
    ));
  } else {
    arrayComponent = arrayItems?.map((item: any, _index: number) => {
      const _title = getTitle(_index)
      return (
        <CollapseLayout updateTitle={updateTitle} title={_title} icon={getIcon(_index)} deleteHandler={() => removeArrayItem(props.id, keyPath, _index)} setActivePath={() => setActivePath(props.id, keyPath + '/' + _index)} >
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
                id: props.id,
                properties: { [_index]: { ...prop.items, title: '', layout: 'card' } },
                parentKeyPath: `${keyPath}`,
                index: _index,
                getData,
                setActivePath,
                getActivePath,
              })}
            </div>
          </div>
        </CollapseLayout>
      )
      // <div key={_index} className={_index === arrayItems.length - 1 ? '' : 'mb-4  '}   >
      //   <div className={getClass(_index)}>
      //     <div key={_index} onClick={e => handleClick(e, _index)} className="flex-grow"   >
      //       {_title}
      //     </div>
      //     <div className=" w-[10px] mr-[20px] lg:w-[20px] lg:mr-[30px]">
      //       <ButtonDelete />
      //     </div>
      //   </div>
      //   <Transition
      //     show={itemStates[_index] || false}
      //     enter="transition-opacity duration-75"
      //     enterFrom="opacity-0"
      //     enterTo="opacity-100"
      //     leave="transition-opacity duration-150"
      //     leaveFrom="opacity-100"
      //     leaveTo="opacity-0"
      //   >

      //   </Transition>
      // </div>
    });
  }

  return (
    <div key={keyPath} className=" mb-10" onClick={() => setActivePath(props.id, keyPath)}>
      {prop.title && !hideLabel && <h3 className="mb-2">{prop.title}</h3>}
      <div className={classNames}>
        {arrayComponent}
      </div>
      {!noAdd && !prop.readOnly && <div className="flex items-center justify-center my-2">
        <ButtonAdd clickHandler={() => addArrayItem(props.id, keyPath, defaultItem)} />
      </div>
      }
    </div>
  );
};
