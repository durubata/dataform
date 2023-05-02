import React from 'react';
import { validationUtil } from '../../utils/validate';
import { TabLayout } from '../layout/tab';
import { AccordionLayout } from '../layout/accordion';
import { SlidesLayout } from '../layout/slides';
import { SwitchInput } from '../element/switch';
import { RadioInput } from '../element/radio';
import { SliderRangeInput } from '../element/slider-range';
import { LayoutCard } from '../layout/card';
import { CollapseLayout } from '../layout/collapse';
import { RenderArray } from './rederer-array';
import { CheckboxInput } from '../element/checkbox';
import { isEmpty, toTitleCase } from '../utils';
import { CommonColorPicker } from '../element/color';
import { SelectInput } from '../element/select';
import { BasicElement } from '../element/basic-element';
import { resolveOptions } from '../utils/resolvers';
import { IconPicker } from '../element/icon-picker';

export const renderProperties = (props: {
  properties: any;
  parentKeyPath: string;
  getData?: any;
  index?: number;
}) => {
  const { properties, parentKeyPath, getData, index } = props;
  if (!properties) return null;

  const groups: { [group: string]: React.ReactNode[] } = {};

  return Object.entries(properties).map(([key, prop]: [any, any]) => {
    const keyPath = parentKeyPath ? `${parentKeyPath}.${key}` : key;

    // Add support for conditional renderingå
    if (getData) {
      const conditionValue = getData(prop?.condition?.field);
      if (
        prop.condition &&
        !validationUtil(
          prop.condition.rule,
          conditionValue,
          prop.condition.value,
        )
      ) {
        return null;
      }
    }

    // Add support for different layouts (Tabs, Accordion, Stepper, Collapsible)
    // ...

    // Other input rendering logic (objects, arrays, etc.) goes here

    const controlType = prop['x-control'];
    const icon = prop['x-icon'];
    // const layout = prop['x-layout'] || {};
    const groupKey = prop['x-group'] || '';

    // const controlWrapperStyle = {
    //     width: layout.width || 'auto'
    // };

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    // Custom keyword: x-displayIf
    // if (fieldSchema['x-displayIf']) {
    //     const displayConfig = fieldSchema['x-displayIf'];
    //     const compareValue = getValueAtPath(formData, displayConfig.field);

    //     if (displayConfig.condition === 'notEquals' && value === compareValue) {
    //         return false; // Field should not be displayed
    //     }
    // }

    if (prop.layout && prop.layout.type === 'tabs') {
      return (
        <div key={keyPath} className=" mb-10">
          <h3 className="mb-2">{prop.title}</h3>
          <TabLayout
            key={keyPath}
            tabs={prop.layout.tabs.map((tab: any) => ({
              title: tab.title,
              content: renderProperties({
                properties: tab.properties,
                parentKeyPath: keyPath,
              }),
            }))}
          />
        </div>
      );
    }

    if (prop.layout && prop.layout.type === 'accordion') {
      return (
        <div key={keyPath} className=" mb-10">
          <h3 className="mb-2">{prop.title}</h3>
          <AccordionLayout
            key={keyPath}
            tabs={prop.layout.tabs.map((tab: any) => ({
              title: tab.title,
              content: renderProperties({
                properties: tab.properties,
                parentKeyPath: keyPath,
              }),
            }))}
          />
        </div>
      );
    }

    if (prop.layout && prop.layout.type === 'slides') {
      return (
        <SlidesLayout
          key={keyPath}
          tabs={prop.layout.tabs.map((tab: any) => ({
            title: tab.title,
            content: renderProperties({
              properties: tab.properties,
              parentKeyPath: keyPath,
            }),
          }))}
        />
      );
    }

    if (prop.type === 'object' && prop.properties) {
      return (
        <div key={keyPath}>
          <CollapseLayout title={prop.title} inArray={!isNaN(index)}>
            {renderProperties({
              properties: prop.properties,
              parentKeyPath: keyPath,
              index,
            })}
          </CollapseLayout>
        </div>
      );
    }

    if (prop.type === 'array' && prop.items) {
      const options = resolveOptions(keyPath, prop);
      if (isEmpty(options)) {
        return <RenderArray prop={prop} keyPath={keyPath} />;
      } else {
        const { maxItems, minItems } = prop;
        const title = prop.title || toTitleCase(keyPath.split('.').pop());
        if (controlType === 'checkbox') {
          return (
            <CheckboxInput
              maxItems={maxItems}
              label={title}
              minItems={minItems}
              keyPath={keyPath}
              options={options}
            />
          );
        } else {
          return <SelectInput keyPath={keyPath} options={options} />;
        }
      }
    }

    // const hasError = errors ? errors[keyPath] : null;
    if (groupKey) {
      groups[groupKey].push(renderInput(keyPath, prop, getData));
      return (
        <LayoutCard key={keyPath}>
          {Object.values(groups).map((group, index) => (
            <div key={index} className="form-row flex gap-4">
              {group}
            </div>
          ))}
        </LayoutCard>
      );
    }
    return (
      <LayoutCard key={keyPath}>
        {' '}
        {renderInput(keyPath, prop, getData)}
      </LayoutCard>
    );
  });
};

export const renderInput = (keyPath: string, prop: any, getData?: any) => {
  let controlType = prop['x-control'];
  const layout = prop['x-layout'] || {};
  const labelPosition = prop['x-label-position'] || undefined;

  if (prop['enum'] && !controlType) {
    controlType = 'select';
  }

  const title =
    typeof prop.title === 'undefined'
      ? toTitleCase(keyPath.split('.').pop())
      : prop.title;

  const icon = prop['x-icon'];

  if (controlType === 'select') {
    // Handle cascading dropdowns
    if (prop['x-enumVar'] && prop['x-enumPath']) {
      const pathParts = prop['x-enumPath'].split('.');
      let optionsSource = getData('');

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

    const options = prop['enum']
      ? prop['enum'].map((item: any) => ({ label: item, value: item }))
      : [];
    return <SelectInput options={options} />;
  }

  if (controlType === 'switch' || prop.type === 'boolean') {
    return <SwitchInput />;
  }

  if (controlType === 'icon-picker') {
    return <IconPicker />;
  }

  if (controlType === 'checkbox') {
    return <CheckboxInput label={prop.title} keyPath={keyPath} />;
  }

  if (controlType === 'color') {
    return (
      <CommonColorPicker updateColor={null} color={'#000'} type="github" />
    );
  }

  if (controlType === 'slider') {
    return (
      <SliderRangeInput
        min={0}
        max={10}
        initialMinValue={2}
        onChange={e => console.log(e)}
      />
    );
  }

  if (controlType === 'radio') {
    const options = prop['enum']
      ? prop['enum'].map((item: any) => ({ label: item, value: item }))
      : [];
    return <RadioInput options={options} />;
  }

  const className = prop['x-group'] ? 'w-full' : '';
  return (
    <BasicElement
      keyPath={keyPath}
      key={keyPath}
      label={title}
      labelPosition={labelPosition}
      type={prop.type}
      controlType={controlType}
      icon={icon}
      className={className}
    />
  );
};
