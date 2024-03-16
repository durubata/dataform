import React, { useEffect, useState } from 'react';
import {
  GithubPicker,
  SketchPicker,
  ChromePicker,
  PhotoshopPicker,
} from 'react-color';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import { Popover } from '@headlessui/react';
import { classNames } from '../../utils/common';
import { Icon, iconType } from '../../assets/icons/list';

export const CommonColorPicker = (props: {
  color;
  value;
  onChange;
  type;
  variant?,
  toggle?;
  useFloatBox?;
  icon?;
  className?;
  openDirection?;
}) => {
  const [colorTemp, setColorTemp] = useState('000000');
  const [gradient, setGradient] = useState('rgba(255, 255, 255, 1)');
  const [show, setShow] = useState(false);
  const { valueToHSL, valueToHSV, valueToHex, valueToCmyk, rgbaArr, hslArr } =
    useColorPicker(gradient, setGradient);
  const [color, setColor] = useState(props.value);

  useEffect(() => {
    setColorTemp(props.color);
  }, [props.color]);

  const handleChangeComplete = (_color: any) => {
    const rgb = `rgba(${Object.values(_color.rgb).join(',')})`;
    if (props.onChange) {
      props.onChange({ target: { value: _color.hex } });
      // props.onChange(rgb);
    }
    setColor(rgb);
  };

  const handleGradientChange = (_color: any) => {
    setGradient(_color);
    const gColor = { hex: valueToHex(), rgb: rgbaArr };
    if (_color.includes('gradient')) {
      gColor['gradient'] = _color;
    }
    if (props.onChange) {
      props.onChange(gColor);
    }
  };

  const handleChange = (_color: any) => {
    const rgb = `rgba(${Object.values(_color.rgb).join(',')})`;
    setColorTemp(rgb);
  };

  const getPicker = () => {
    let selPicker;
    switch (props.variant) {
      case 'sketch':
        selPicker = (
          <SketchPicker
            className="sketch-picker"
            onChangeComplete={handleChangeComplete}
            color={colorTemp || '#000'}
            onChange={handleChange}
          />
        );
        break;
      case 'chrome':
        selPicker = (
          <ChromePicker
            className="chrome-picker"
            onChangeComplete={handleChangeComplete}
            color={colorTemp || '#000'}
            onChange={handleChange}
          />
        );
        break;
      case 'photoshop':
        selPicker = (
          <PhotoshopPicker
            className="photoshop-picker"
            onChangeComplete={handleChangeComplete}
            color={colorTemp || '#000'}
            onChange={handleChange}
          />
        );
        break;
      case 'gradient':
        selPicker = (
          <div className="p-2 shadow bg-white border-gray-100 border-2">
            <ColorPicker value={gradient} onChange={handleGradientChange} />
          </div>
        );
        break;
      default:
        selPicker = (
          <GithubPicker
            className="github-picker"
            onChangeComplete={handleChangeComplete}
            color={colorTemp || '#000'}
            onChange={handleChange}
          />
        );
        break;
    }

    if (props.useFloatBox) {
      return (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '25px',
            zIndex: 100,
          }}
        >
          {selPicker}
        </div>
      );
    } else {
      return selPicker;
    }
  };

  const toggle = props.toggle || true;
  const toggleButton = () => {
    return (
      <div className="color-picker-toggle">
        <Popover className="relative">
          <Popover.Button><div style={{ backgroundColor: color }} className='  text-slate-500  bg-white relative flex cursor-pointer rounded-lg px-2 py-2 m-1 shadow-md focus:outline-none'><Icon name={iconType.AiOutlineBgColors} className=' w-5 h-5' /></div></Popover.Button>
          <Popover.Panel className={classNames(props.openDirection === 'left' && '-left-[190px]', "absolute z-10 ")}>
            <div className="grid grid-cols-2">
              {getPicker()}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    );
  };
  return (
    <div className="color-picker-wrapper">
      {toggle ? toggleButton() : getPicker()}
    </div>
  );
};
