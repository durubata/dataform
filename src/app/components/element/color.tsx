import React, { useEffect, useState } from 'react';
import {
  GithubPicker,
  SketchPicker,
  ChromePicker,
  PhotoshopPicker,
} from 'react-color';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';

export const CommonColorPicker = (props: {
  color;
  updateColor;
  type;
  toggle?;
  useFloatBox?;
  icon?;
  className?;
}) => {
  const [colorTemp, setColorTemp] = useState('000000');
  const [gradient, setGradient] = useState('rgba(255, 255, 255, 1)');
  const [show, setShow] = useState(false);
  const { valueToHSL, valueToHSV, valueToHex, valueToCmyk, rgbaArr, hslArr } =
    useColorPicker(gradient, setGradient);
  const [color, setColor] = useState(props.color || '#000');

  useEffect(() => {
    setColorTemp(props.color);
  }, [props.color]);

  const handleChangeComplete = (_color: any) => {
    const rgb = `rgba(${Object.values(_color.rgb).join(',')})`;
    if (props.updateColor) props.updateColor(_color);
    setColor(rgb);
  };

  const handleGradientChange = (_color: any) => {
    setGradient(_color);
    const gColor = { hex: valueToHex(), rgb: rgbaArr };
    if (_color.includes('gradient')) {
      gColor['gradient'] = _color;
    }
    if (props.updateColor) props.updateColor(gColor);
  };

  const handleChange = (_color: any) => {
    const rgb = `rgba(${Object.values(_color.rgb).join(',')})`;
    setColorTemp(rgb);
  };

  const getPicker = () => {
    let selPicker;
    switch (props.type) {
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

  const toggleButton = () => {
    return (
      <div className="color-picker-toggle">
        <button
          className={props.className}
          onClick={e => setShow(!show)}
          style={{ backgroundColor: colorTemp }}
        />
        {show && getPicker()}
      </div>
    );
  };
  return (
    <div className="color-picker-wrapper">
      {props.toggle ? toggleButton() : getPicker()}
    </div>
  );
};
