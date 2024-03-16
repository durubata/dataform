import * as React from 'react';
import { renderProperties } from './rederer';
import { DataformNotification } from '../common/notification';
import { DataformStoreProps, useDataformStore } from '../../context/store';
import { CustomLoader } from '../common/custom-loader';
import { validateForm } from '../../utils/validate';

interface CustomJsonSchemaFormProps {
  schema: {
    title: string;
    properties: {
      [key: string]: any;
    };
  };
  onSubmit: (formData: { [key: string]: any }) => void;
  onBlur?: (formData: { [key: string]: any }) => void;
  onChange?: (formData: { [key: string]: any }) => void;
  id?: string;
  timestamp?: number;
  randomBackground?: boolean;
}

//mode: form, slides, wizard, normal
export const CustomJsonSchemaForm: React.FC<CustomJsonSchemaFormProps> = (props: { activeSlide?, data, schema, onSubmit, onCancel, onBlur, onChange, id, timestamp, mode, layoutSchema, theme, randomBackground }) => {
  const { schema, onSubmit, onCancel, onBlur, onChange, id, timestamp, data: initialData, mode, layoutSchema, activeSlide, theme } = props;

  const shouldNotUpdate = (
    prev: DataformStoreProps,
    next: DataformStoreProps,
  ): boolean => {
    if (prev.timestamp !== next.timestamp) return false;
    return true;
  };

  const { getData, getConfig, setStateItem, setError, setConfig, setData, setCallback, setActivePath, getActivePath } = useDataformStore(state => state, shouldNotUpdate);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setStateItem({ timestamp: timestamp })
  }, [props.timestamp]);

  React.useEffect(() => {
    setConfig(id, initialData, schema, mode, layoutSchema, theme)
  }, [props.schema]);

  React.useEffect(() => {
    setData(id, '', initialData)
    setConfig(id, initialData, schema, mode, layoutSchema, theme)
    setCallback(id, onChange)
    setStateItem({ timestamp: Date.now() })
    setReady(true)

    return () => {
      setCallback(id, undefined)
      setData(id, '', undefined)
      setConfig(id, null, null, null, null, null)
    }
  }, []);

  const handleSubmit = (event: React.FormEvent, formId) => {
    event.preventDefault();
    const formData = getData(formId, '');
    const formConfig = getConfig(formId);
    console.log('formData', formData, formConfig)
    const errors = validateForm(formData, formConfig.schema)
    setError(id, '', errors);
    console.log('errors', errors)
    if (onSubmit) {
      onSubmit(formId, formData, errors)
    }
  };

  const handleCancel = (event: React.FormEvent, formId) => {
    event.preventDefault();
    const formData = getData(formId, '');
    const formConfig = getConfig(formId);
    setData(id, '', formConfig.initialData)
    setError(id, '', {})
    if (onCancel) {
      onCancel(formId, formData)
    }
  };

  if (!ready) return <div className=' flex justify-center w-full'> <CustomLoader /></div>

  //@ts-ignore
  return (
    <div className="w-full h-full dataform">
      {renderProperties({ id: id, properties: schema?.properties, parentKeyPath: '', getData, setActivePath, getActivePath })}
      <DataformNotification />
    </div>
  );
};
