import * as objectPath from 'object-path';
import { isEmpty } from '.';

export const resolveValue = (keyPath: string, schema: any, data: any) => {
  const props = objectPath.get(schema, keyPath);
  let value = objectPath.get(data, keyPath);
  value = getTemplateValue(value, data);
  if (isEmpty(value)) {
    value = props['default'];
  }
  return value;
};

export const resolveOptions = (keyPath: string, schema: any) => {
  if (schema.enum && typeof schema.enum === 'string') {
    return schema.enum
      .split(',')
      .map((item: string) => ({ label: item, value: item }));
  }
  if (
    schema.enum &&
    Array.isArray(schema.enum) &&
    typeof schema.enum[0] === 'string'
  ) {
    return schema.enum.map((item: string) => ({ label: item, value: item }));
  }
  return schema.enum;
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

export const getTemplateValue = (templateKey: string, data: any) => {
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
