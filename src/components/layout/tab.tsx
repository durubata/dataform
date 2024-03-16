import { Transition } from '@headlessui/react';
import React, { SetStateAction, useState } from 'react';

export const TabLayout = (props: {
  className?: string;
  tabs: { title: string; content: any }[];
  setActivePath?: any;
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (
    e: { preventDefault: () => void },
    index: SetStateAction<number>,
  ) => {
    e.preventDefault();
    setActiveTab(index);

    if (props.setActivePath) {
      props.setActivePath(index)
    }
  };

  const classes = ' bg-none text-gray-900 p-4 w-full rounded-xl';
  const getClass = (_index: number) => {
    if (activeTab === _index) {
      return classes + ' border-b-2 border-blue-500 bg-[#ffffffee]';
    }
    return classes;
  };

  return (
    <div
      className={` ${props.className} w-ful shadow bg-[#00000011] rounded-xl pb-2`}
    >
      <div className="flex just cursor-pointer w-full rounded-2xl p-2 bg-[#00000011]">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            onClick={e => handleTabClick(e, index)}
            className={getClass(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div>
        {props.tabs.map((tab, index) => (
          <div key={index}>
            <Transition
              show={activeTab === index}
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
    </div>
  );
};
