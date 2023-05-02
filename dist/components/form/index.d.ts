import * as React from 'react';
interface CustomJsonSchemaFormProps {
    schema: {
        title: string;
        properties: {
            [key: string]: any;
        };
    };
    onSubmit: (formData: {
        [key: string]: any;
    }) => void;
}
export declare const CustomJsonSchemaForm: React.FC<CustomJsonSchemaFormProps>;
export {};
