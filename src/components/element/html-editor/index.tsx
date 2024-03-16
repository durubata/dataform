import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { editorConfig } from './editor-config';

// Dynamically import EditorJS without SSR
const EditorJS: any = dynamic(
  () => import('@editorjs/editorjs').then((mod) => mod.default),
  { ssr: false }
);

const HTMLEditor = ({ value, onChange }) => {
  const editorContainer = useRef(null);
  const editorInstance = useRef(null);

  useEffect(() => {
    if (editorContainer.current && !editorInstance.current) {
      editorInstance.current = new EditorJS({
        ...editorConfig,
        holder: editorContainer.current,
        data: value,
        placeholder: 'Let’s write an awesome story!',
        onChange: async () => {
          const outputData = await editorInstance.current.save();
          handleOnChange(outputData);
        },
      });
    }

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  const handleOnChange = (outputData) => {
    onChange({ target: { value: outputData } });
  };

  return <div ref={editorContainer}></div>;
};

export default HTMLEditor;
