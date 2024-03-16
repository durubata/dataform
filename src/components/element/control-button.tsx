import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Icon, IconKeys, iconType } from '../../assets/icons/list';

export const Button = (props: {
  id?: string;
  icon?: IconKeys;
  color?: string;
  size?: number;
  label: string;
  clickHandler?: any;
  className?: string;
}) => {
  const clickHandler = () => {
    if (props.clickHandler) {
      props.clickHandler(props.id);
    }
  };
  return (
    <button className={` p-1 px-1 bg-white rounded-lg shadow-md text-center ${props?.className} `} onClick={clickHandler}>
      {props.icon && (
        <Icon name={props.icon} color={props.color} size={props.size} />
      )}
      {props.label}
    </button>
  );
};

export const ButtonWithConfirm = (props: {
  id?: string;
  icon?: IconKeys;
  color?: string;
  size?: number;
  label: string;
  clickHandler?: any;
  className?: string;
}) => {
  const [confirm, setConfirm] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setConfirm(false);
  });

  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm) {
      props.clickHandler(props.id);
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };

  const getIconName = () => {
    if (confirm) {
      return <Icon name={iconType.BiCheck} color={props.color} className='text-sm lg:text-base' /> //;
    } else if (props.icon) {
      return <Icon name={props.icon} color={props.color} className='text-sm lg:text-base' /> //;
    }
    return null
  };
  return (
    <button ref={ref} className={`p-1 px-2 lg:px-4 bg-white rounded-lg shadow-md text-center ${props?.className}`} onClick={clickHandler}>
      {getIconName()}
      {props.label}
    </button>
  );
};

export const ButtonAdd = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  label?: string;
  className?: string;
}) => {
  return (
    <Button
      icon={iconType.BiPlus}
      size={18}
      color={'#333'}
      label={props.label}
      clickHandler={props.clickHandler}
      className={props.className}
    />
  );
};

export const ButtonDelete = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
  label?: string;
}) => {
  return (
    <ButtonWithConfirm
      icon={iconType.MdOutlineDeleteForever}
      size={18}
      color={'#ff0000'}
      label={props.label}
      clickHandler={props.clickHandler}
      className={props.className}
    />
  );
};

export const ButtonOk = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
  label?: string;
}) => {
  return (
    <Button
      icon={iconType.BiCheck}
      size={15}
      color={'#00ff00'}
      label={typeof props.label === 'undefined' ? '' : 'Accept'}
      clickHandler={props.clickHandler}
      className={props.className}
    />
  );
};

export const ButtonCancel = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
  label?: string;
}) => {
  return (
    <Button
      icon={iconType.IoCloseSharp}
      size={15}
      color={'red'}
      label={typeof props.label === 'undefined' ? '' : 'Cancel'}
      {...props}
    />
  );
};
