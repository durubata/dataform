import React from "react";
export const Textarea = (props: any) => {
  const { onFocus, type, onChange, value, rows, onBlur, placeholder, className } = props;

  const _className = className + ` `;
  return (
    <textarea
      {...props}
      onFocus={onFocus}
      type={type}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      rows={rows}
      className={_className}
      placeholder={placeholder}
    />
  );
};
