import { Transition } from '@headlessui/react';
import  React,{ useState } from 'react';
import { Icon, iconType } from '../../assets/icons/list';

export const CollapseLayout = (props: {
  title: string;
  className?: string;
  children: any;
  inArray?: boolean;
}) => {
  const [isOpen, setOpen] = useState(false);

  const classes = isOpen
    ? ' w-full shadow  bg-[#00000011] rounded-xl p-[2px] '
    : ' w-full shadow  bg-[#00000011] p-4 ';

  return (
    <div className={props.inArray ? '' : `mb-10 mt-2`}>
      {props.title && (
        <div
          onClick={e => setOpen(!isOpen)}
          className="mb-2 flex justify-between items-center cursor-pointer"
        >
          <h3>{props.title}</h3>
          {isOpen ?
          <Icon
            name={iconType.FaChevronRight}
            aria-hidden="true"
            className=""
          />
          :
          <Icon
            name={iconType.FaChevronDown}
            aria-hidden="true"
            className=""
          />
          }
        </div>
      )}
      <div className={` ${props.className} ${classes}`}>
        <Transition
          show={!isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-4">{props.children}</div>
        </Transition>
      </div>
    </div>
  );
};
