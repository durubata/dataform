import React from 'react';
import { validationUtil } from '../../utils/validate';
import { TabLayout } from '../layout/tab';
import { AccordionLayout } from '../layout/accordion';
import { ElementLayout } from '../layout/element-layout';
import { CollapseLayout } from '../layout/collapse';
import { RenderArray } from './rederer-array';
import { classNames, toTitleCase } from '../../utils/common';
import { dataSourceToOptions, resolveOptions } from '../../utils/resolvers';
import { CheckboxInput } from '../element/checkbox';
import { SocialLinkInput } from '../element/social-links';
import { PopoverLayout } from '../layout/popover';
import { FormElements } from '../element/form-elements';
import { renderElement } from './rederer-element';
import { Label } from '../element/label';

export const renderProperties = (props: {
  id;
  properties: any;
  parentKeyPath: string;
  getData?: any;
  index?: number;
  activeSlide?: number;
  setActivePath?: any
  getActivePath?: any
}) => {
  const { properties, parentKeyPath, getData, index, setActivePath, getActivePath } = props;
  if (!properties) return null;

  const groups: { [group: string]: { key, prop }[] } = {};
  //get all groups
  Object.entries(properties).map(([key, prop]: [any, any]) => {
    if (!prop['x-hide']) {
      const groupKey = prop['x-group'] || '';
      key = parentKeyPath ? `${parentKeyPath}.${key}` : key;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push({ key, prop });
    }
  });

  return Object.entries(properties).map(([key, prop]: [any, any]) => {
    const keyPath = parentKeyPath ? `${parentKeyPath}.${key}` : key;
    // Add support for conditional rendering
    if (getData) {
      const conditionValue = getData(props.id, prop?.condition?.field);
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

    if (prop['x-hide']) return null;

    // Add support for different layouts (Tabs, Accordion, Stepper, Collapsible)
    // ...

    // Other input rendering logic (objects, arrays, etc.) goes here

    const controlType = prop['x-control'];
    const icon = prop['x-icon'];
    const image = prop['x-image'];
    const layout = prop['x-layout'];
    // const layout = prop['x-layout'] || {};
    const groupKey = prop['x-group'] || '';
    const extraProps = prop['x-props'] || {};
    const activePath = getActivePath(props.id);
    const arrayIndex = index
    // const controlWrapperStyle = {
    //     width: layout.width || 'auto'
    // };

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
                id: props.id,
                properties: tab.properties,
                parentKeyPath: keyPath,
                getData,
                getActivePath,
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
                id: props.id,
                properties: tab.properties,
                parentKeyPath: keyPath,
                getData,
                getActivePath,
              }),
            }))}
          />
        </div>
      );
    }

    // if (prop.layout && prop.layout.type === 'slides') {
    //   return (
    //     <SlidesLayout
    //       activeSlide={props.activeSlide}
    //       key={keyPath}
    //       id={props.id}
    //       slides={prop.layout.tabs.map((tab: any) => ({
    //         title: tab.title,
    //         content: renderProperties({
    //           id: props.id,
    //           properties: tab.properties,
    //           parentKeyPath: keyPath,
    //           getData,
    //           getActivePath,
    //         }),
    //       }))}
    //     />
    //   );
    // }

    if (prop.layout && prop.layout.type === 'popup') {
      return (
        <PopoverLayout icon={prop.icon} open={true}>
          {renderProperties({
            id: props.id, properties: prop.properties,
            parentKeyPath: keyPath,
            getData,
            getActivePath
          })}
        </PopoverLayout>
      );
    }

    const clickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setActivePath(props.id, keyPath);
    }

    const hideLabel = prop['x-hide-label'] || false;
    const labelPosition = prop['x-label-position'] || undefined;
    const title =
      typeof prop.title === 'undefined'
        ? toTitleCase(keyPath.split('.').pop())
        : prop.title;
    const labelControl = !hideLabel ? (
      <div className={`hidden md:block  text-gray-600 text-sm ${['left', 'inline'].includes(labelPosition) ? ' w-[200px]' : '  mb-4 '}`}>
        <Label
          key={keyPath + '-label'}
          id={keyPath}
          isFocused={false}
          label={title}
          className='text-gray-600 text-sm'
          position={labelPosition}
        />
        {prop.description && <div className="text-[10px] text-gray-500">{prop.description}</div>}
      </div>
    ) : null;
    if (prop.type === 'object' && prop.properties) {
      const _className = extraProps.className || ''
      if (prop.layout === 'card') {
        return (
          <div key={keyPath} onClick={clickHandler} className={classNames(activePath === keyPath && 'bg-cyan-50 p-px', _className)}>
            {labelControl}
            {renderProperties({
              id: props.id,
              properties: prop.properties,
              parentKeyPath: keyPath,
              index,
              getData,
              getActivePath,
            })}
          </div>
        );
      } else {
        return (
          <div key={keyPath} onClick={clickHandler} className={classNames(activePath === keyPath && 'bg-cyan-50 p-px', _className)}>
            <CollapseLayout title={prop.title} inArray={!isNaN(index)}>
              {renderProperties({
                id: props.id,
                properties: prop.properties,
                parentKeyPath: keyPath,
                index,
                getData,
                getActivePath,
              })}
            </CollapseLayout>
          </div>
        );
      }
    }

    if (prop.type === 'array' && prop.items) {
      let options;
      if (prop.enum) {
        options = resolveOptions(keyPath, prop.enum, getData(props.id));
      } else if (prop['x-dataSource']) {
        options = dataSourceToOptions(prop['x-dataSource']);
      }
      let _className = prop.layout === ' collapsible' ? '' : ` w-full  collection-elements-dropzone w-full relative shadow-lg border-4 pb-5 border-gray-200 border-dashed min-h-[50px] rounded-xl p-2`

      _className = (extraProps.className || '') + + _className
      let arrayItems;
      const { maxItems, minItems } = prop;
      const title = !prop['x-hide-label'] ? prop.title || toTitleCase(keyPath.split('.').pop()) : undefined;
      if (controlType === 'checkbox') {
        arrayItems = (
          <CheckboxInput id={props.id} maxItems={maxItems} label={title} minItems={minItems} keyPath={keyPath} options={options} />
        );
      } else if (controlType === 'social-links') {
        arrayItems = (
          <SocialLinkInput id={props.id} maxItems={maxItems} label={title} minItems={minItems} prop={prop} keyPath={keyPath} options={options} />
        );
      } else if (controlType === 'form-elements') {
        arrayItems = (
          <FormElements id={props.id} maxItems={maxItems} label={title} minItems={minItems} prop={prop} keyPath={keyPath} options={options} />
        );
      } else if (controlType === 'select' || options) {
        // let groupOptions = [];
        // const creatable = prop['x-creatable']
        // if (creatable) {
        //   const groupPath = resolveGroupPath(keyPath);
        //   groupOptions = getData(props.id, groupPath);
        // }
        // prop
        arrayItems = renderElement(props.id, keyPath, prop, getData) //{renderInput(props.id, keyPath, prop, getData)} renderInput() <SelectInput creatable={creatable} keyPath={keyPath} options={options} groupOptions={groupOptions} />;
      } else {
        arrayItems = <RenderArray id={props.id} prop={prop} keyPath={keyPath} classNames={_className} hideLabel={typeof prop.hideLabel === 'undefined' ? true : prop.hideLabel} />;
      }

      if (prop.layout === 'collapsible') {
        return (<CollapseLayout title={prop.title} inArray={!isNaN(index)}>
          <div className={classNames(activePath === keyPath && 'bg-cyan-50')} onClick={clickHandler}>{arrayItems}</div>
        </CollapseLayout>)
      } else {
        return <div className={classNames(activePath === keyPath && 'bg-cyan-50')} onClick={clickHandler}>{arrayItems}</div>
      }
    }

    // const hasError = errors ? errors[keyPath] : null;
    if (groupKey) {
      if (groups[groupKey]) {
        const groupItems = groups[groupKey];
        delete groups[groupKey]
        const isCompact = groupItems.some((item) => item.prop['x-compact']);
        return (
          <ElementLayout key={keyPath} keyPath={keyPath} id={props.id} layout={layout}>
            <div key={index} className={`form-row gap-y-2 lg:flex ${isCompact ? ' gap-2 ' : 'gap-8'} items-center`}>
              {groupItems.map(({ key, prop }, index) => (
                renderElement(props.id, key, prop, getData, arrayIndex)
              ))}
            </div>
          </ElementLayout>
        );
      } else {
        return null; // Group already rendered
      }
    }

    return (
      <ElementLayout key={keyPath} keyPath={keyPath} id={props.id} layout={layout}>
        {renderElement(props.id, keyPath, prop, getData, arrayIndex)}
      </ElementLayout>
    );
  });
};
