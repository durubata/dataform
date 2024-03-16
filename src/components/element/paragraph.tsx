import React from "react";

export const ParagraphBlock = (props: any) => {
  const { label, tag, value, style, className, keyPath } = props;

  return (
    <div style={style} id={keyPath} className={className}>
      {label} {value}
    </div>
  );
};
