import Ajv, { JSONSchemaType } from "ajv"
import addFormats from "ajv-formats"

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
});
addFormats(ajv)

export function createValidator(schema: object) {
  const validator = ajv.compile(schema);
  return (model: object) => {
    validator(model);
    const valudationOutput = validator.errors?.length ? { details: validator.errors } : null;
    return valudationOutput;
  };
}

export const validateForm = (formData: any, schema: any) => {
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

  Object.keys(properties).forEach(key => {
    const value = formData[key];
    const prop = properties[key];
    const fieldErrors = [];
    let anyError = false;
    // if (value) {
    const validationResult = validateField(key, value, formData, prop);
    if (validationResult) {
      anyError = true;
      fieldErrors.push(...validationResult);
    }
    // }

    if (prop.required && !value) {
      anyError = true;
      fieldErrors.push('This field is required.');
    }

    const requiredIfError = checkRequiredIf(prop, value);
    if (requiredIfError) {
      anyError = true;
      fieldErrors.push(requiredIfError);
    }

    if (anyError) {
      validationErrors[key] = fieldErrors;
    }
  });

  return validationErrors;
};

const pattern = /\.\d+$/;
export const validateField = (keyPath, value, formData, schema, arrayIndex?) => {
  if (!schema) return null;
  if (pattern.test(keyPath) && typeof arrayIndex === 'number') {
    keyPath = keyPath + '.items'
  }
  const fieldSchema = getSchemaAtPath(schema, keyPath);
  if (!fieldSchema) return null;
  const copySchema = structuredClone(fieldSchema);
  Object.keys(copySchema).forEach(key => {
    if (!['type', 'string', 'format', 'required'].includes(key)) {
      delete copySchema[key];
    }
  });

  let validationErrors;
  try {
    const schemaValidator = createValidator(copySchema);
    validationErrors = schemaValidator(value);
  } catch (error) {
    console.error({ error, value, validationErrors });
  }

  if (validationErrors) {
    const newErrors = [];
    validationErrors.details.forEach(error => {
      if (error.schemaPath === '#/required') {
        newErrors.push(error?.message);
      } else {
        newErrors.push(error?.message);
      }
    });
    return newErrors;
  }
  return undefined
  // if (fieldSchema['x-matchField']) {
  //   const matchFieldPath = fieldSchema['x-matchField'];
  //   const matchFieldValue = getValueAtPath(formData, matchFieldPath);

  //   if (value !== matchFieldValue) {
  //     return `The ${fieldSchema.title} does not match the ${getSchemaAtPath(schema, matchFieldPath).title
  //       }`;
  //   }
  // }

  // Additional validation rules can be added here
};


// Helper function to get the schema at the given keyPath
const getSchemaAtPath = (schema, path) => {
  const pathParts = path.split('.');
  let currentSchema = schema;

  for (const part of pathParts) {
    if (isNaN(parseInt(part))) {  // If the part is not a number
      if (currentSchema?.properties) {
        currentSchema = currentSchema.properties[part];
      } else if (currentSchema?.items) {
        if (currentSchema.items.type === 'object') {
          currentSchema = currentSchema.items.properties[part];
        } else {
          currentSchema = currentSchema.items;
        }
      }
    }
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

export const validationUtil = (
  rule: string,
  value: any,
  comparisonValue?: any,
) => {
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
