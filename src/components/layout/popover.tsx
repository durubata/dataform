import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Icon, iconType } from '../../assets/icons/list';

export function PopoverLayout(props: { children, open?, icon?}) {

  return (
    <div className="fixed top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={`${open ? '' : 'text-opacity-90'}   group w-full justify-between inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
              <span className="flex gap-4 items-center">
                <span className="p-2 shadow-md bg-slate-100 text-lg"><Icon name={props.icon || 'IoOpenOutline'} /></span>
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 left-1/2 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">Some Items
                {props.children}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
