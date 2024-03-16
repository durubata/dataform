import { formElementTypes } from "../assets/form-elements";

export const formElementSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Form',
    name: 'form',
    properties: {
        email: {
            type: 'string',
            title: 'Your Email',
            format: 'email',
        },
        inputs: {
            type: 'array',
            title: 'Inputs',
            'x-control': 'form-elements',
            hideLabel: false,
            enum: formElementTypes.map((item) => ({ 'x-hide-label': true, label: item.title, value: item.name, icon: item.icon })),
            items: {
                type: 'object',
                title: `{{inputs.[].name}}`,
                properties: {
                    name: {
                        type: 'string',
                        title: 'Name',
                    },
                    'x-icon': {
                        type: 'string',
                        title: 'Icon',
                        'x-control': 'icon-picker'
                    },
                    'title': {
                        type: 'string',
                        title: 'Label',
                    },
                    'x-label-position': {
                        type: 'string',
                        title: 'Label Position',
                        enum: ['top', 'left', 'bottom', 'right'],
                    },
                    'x-group': {
                        type: 'string',
                        title: 'Group',
                    },
                    enum: {
                        type: 'array',
                        title: 'Options',
                        layout: 'collapsible',
                        items: {
                            type: 'object',
                            layout: 'card',
                            properties: {
                                label: {
                                    type: 'string',
                                    title: 'Label',
                                    'x-group': 'Options'
                                },
                                value: {
                                    type: 'string',
                                    title: 'Value',
                                    'x-group': 'Options'
                                }
                            }
                        }
                    },
                    validation: {
                        type: 'array',
                        title: 'Validation',
                        layout: 'collapsible',
                        items: {
                            type: 'object',
                            layout: 'card',
                            properties: {
                                type: {
                                    type: 'string',
                                    title: 'Type',
                                    'x-group': 'validation',
                                    enum: ['required', 'min', 'max', 'minLength', 'maxLength', 'pattern'],
                                },
                                value: {
                                    type: 'string',
                                    'x-group': 'validation',
                                    title: 'Value',
                                }
                            }
                        }
                    },
                }
            }
        },
    },
}
