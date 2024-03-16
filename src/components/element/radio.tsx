import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Icon, IconKeys } from '@/components/common/icons/list';

export function RadioInput(props) {
  const [selected, setSelected] = useState(props.options[0]);

  const onChange = (nValue) => {
    props.onChange({ target: { value: nValue } })
    setSelected(nValue)
  }

  let options = props.options as any;
  if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
    options = options.map((item: any) => ({ label: item, value: item }))
  }

  const getOptionIconOrImage = (_option) => {
    let imgElement = null
    if (_option.image) {
      imgElement = <img src={_option.image} alt="" className="w-10 h-10" />
    } else if (_option.icon && typeof _option.icon === 'string') {
      imgElement = <Icon name={_option.icon as IconKeys} color="ff0000" size={24} />
    } else if (_option.icon && typeof _option.icon === 'object') {
      imgElement = _option.icon?.src ? <Icon name={_option.icon.name} color="ff0000" size={24} /> : _option.icon?.native
    }

    if (imgElement) {
      return <div className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc]}`}>{imgElement} </div>
    }
    return null;
  }

  return (
    <div className="w-full max-w-md">
      <RadioGroup value={selected} onChange={onChange}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="flex items-center">
          {options.map(item => (
            <RadioGroup.Option
              key={item.value}
              value={item.value}
              className={({ active, checked }) => `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'} relative flex cursor-pointer text-center rounded-lg m-1 shadow-md focus:outline-none`}  >
              {({ active, checked }) => (
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm ">
                    {getOptionIconOrImage(item)}
                    {item.label &&
                      <RadioGroup.Label as="p" className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}  >
                        <span>{item.label}</span>
                      </RadioGroup.Label>
                    }
                    {item.description &&
                      <RadioGroup.Description
                        as="span" className={`flex gap-2 whitespace-nowrap ${checked ? 'text-sky-100' : 'text-slate-400'}`} >
                        <span>{item.description}</span>
                      </RadioGroup.Description>
                    }
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
