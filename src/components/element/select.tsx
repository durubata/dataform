import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

export function SelectInput(props: any) {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  let options = props.options as any;
  if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
    options = options.map((item: any) => ({ label: item, value: item }))
  }

  let groupOptions = options;
  if (props.groupOptions) {
    groupOptions = Array.from(new Set([...(props.groupOptions || []), ...(options || [])]));
    if (Array.isArray(groupOptions) && typeof groupOptions[0] === 'string') {
      groupOptions = groupOptions.map((item: any) => ({ label: item, value: item }))
    }
  }

  useEffect(() => {
    if (props.value) {
      if (Array.isArray(props.value)) {
        setSelectedOption(groupOptions.filter((item: any) => props.value.includes(item.value)));
      } else {
        setSelectedOption(groupOptions.find((item: any) => item.value === props.value));
      }
    }
  }, []);

  const onchange = (_selectedOption) => {
    setSelectedOption(_selectedOption);
    const selValue = Array.isArray(_selectedOption) ? _selectedOption.map((item: any) => item.value) : _selectedOption?.value;
    props.onChange({ target: { value: selValue } });
  };

  return (
    <div className="w-full">
      {props.creatable ?
        <CreatableSelect
          value={selectedOption}
          onChange={onchange}
          options={groupOptions}
          isClearable={true}
          isMulti={props.multiple}
          className='[&>div]:p-[2px] mt-[3px] [&>div]:border-gray-550'
        />
        :
        <Select
          value={selectedOption}
          onChange={onchange}
          options={groupOptions}
          isClearable={true}
          isMulti={props.multiple}
          className='[&>div]:p-[2px] mt-[3px] [&>div]:border-gray-550'
        />
      }
    </div>
  );
}
