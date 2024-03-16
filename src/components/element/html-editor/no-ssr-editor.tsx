import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

export const NOSSRHTMLEditor = ({ value, onChange }) => {
    const [LazyEditor, setLazyEditor] = useState(null);

    useEffect(() => {
        const loadClientSideComponent = async () => {
            const dynamicComponent = await dynamic(() => import('./index'), {
                ssr: false,
            });
            setLazyEditor(() => dynamicComponent);
        };
        loadClientSideComponent();
    }, []);

    return LazyEditor ? <LazyEditor value={value} onChange={onChange} /> : null;
};

