import * as objectPath from 'object-path';
import { isEmpty, toSentenceCase } from './common';
import { el } from 'date-fns/locale';

export const resolveValue = (keyPath: string, schema: any, data: any) => {
  const props = objectPath.get(schema, keyPath);
  let value = objectPath.get(data, keyPath);
  value = resolveTemplate(value, data);
  if (isEmpty(value)) {
    value = props['default'];
  }
  return value;
};

export const resolveOptions = (keyPath: string, enumValue: any, data) => {
  if (enumValue && typeof enumValue === 'string') {
    const options = resolveArrayTemplate(enumValue, keyPath, data);
    if (typeof options === 'string') {
      return options.split(',').map((item: string) => ({ label: item, value: item }));
    } else if (Array.isArray(options) && typeof options[0] === 'string') {
      return options.map((item: string) => ({ label: item, value: item }));
    }
    return options;
  }
  if (
    enumValue &&
    Array.isArray(enumValue) &&
    typeof enumValue[0] === 'string'
  ) {
    return enumValue.map((item: string) => ({ label: item, value: item }));
  }
  return enumValue;
};

export const formatValue = (keyPath: string, schema: any, value: any) => {
  const props = objectPath.get(schema, keyPath);
  if (props['type'] === 'number' && typeof value === 'string') {
    return Number(value);
  }
  if (props['type'] === 'array' && typeof value === 'string') {
    return value.split(',');
  }
  if (props['type'] === 'array' && typeof value === 'string') {
    return value.split(',');
  }
  if (props['type'] === 'boolean' && typeof value === 'string') {
    return value === 'true';
  }
  return value;
};

export const resolveTemplate = (templateKey: string, data: any) => {
  if (!templateKey || !data) return;
  let parsedValue;

  if (templateKey.startsWith('{{') && templateKey.endsWith('}}')) {
    const searchKey = templateKey.replace('{{', '').replace('}}', '');
    parsedValue = objectPath.get(data, searchKey);
  } else {
    parsedValue = templateKey;
  }
  return parsedValue;
};


export const resolveArrayTemplate = (template: string, activePath, data: any) => {
  if (!template || !data) return;
  let parsedValue = template;

  if (template.startsWith('{{[') && template.endsWith(']}}')) {
    let searchKey = template.replace('{{[', '').replace(']}}', '');
    const arrayPath = searchKey.substring(0, searchKey.indexOf('.'));
    const propName = searchKey.substring(searchKey.indexOf('.') + 1);
    const array = objectPath.get(data, arrayPath);
    const values = array?.map((item) => {
      return item[propName];
    });
    return values;
  }

  if (template.startsWith('{{') && template.endsWith('}}')) {
    let searchKey = template.replace('{{', '').replace('}}', '');

    if (searchKey.indexOf('[]') > -1) {
      searchKey = replaceSquareBracket(activePath, searchKey);
    }
    parsedValue = objectPath.get(data, searchKey);
    return parsedValue;
  }
  return template;
}

function replaceSquareBracket(input: string, target: string): string {
  const regex = /(\d+)(?!.*\d)/g;
  let match;

  while ((match = regex.exec(input)) !== null) {
    const index = match[1];
    target = target.replace('[]', index);
  }

  return target;
}

export const resolveGroupPath = (path) => {
  let parts = path.split('.');
  let secondToLastPart = parts[parts.length - 2];

  if (!isNaN(secondToLastPart)) { // Check if second to last part is a number
    parts.splice(parts.length - 2, 1); // Remove the part if it's a number
  }

  return parts.join(''); // Reconstruct the string
}

export const dataSourceToOptions = (dataSource: any) => {
  if (dataSource.type === 'json') {
    if (typeof dataSource.value === 'string') {
      return dataSource.json.split(',').map((item: string) => ({ label: item, value: item }));
    } else if (Array.isArray(dataSource.value) && typeof dataSource.value[0] === 'string') {
      return dataSource.value.map((item: string) => ({ label: item, value: item }));
    } else {
      return dataSource.value;
    }
  }
}

export const computeLabel = (key, schema): string => {
  if (schema['x-hide-label']) return '';
  let label = isEmpty(schema.title) ? toSentenceCase(key || '') : schema.title;
  return schema.required && !schema['x-hide-required-asterisk'] && schema.type !== 'object' ? label + '*' : label;
};