import { validationUtil } from "@/utils/validate";
import { TabLayout } from "../layout/tab";
import { AccordionLayout } from "../layout/accordion";
import { SlidesLayout } from "../layout/slides";
import { ListInput } from "../element/list";
import { Input } from "../element/input";
import { SwitchInput } from "../element/switch";
import { RadioInput } from "../element/radio";
import { ButtonAdd } from "../element/button";
import { SliderRangeInput } from "../element/slider-range";
import { LayoutCard } from "../layout/card";
import { CollapseLayout } from "../layout/collapse";
import { DataformStoreProps, useDataformStore } from "@/context/store";
import { RenderArray } from "./rederer-array";
import { CheckboxInput } from "../element/checkbox";

export const renderProperties = (props: { properties: any, parentKeyPath: string, getData?: any, index?: number }) => {
    const { properties, parentKeyPath, getData, index } = props
    const groups: { [group: string]: React.ReactNode[] } = {};

    return Object.entries(properties).map(([key, prop]: [any, any]) => {
        const keyPath = parentKeyPath ? `${parentKeyPath}.${key}` : key;


        // Add support for conditional rendering
        if (getData) {
            const conditionValue = getData(prop?.condition?.field)
            if (prop.condition && !validationUtil(prop.condition.rule, conditionValue, prop.condition.value)) {
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
                            content: renderProperties({ properties: tab.properties, parentKeyPath: keyPath }),
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
                            content: renderProperties({ properties: tab.properties, parentKeyPath: keyPath }),
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
                        content: renderProperties({ properties: tab.properties, parentKeyPath: keyPath }),
                    }))}
                />
            );
        }

        if (prop.type === 'object' && prop.properties) {
            return (
                <div key={keyPath}>
                    <CollapseLayout title={prop.title} inArray={!isNaN(index)}>
                        {renderProperties({ properties: prop.properties, parentKeyPath: keyPath, index })}
                    </CollapseLayout>
                </div>
            );
        }

        if (prop.type === 'array' && prop.items) {
            return <RenderArray prop={prop} keyPath={keyPath} />
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
                </LayoutCard>)
        }
        return <LayoutCard key={keyPath}> {renderInput(keyPath, prop, getData)}</LayoutCard>
    });
};


const renderInput = (keyPath: string, prop: any, getData?: any) => {
    let controlType = prop['x-control'];
    const layout = prop['x-layout'] || {};
    // const hasError = errors ? errors[keyPath] : null;
    if (prop['enum'] && controlType !== 'select') {
        controlType = 'select';
    }

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


        return (
            <ListInput />
        );
    }

    if (controlType === 'checkbox') {
        return (
            <CheckboxInput label={prop.title} />
        );
    }

    if (controlType === 'switch') {
        return (
            <SwitchInput />
        );
    }

    if (controlType === 'slider') {
        return (
            <SliderRangeInput min={0} max={10} initialMinValue={2} onChange={e => console.log(e)} />
        );
    }


    if (controlType === 'checkbox') {
        return (
            <SwitchInput />
        );
    }


    if (controlType === 'radio') {
        return (
            <RadioInput />
        );
    }

    const controlWrapperStyle = {
        width: layout.width || 'auto'
    };

    const className = prop['x-group'] ? 'w-full' : '';
    return (
        <Input keyPath={keyPath} key={keyPath} label={prop.title} type={prop.type} icon={icon} className={className} />
    );
};


{/* 
 <div className="mt-1">
                {prop.enum.map((option: any) => (
                    <div key={option}>
                        <input
                            id={keyPath}
                            type="radio"
                            className={`mt-1 block w-full rounded-md ${!!hasError ? "border-red-500" : "bg-gray-100 border-transparent"
                                } focus:border-gray-500 focus:bg-white focus:ring-0`}
                            onChange={(event: any) => { handleChange(setFormData, keyPath, event.target.value); handleValidation(prop, event); }}
                            value={option}
                        />
                        <label htmlFor={keyPath}>{option}</label>
                    </div>
                ))}
            </div>

<select
                id={keyPath}
                className={`mt-1 block w-full rounded-md ${!!hasError ? "border-red-500" : "bg-gray-100 border-transparent"
                    } focus:border-gray-500 focus:bg-white focus:ring-0`}
                onChange={(event: any) => { handleChange(setFormData, keyPath, event.target.value); handleValidation(prop, event); }}
            >
                {prop.enum.map((option: any) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

 <input
                id={keyPath}
                type="checkbox"
                className={`mt-1 block w-full rounded-md ${!!hasError ? "border-red-500" : "bg-gray-100 border-transparent"
                    } focus:border-gray-500 focus:bg-white focus:ring-0`}
                onChange={(event: any) => { handleChange(setFormData, keyPath, event.target.value); handleValidation(prop, event); }}
            />


<ListInput />
            <InputLabelPosition
                id={keyPath}
                errorMessage={hasError}
                label={prop.title}
                type={prop.type}
                className={`mt-1 block w-full rounded-md ${!!hasError ? "border-red-500" : "bg-gray-100 border-transparent"
                    } focus:border-gray-500 focus:bg-white focus:ring-0`}
                onChange={(event: any) => { handleChange(setFormData, keyPath, event.target.value); handleValidation(prop, event); }}
            /> */}

// Input validation

