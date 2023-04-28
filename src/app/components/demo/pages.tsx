import { useState } from 'react';
import { getSchema } from './schema';
import { useDataformStore } from 'context/store';

export default function PageHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('source');
  const [schema, setSchema] = useState();
  const { setStateItem } = useDataformStore(
    state => state,
    (ov, nv) => true,
  );

  const setSchemaName = (name: any) => {
    setSchema(getSchema(name));
  };

  const onSubmit = (formData: any) => {
    console.log('Form data:', formData);
  };

  const handleCopy = () => {
    console.log('handleCopy');
  };

  return <div>PageHome</div>;
}
