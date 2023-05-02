import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { emojiMartCustom } from '../../assets/icons/emoji-mart-custom';
import { Icon } from '../../assets/icons/list';

export function IconPicker() {
  const [value, setValue] = useState<any>();

  const handleEmojiSelect = (emoji: any) => {
    if (emoji.src) {
      setValue(<Icon name={emoji.id} size={20} />);
    } else {
      setValue(emoji.native);
    }
  };

  return (
    <div className=" ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`   ${
                open ? '' : 'text-opacity-90'
              }   group w-full justify-between inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="flex gap-4 items-center">
                Pick <span className="p-2 shadow-md bg-slate-50">{value}</span>
              </span>
              <ChevronDownIcon
                className={`${
                  open ? '' : 'text-opacity-70'
                }   ml-2 h-5 w-5 text-orange-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute ">
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  custom={emojiMartCustom}
                />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
