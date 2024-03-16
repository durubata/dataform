import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { Icon, iconType } from '../../assets/icons/list';
import { ButtonDelete } from '../element/control-button';
import { EditableText } from '../common/editable-text';

export const CollapseLayout = (props: {
  title: string;
  className?: string;
  children: any;
  deleteHandler?: any;
  inArray?: boolean;
  updateTitle?: any;
  icon?: any;
  setActivePath?: any
}) => {
  const [isOpen, setOpen] = useState(false);

  let classes = isOpen
    ? ' w-full  '
    : ' w-full shadow pt-1 p-2 lg:p-4 ';

  // classes += ` max-h-[600px] overflow-y-auto `

  const toggle = () => {
    setOpen(!isOpen);
    if (props.setActivePath) {
      props.setActivePath()
    }
  }

  return (
    <div className={props.inArray ? ' text-sm  mb-4 mt-2 shadow-cart rounded ' : `text-sm mb-4 mt-2 shadow-cart rounded `}>
      <div onClick={toggle} className=" p-4 flex justify-between items-center cursor-pointer  border-b-2 border-gray-300 gap-2 ">
        {props.icon}{props.updateTitle ? <EditableText value={props.title} update={props.updateTitle} /> : props.title}
        <div className='flex items-center gap-2 '>
          {props.deleteHandler && (
            <div className=" w-[10px] mr-[20px] lg:w-[20px] lg:mr-[30px]">
              <ButtonDelete clickHandler={props.deleteHandler} />
            </div>
          )}
          {isOpen ?
            <Icon
              name={iconType.FaChevronDown}
              aria-hidden="true"
              className=""
            />
            :
            <Icon
              name={iconType.FaChevronRight}
              aria-hidden="true"
              className=""
            />
          }
        </div>
      </div>
      {isOpen && <div className=' p-4 '>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={` ${props.className} ${classes} `}
        >
          <div className="mt-4">{props.children}</div>
        </Transition>
      </div>
      }
    </div>
  );
};
