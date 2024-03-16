import React, { useEffect, useState } from 'react';
import { Label } from './label';
import { NumberInput } from './number';
import { basicElementList } from './basic-element-list';
import { DataformStoreProps, useDataformStore } from '../../context/store';
import { Icon, IconKeys } from '../../assets/icons/list';
import { resolveGroupPath, resolveArrayTemplate } from '../../utils/resolvers';
import { SwitchInput } from './switch';
import { validateField } from '@/utils/validate';
import { classNames, dataToStyle } from '@/utils';

export const BasicElement = ({
  id,
  keyPath = '',
  label = '',
  labelPosition = '',
  placeholderInside = false,
  icon = undefined,
  image = undefined,
  type = 'string',
  format = '',
  controlType = undefined,
  errorMessage = '',
  className = '',
  variant = '',
  options = [],
  compact = false,
  readOnly = false,
  hideLabel = false,
  valueMap,
  max = 100,
  min = 0,
  initialValue,
  step = 1,
  extraProps = {},
  creatable = false,
  multiple = false,
  layout,
  description,
  helpText,
  errorText,
  required,
  arrayIndex,
  rows = 4,
  ...props
}) => {

  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    if (prev.getError(id, keyPath) !== next.getError(id, keyPath)) return false;
    return true;
  };
  const { getData, getError, setError, setData, getConfig, setActivePath } = useDataformStore(state => state, shouldNotUpdate,);

  const [value, setValue] = useState(getData(id, keyPath));
  const [errors, setLocalErrors] = useState(errorMessage);
  const [groupOptions, setGroupOptions] = useState();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLocalErrors(getError(id, keyPath))
  }, [getError(id, keyPath)]);

  useEffect(() => {
    const sValue = getData(id, keyPath)
    if (!sValue && !value && initialValue) {
      setValue(initialValue)
    }
  }, []);

  useEffect(() => {
    if (creatable) {
      const groupPath = resolveGroupPath(keyPath);
      const groupData = getData(id, groupPath);
      setGroupOptions(groupData)
    }
  }, [id, keyPath]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
    const errors = validateField(keyPath, value, getData(id), getConfig(id)?.schema, arrayIndex)
    const errorValues = errors?.filter(e => !!(e.trim())).join(', ')
    setLocalErrors(errorValues)
    setError(id, keyPath, errors);
    console.log('errors', errors)
  };

  const onChange = (e: { target: { value: any, checked: boolean, files } }) => {
    let _value;
    if (controlType === 'file') {
      _value = e.target.files;
      setValue(_value);
    } else if (controlType === 'checkbox') {
      _value = e.target.checked;
      setValue(_value);
    } else {
      _value = e.target.value;
      setValue(_value);
    }
    _value = processValue(_value)
    setData(id, keyPath, _value, creatable);
  };

  const processValue = (_value) => {
    if (!valueMap) return _value
    const pValue = valueMap[_value];
    return pValue;
  }

  const getElement = () => {
    let element = null;
    element = basicElementList[controlType]
    if (element) return element;

    element = basicElementList[type]
    if (element) return element;

    element = basicElementList[format]
    if (element) return element;

    if (type === 'number') {
      return NumberInput
    } else if (type === 'boolean') {
      return SwitchInput
    } else

      return basicElementList['input'];
  }

  const getOptionIconOrImage = (_option) => {
    let imgElement = null
    if (_option.image) {
      imgElement = <img src={_option.image} alt="" className=" max-w-[100px] max-h-[100px] " />
    } else if (_option.icon && typeof _option.icon === 'string') {
      imgElement = <Icon name={_option.icon as IconKeys} color="ff0000" size={24} />
    } else if (_option.icon && typeof _option.icon === 'object') {
      imgElement = _option.icon?.src ? <Icon name={_option.icon.name} color="ff0000" size={24} /> : _option.icon?.native
    }

    if (imgElement) {
      return <div className={` text-gray-500 p-2 transition-all duration-300  rounded`}>{imgElement} </div>
    }
    return null;
  }

  const Element: any = getElement()
  const theme = getConfig(id)?.theme?.content || {};
  const effectLabelPos = labelPosition ? labelPosition : theme.labelPosition ? theme.labelPosition : 'inline'

  const labelControl = (effectLabelPos !== 'hide' && !hideLabel) ? (
    <div className={`hidden md:block  text-gray-600 text-xs ${['left', 'inline'].includes(effectLabelPos) ? ' w-[200px]' : '  mb-0 '}`}>
      <Label
        key={keyPath + '-label'}
        id={keyPath}
        isFocused={isFocused}
        label={label}
        className='text-gray-600 text-sm'
        position={effectLabelPos}
        style={dataToStyle(theme['labelStyle'])}
      />
      {description && <div className="text-[10px] text-slate-500" style={dataToStyle(theme['descriptionStyle'])}>{description}</div>}
    </div>
  ) : null;

  const getIconOrImage = () => {
    if (image) {
      let resolvedImage = resolveArrayTemplate(image, keyPath, getData(id, ''));
      return <img src={resolvedImage} alt="" className="w-10 h-10" />
    } else if (icon && typeof icon === 'string') {
      let resolvedImage = resolveArrayTemplate(icon, keyPath, getData(id, ''));
      return <div className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc] ${isFocused ? 'text-blue-500' : ''}`}>
        {resolvedImage?.length === 2 ? resolvedImage : <Icon name={resolvedImage as IconKeys} color="ff0000" size={24} />}
      </div>
    } else if (icon && typeof icon === 'object') {
      return <div className={` text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc] ${isFocused ? 'text-blue-500' : ''}`}>
        {icon?.src ? <Icon name={icon.name} color="ff0000" size={24} /> : icon?.native}
      </div>
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActivePath(props.id, keyPath);
  }

  let classes;
  if (layout === 'none') {
    classes = `block ${compact ? '' : 'w-full'} pl-0 px-4 py-2 border-b-2 border-gray-300 bg-inherit shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slat-200`
  } else {
    classes = `block ${compact ? '' : 'w-full'} px-4 py-2 border bg-[#ffffffcc]  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slat-200`
  }
  const getInput = () => {
    if (readOnly) {
      return <>{value} </>
    } else {
      return (
        <Element
          {...props}
          onFocus={onFocus}
          type={type}
          max={max}
          min={min}
          step={step}
          onChange={onChange}
          groupOptions={groupOptions}
          options={options}
          variant={variant}
          creatable={creatable}
          multiple={multiple}
          value={value}
          format={format}
          onBlur={onBlur}
          className={classes}
          placeholder={label || ''}
          description={description}
          helpText={helpText}
          errorText={errorText}
          keyPath={keyPath}
          data={getData(id)}
          getOptionIconOrImage={getOptionIconOrImage}
          style={dataToStyle(theme['inputStyle'])}
          id={id}
          rows={rows}
        />
      )
    }
  }

  return (
    <div onClick={clickHandler} key={keyPath} className={classNames(effectLabelPos === 'right' ? ' flex items-center gap-2' : '', className, ' relative mb-2 lg:mb-0')} >
      {effectLabelPos === 'top' && label && labelControl}
      <div className={classNames(!['top', 'bottom'].includes(effectLabelPos) && "lg:flex", " items-center w-full gap-3 ")}>
        {effectLabelPos === 'left' && label && labelControl}
        {getIconOrImage()}
        {effectLabelPos === 'inline' && label && labelControl}
        {getInput()}
      </div>
      {(effectLabelPos === 'bottom' || effectLabelPos === 'right') &&
        label &&
        labelControl}
      {errors && (
        <div className="mt-2 text-sm text-red-600 text-right" style={dataToStyle(theme['errorStyle'])}>{errors}</div>
      )}
    </div>
  );
};
