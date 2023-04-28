import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Icon, IconKeys, iconType } from 'assets/icons/list';

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
    <button className={`${props?.className}`} onClick={clickHandler}>
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

  const clickHandler = () => {
    if (confirm) {
      props.clickHandler(props.id);
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };
  const iconName = confirm ? iconType.BiCheck : props.icon;
  return (
    <button ref={ref} className={`${props?.className}`} onClick={clickHandler}>
      {iconName && (
        <Icon name={iconName} color={props.color} size={props.size} />
      )}
      {props.label}
    </button>
  );
};

export const ButtonAdd = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
}) => {
  return (
    <Button
      icon={iconType.BiPlus}
      size={18}
      color={'#333'}
      {...props}
      label={''}
      className="p-1 px-4 bg-white rounded-lg shadow-md text-center"
    />
  );
};

export const ButtonDelete = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
}) => {
  return (
    <ButtonWithConfirm
      icon={iconType.MdOutlineDeleteForever}
      size={18}
      color={'#ff0000'}
      {...props}
      label={''}
      className="p-1 px-4 bg-white rounded-lg shadow-md text-center"
    />
  );
};

export const ButtonOk = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
}) => {
  return (
    <Button
      icon={iconType.BiCheck}
      size={15}
      color={'#00ff00'}
      {...props}
      label={'Accept'}
    />
  );
};

export const ButtonCancel = (props: {
  id?: string;
  color?: string;
  size?: number;
  clickHandler?: any;
  className?: string;
}) => {
  return (
    <Button
      icon={iconType.BiCheck}
      size={15}
      color={'#333'}
      {...props}
      label={'Cancel'}
    />
  );
};
