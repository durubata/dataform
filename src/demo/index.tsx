import React, { useState } from 'react';
import InputLabelPosition from '../components/_input/input';

interface CustomJsonSchemaFormProps {
    schema: {
        title: string;
        properties: {
            [key: string]: any;
        };
    };
    onSubmit: (formData: { [key: string]: any }) => void;
}

const CustomJsonSchemaForm: React.FC<CustomJsonSchemaFormProps> = ({ schema, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const handleChange = (keyPath: string, value: any) => {
        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData };
            const keyParts = keyPath.split('.');
            let current = newFormData;

            keyParts.forEach((keyPart, index) => {
                if (index === keyParts.length - 1) {
                    current[keyPart] = value;
                } else {
                    if (!current[keyPart]) {
                        current[keyPart] = {};
                    }
                    current = current[keyPart];
                }
            });

            return newFormData;
        });
    };

    const handleArrayChange = (keyPath: string, index: number, value: any) => {
        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData };
            const keyParts = keyPath.split('.');
            let current = newFormData;

            keyParts.forEach((keyPart, index) => {
                if (index === keyParts.length - 1) {
                    current[keyPart][index] = value;
                } else {
                    if (!current[keyPart]) {
                        current[keyPart] = [];
                    }
                    current = current[keyPart];
                }
            });

            return newFormData;
        });
    };

    const handleAddArrayItem = (keyPath: string) => {
        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData };
            const keyParts = keyPath.split('.');
            let current = newFormData;

            keyParts.forEach((keyPart, index) => {
                if (index === keyParts.length - 1) {
                    current[keyPart] = current[keyPart] || [];
                    current[keyPart].push('');
                } else {
                    if (!current[keyPart]) {
                        current[keyPart] = [];
                    }
                    current = current[keyPart];
                }
            });

            return newFormData;
        });
    };

    const handleRemoveArrayItem = (keyPath: string, index: number) => {
        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData };
            const keyParts = keyPath.split('.');
            let current = newFormData;

            keyParts.forEach((keyPart, idx) => {
                if (idx === keyParts.length - 1) {
                    current[keyPart].splice(index, 1);
                } else {
                    current = current[keyPart];
                }
            });

            return newFormData;
        });
    };

    const renderProperties = (properties: any, parentKeyPath = '') => {
        return Object.entries(properties).map(([key, prop]) => {
            const keyPath = parentKeyPath ? `${parentKeyPath}.${key}` : key;

            if (prop.type === 'object' && prop.properties) {
                return (
                    <div key={keyPath}>
                        <h3>{prop.title}</h3>
                        {renderProperties(prop.properties, keyPath)}
                    </div>
                );
            }

            if (prop.type === 'array' && prop.items) {
                const arrayItems = (formData[keyPath] as any[]) || [];

                return (
                    <div key={keyPath}>
                        <h3>{prop.title}</h3>
                        {arrayItems.map((item, index) => (
                            <div key={`${keyPath}.${index}`}>
                                {renderProperties({ [index]: prop.items }, keyPath)}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveArrayItem(keyPath, index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddArrayItem(keyPath)}>
                            Add Item
                        </button>
                    </div>
                );
            }

            return (
                <div key={keyPath}>
                    <InputLabelPosition
                        label={prop.title}
                        position='top'
                        id={keyPath}
                        type={prop.type}
                        onChange={(event) => handleChange(keyPath, event.target.value)}
                    />
                </div>
            );
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderProperties(schema.properties)}
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomJsonSchemaForm;
