import React from 'react';
import { BasicElement } from '../element/basic-element';
import { computeLabel, resolveOptions } from '../../utils/resolvers';
import { ToggleInput } from '../element/toggle';
import { MobileElements } from '../element/mobile-elements';

export const renderElement = (id, keyPath: string, prop: any, getData?: any, arrayIndex?: number) => {
  let controlType = prop['x-control'];
  const labelPosition = prop['x-label-position'] || undefined;
  const hideLabel = prop['x-hide-label'] || false;
  const readOnly = prop.readOnly
  const extraProps = prop['x-props'] || {};
  let className = extraProps.className || '';
  const variant = prop['x-control-variant'] || prop['x-variant'];
  const compact = prop['x-compact'];
  const selectable = prop['x-selectable'] || true;
  const valueMap = prop['x-value-map'];
  const creatable = prop['x-creatable'];
  const multiple = prop['x-multiple'];
  const format = prop['format']
  const layout = prop['x-layout'];
  const description = prop['description'];
  const helpText = prop['x-help-text'];
  const errorText = prop['x-error-text'];
  const openDirection = prop['x-open-direction'];

  let options
  if (prop['enum']) {
    options = resolveOptions(keyPath, prop.enum, getData(id))
    if (!controlType) {
      controlType = 'select';
    }
  }

  const title = computeLabel(keyPath.split('.').pop(), prop)
  const icon = prop['x-icon'];
  const image = prop['x-image'];
  if (!compact && !readOnly) {
    if (prop['x-group']) {
      className = className + ' w-full '
    }
  }



  if (controlType === 'select') {
    // Handle cascading dropdowns
    if (prop['x-enumVar'] && prop['x-enumPath']) {
      const pathParts = prop['x-enumPath'].split('.');
      let optionsSource = getData(id, '');

      for (const part of pathParts) {
        optionsSource = optionsSource?.[part];
      }
      const options = prop['x-enumVar'][optionsSource] || [];
      // return (
      //     <div key={keyPath}>
      //         <label htmlFor={keyPath}>{prop.title}</label>
      //         <select
      //             id={keyPath}
      //             value={formData[keyPath] || ''}
      //             onChange={(event) => handleChange(setFormData, keyPath, event.target.value)}
      //         >
      //             <option value="">Select {prop.title}</option>
      //             {options.map((option) => (
      //                 <option key={option} value={option}>
      //                     {option}
      //                 </option>
      //             ))}
      //         </select>
      //     </div>
      // );
    }

    return (
      <BasicElement
        keyPath={keyPath}
        extraProps={extraProps}
        id={id}
        key={keyPath}
        label={title}
        readOnly={readOnly}
        variant={variant}
        hideLabel={hideLabel}
        labelPosition={labelPosition}
        type={prop.type}
        controlType={controlType}
        icon={icon}
        selectable={selectable}
        max={prop.max}
        min={prop.min}
        step={prop.step}
        initialValue={prop.default}
        image={image}
        compact={compact}
        options={options}
        className={className}
        creatable={creatable}
        valueMap={undefined}
        multiple={multiple}
        format={format}
        layout={layout}
        required={prop.required}
        description={description}
        helpText={helpText}
        errorText={errorText}
        arrayIndex={arrayIndex}
      />
    );
  }


  if (controlType === 'toggle') {
    return <ToggleInput
      keyPath={keyPath}
      id={id}
      key={keyPath}
      extraProps={extraProps}
      readOnly={readOnly}
      hideLabel={hideLabel}
      label={title}
      labelPosition={labelPosition}
      type={prop.type}
      max={prop.max}
      min={prop.min}
      step={prop.step}
      initialValue={prop.default}
      controlType={controlType}
      variant={variant}
      valueMap={valueMap}
      selectable={selectable}
      compact={compact}
      icon={icon}
      creatable={creatable}
      options={options}
      image={image}
      layout={layout}
      format={format}
      className={className}
      description={description}
      helpText={helpText}
      errorText={errorText}
      required={prop.required}
      arrayIndex={arrayIndex}
    />
  }

  if (controlType === 'mobile-elements') {
    return (
      <MobileElements
        keyPath={keyPath}
        extraProps={extraProps}
        id={id}
        key={keyPath}
        label={title}
        readOnly={readOnly}
        variant={variant}
        hideLabel={hideLabel}
        labelPosition={labelPosition}
        type={prop.type}
        controlType={controlType}
        icon={icon}
        selectable={selectable}
        max={prop.max}
        min={prop.min}
        step={prop.step}
        initialValue={prop.default}
        image={image}
        compact={compact}
        options={options}
        className={className}
        creatable={creatable}
        valueMap={undefined}
        multiple={multiple}
        format={format}
        layout={layout}
        required={prop.required}
        description={description}
        helpText={helpText}
        errorText={errorText}
        arrayIndex={arrayIndex}
      />
    );
  }

  return (
    <BasicElement
      keyPath={keyPath}
      valueMap={valueMap}
      id={id}
      key={keyPath}
      extraProps={extraProps}
      readOnly={readOnly}
      hideLabel={hideLabel}
      label={title}
      labelPosition={labelPosition}
      options={options}
      compact={compact}
      type={prop.type}
      max={prop.max}
      min={prop.min}
      step={prop.step}
      initialValue={prop.default}
      controlType={controlType}
      variant={variant}
      required={prop.required}
      icon={icon}
      layout={layout}
      selectable={selectable}
      image={image}
      multiple={multiple}
      className={className}
      format={format}
      creatable={creatable}
      description={description}
      helpText={helpText}
      errorText={errorText}
      openDirection={openDirection}
      arrayIndex={arrayIndex}
    />
  );
};
