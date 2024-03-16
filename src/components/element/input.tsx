import React from "react";
export const Input = (props: any) => {
  const { onFocus, type, onChange, value, onBlur, placeholder, className } = props;

  const _className = className + ` `;
  return (
    <input
      {...props}
      onFocus={onFocus}
      type={type}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      className={_className}
      placeholder={placeholder}
    />
  );
};
