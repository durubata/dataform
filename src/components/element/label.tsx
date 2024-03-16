import React from 'react';

export const Label = (props: {
  id: string;
  label: string;
  position: string;
  isFocused: boolean;
  className?: string;
  style?: any
}) => {
  return (
    <label
      style={props.style}
      htmlFor={props.id}
      className={` ${props?.className
        } whitespace-nowrap text-sm transition-all duration-300 ${props.isFocused ? 'text-blue-500' : 'text-gray-500'
        }`}
    >
      {props.label}
    </label>
  );
};
