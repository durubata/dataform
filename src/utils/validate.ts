export const validate = (formData: any, schema: any) => {
    const validationErrors: any = {};
    const properties = schema.properties;

    const checkRequiredIf = (property: any, value: any) => {
        if (property.requiredIf) {
            const { field, value: requiredValue } = property.requiredIf;
            if (formData[field] === requiredValue && !value) {
                return `This field is required when ${field} is ${requiredValue}.`;
            }
        }
        return null;
    };

    Object.keys(properties).forEach((key) => {
        const value = formData[key];
        const prop = properties[key];
        const validationResult = validateField(key, value, prop);

        if (prop.required && !value) {
            validationErrors[key] = "This field is required.";
        } else {
            const requiredIfError = checkRequiredIf(prop, value);
            if (requiredIfError) {
                validationErrors[key] = requiredIfError;
            }
        }
    });


    return validationErrors
};


export const validateField = (keyPath, value, schema) => {
    const fieldSchema = getSchemaAtPath(schema, keyPath);

    if (fieldSchema['x-matchField']) {
        const matchFieldPath = fieldSchema['x-matchField'];
        const matchFieldValue = getValueAtPath(formData, matchFieldPath);

        if (value !== matchFieldValue) {
            return `The ${fieldSchema.title} does not match the ${getSchemaAtPath(schema, matchFieldPath).title}`;
        }
    }

    // Additional validation rules can be added here
    return null;
};

// Helper function to get the schema at the given keyPath
export const getSchemaAtPath = (schema, keyPath) => {
    const pathParts = keyPath.split('.');
    let currentSchema = schema.properties;

    for (const part of pathParts) {
        currentSchema = currentSchema[part].properties || currentSchema[part];
    }

    return currentSchema;
};

// Helper function to get the value at the given keyPath in formData
export const getValueAtPath = (formData, keyPath) => {
    const pathParts = keyPath.split('.');
    let currentValue = formData;

    for (const part of pathParts) {
        currentValue = currentValue?.[part];
    }

    return currentValue;
};

export const validationUtil = (rule: string, value: any, comparisonValue?: any) => {
    switch (rule) {
        case 'equals':
            return value === comparisonValue;
        case 'notEquals':
            return value !== comparisonValue;
        case 'greaterThan':
            return value > comparisonValue;
        case 'lessThan':
            return value < comparisonValue;
        case 'greaterThanOrEqual':
            return value >= comparisonValue;
        case 'lessThanOrEqual':
            return value <= comparisonValue;
        case 'includes':
            return value.includes(comparisonValue);
        case 'startsWith':
            return value.startsWith(comparisonValue);
        case 'endsWith':
            return value.endsWith(comparisonValue);
        case 'regex':
            return new RegExp(comparisonValue).test(value);
        case 'isEmpty':
            return !value || (Array.isArray(value) && value.length === 0);
        case 'isNotEmpty':
            return value && !(Array.isArray(value) && value.length === 0);
        default:
            return false;
    }
};