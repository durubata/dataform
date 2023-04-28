import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { ButtonDelete } from '../element/control-button';

export const AccordionLayout = (props: {
  className?: string;
  tabs: { title: string; content: any; deleteHandler?: any }[];
}) => {
  const [itemStates, setItemState] = useState<any>({});

  const handleClick = (e: any, _index: number) => {
    e.preventDefault();
    setItemState({ ...itemStates, [_index]: !itemStates[_index] });
  };

  const classes =
    'flex items-center justify-between text-gray-900 p-4 flex just cursor-pointer w-full rounded-2xl bg-[#00000011]';
  const getClass = (_index: number) => {
    if (itemStates[_index]) {
      return classes + 'cursor-pointer w-full border-b-2 p-4 border-blue-500';
    }
    return classes;
  };

  return (
    <div
      className={` ${props.className} w-full shadow  bg-[#00000011] rounded-xl p-2`}
    >
      {props.tabs.map((tab, _index) => (
        <div
          key={_index}
          className={_index === props.tabs.length - 1 ? '' : 'mb-4  '}
        >
          <div className={getClass(_index)}>
            <div
              key={_index}
              onClick={e => handleClick(e, _index)}
              className="flex-grow"
            >
              {tab.title}
            </div>
            <div className=" w-[20px] mr-[30px]">
              {tab.deleteHandler && (
                <ButtonDelete clickHandler={tab.deleteHandler} />
              )}
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
            <div className="mt-4">{tab.content}</div>
          </Transition>
        </div>
      ))}
    </div>
  );
};
