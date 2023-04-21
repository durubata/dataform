const renderProperties = (properties: any, parentKeyPath = '') => {
    const groups: { [group: string]: React.ReactNode[] } = {};

    Object.entries(properties).forEach(([key, prop]) => {
        const keyPath = parentKeyPath ? `${parentKeyPath}.${key}` : key;
        const groupKey = prop['x-group'] || 'default';

        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }

        // ... (existing code to handle objects, arrays, and input controls)

        groups[groupKey].push(
            <div key={keyPath} className="w-full md:w-auto md:flex-1 md:mr-2">
                <InputLabelPosition
                    label={prop.title}
                    position="top"
                    id={keyPath}
                    type={prop.type}
                    onChange={(event) => handleChange(keyPath, event.target.value)}
                />
            </div>
        );
    });

    return Object.values(groups).map((group, index) => (
        <div key={index} className="form-row flex flex-wrap">
            {group}
        </div>
    ));
};
