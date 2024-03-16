import React from 'react';
import { useDataformStore } from '../../context/store';
import { classNames, dataToStyle } from '../../utils/common';

export const ElementLayout = (props: any) => {
  const shouldNotUpdate = (ov, nv): boolean => {
    if (ov.activePath !== nv.activePath && (ov.activePath === props.keyPath || nv.activePath === props.keyPath)) return false;
    return true;
  };
  const { getActivePath, getConfig } = useDataformStore(state => state, shouldNotUpdate);
  const theme = getConfig(props.id)?.theme?.content || {};

  if (props.layout === 'none') {
    return (
      <div className={classNames(getActivePath(props.id) === props.keyPath ? ' border-b-2 border-[#ffffff33] ' : ' mb-2', ` ${props?.className}`)} style={dataToStyle(theme['inputBox'])}>
        {props.children}
      </div>
    );
  }
  return (
    <div className={classNames(getActivePath(props.id) === props.keyPath ? ' bg-cyan-50 ' : ' bg-gray-50 ', `p-2 lg:p-4 shadow my-2 lg:my-4 mx-auto rounded-md  border border-slate-200 text-sm flex-grow ${props?.className}`)} style={dataToStyle(theme['inputBox'])}>
      {props.children}
    </div>
  );
};
