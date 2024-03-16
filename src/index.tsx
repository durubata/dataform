import * as React from 'react';
import { CustomJsonSchemaForm } from './components/form';

export const DataForm = (props: any) => {
  return <CustomJsonSchemaForm  {...props} schema={props.schema || schema} />
};

const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
    }
  }
}