import { Icon, iconType } from '../../assets/icons/list';
import { useDataformStore } from '../../context/store';
import React, { useState } from 'react';

export const CheckboxInput = (props: {
  maxItems?: number;
  minItems?: number;
  label: string;
  keyPath: string;
  options?: {
    label: string;
    value: string;
    description?: string;
    image?: string;
  }[];
}) => {
  const [checked, setChecked] = useState<string[]>([]);
  const { setStateItem } = useDataformStore(state => ({
    setStateItem: state.setStateItem,
  }));

  const handleClick = (e: any, _value: string) => {
    if (checked.includes(_value)) {
      setChecked(checked.filter(value => value !== _value));
    } else {
      if (props.maxItems && checked.length >= props.maxItems) {
        setStateItem({ notice: { message: 'max item reached' } });
        return;
      }
      setChecked([...checked, _value]);
    }
  };

  let options = props.options as any;
  options =
    (typeof options === 'string'
      ? options.split(',').map(item => ({ label: item, value: item }))
      : props.options) || [];

  return (
    <div>
      {props.label && (
        <legend className="text-base font-semibold leading-6 text-gray-900">
          {props.label}
        </legend>
      )}
      {options.map((option, index) => (
        <div
          className="relative flex items-start pb-4 pt-3.5 cursor-pointer"
          onClick={e => handleClick(e, option.value)}
        >
          {option.image && (
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={option.image}
              alt=""
            />
          )}
          <div className="min-w-0 flex-1 text-sm leading-6">
            {option.label && (
              <label htmlFor="candidates" className="font-medium text-gray-900">
                {' '}
                {option.label}{' '}
              </label>
            )}
            {option.description && (
              <p id="candidates-description" className="text-gray-500">
                {' '}
                {option.description}{' '}
              </p>
            )}
          </div>
          <div className="ml-3 flex h-6 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              checked={checked.includes(option.value)}
              onChange={() => { }}
            />
          </div>
        </div>
      ))}

      <div>
        <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {projects.map(project => (
            <li
              key={project.name}
              className="col-span-1 flex rounded-md shadow-sm"
            >
              <div
                className={classNames(
                  project.bgColor,
                  'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                )}
              >
                {project.initials}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <a
                    href={project.href}
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-500">{project.members} Members</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Open options</span>
                    <Icon
                      name={iconType.BiDotsVerticalRounded}
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const projects = [
  {
    name: 'Graph API',
    initials: 'GA',
    href: '#',
    members: 16,
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Component Design',
    initials: 'CD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
  },
  {
    name: 'Templates',
    initials: 'T',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'React Components',
    initials: 'RC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// export const CheckboxInput = (props: { label: string, keyPath: string }) => {
//     const [checked, setChecked] = useState(false);

//     const handleClick = (e) => {
//         setChecked(!checked);
//         console.log(e)
//     };

//     return (
//         <div className="flex items-center cursor-pointer" onClick={handleClick}>
//             <input
//                 type="checkbox"
//                 className="hidden"
//                 checked={checked}
//                 onChange={() => { }}
//             />
//             {checked ? (
//                 <AiOutlineCheckSquare className="text-xl" />
//             ) : (
//                 <AiOutlineSnippets className="text-xl" />
//             )}
//             <label className="ml-1">{props.label}</label>
//         </div>
//     );
// };
