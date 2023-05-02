import * as React from 'react';
import { renderProperties } from './rederer';
import { Notification } from '../common/notification';
import { DataformStoreProps, useDataformStore } from '../../context/store';

interface CustomJsonSchemaFormProps {
  schema: {
    title: string;
    properties: {
      [key: string]: any;
    };
  };
  onSubmit: (formData: { [key: string]: any }) => void;
}

export const CustomJsonSchemaForm: React.FC<CustomJsonSchemaFormProps> = ({
  schema,
  onSubmit,
}) => {
  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    return true;
  };
  const { getData} =
    useDataformStore(state => state, shouldNotUpdate);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({});
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit} className="pb-[200px]">
        {renderProperties({
          properties: schema.properties,
          parentKeyPath: '',
          getData,
        })}
        <button type="submit">Submit</button>
      </form>
      <Notification />
    </div>
  );
};
