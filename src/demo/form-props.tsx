const renderProperties = (properties: any, parentKeyPath = '') => {
    // ... (existing code)

    Object.entries(properties).forEach(([key, prop]) => {
        // ... (existing code)

        const extraProps = prop['x-props'] || {};

        // Convert string event handler names to actual functions
        if (extraProps.onBlur && typeof extraProps.onBlur === 'string') {
            extraProps.onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
                if (extraProps.onBlur === 'handleNameBlur') {
                    // Call your custom handleNameBlur function here
                }
            };
        }

        groups[groupKey].push(
            <div key={keyPath} className="w-full md:w-auto md:flex-1 md:mr-2">
                <InputLabelPosition
                    label={prop.title}
                    position="top"
                    id={keyPath}
                    type={prop.type}
                    onChange={(event) => handleChange(keyPath, event.target.value)}
                    {...extraProps}
                />
            </div>
        );
    });

    // ... (existing code)
};



const cc = `
Here's a list of common event handlers that can be used with an input element in a React component:

onChange: Triggered when the input value changes. //event.target.files //checked
onBlur: Triggered when the input loses focus.
onFocus: Triggered when the input receives focus.
onKeyDown: Triggered when a key is first pressed down.
onKeyUp: Triggered when a key is released.
onKeyPress: Triggered when a key is pressed and released.
onMouseDown: Triggered when the mouse button is pressed down over the input.
onMouseUp: Triggered when the mouse button is released over the input.
onMouseEnter: Triggered when the mouse pointer enters the input area.
onMouseLeave: Triggered when the mouse pointer leaves the input area.
onMouseMove: Triggered when the mouse pointer moves within the input area.
onClick: Triggered when the input is clicked.
onDoubleClick: Triggered when the input is double-clicked.
onContextMenu: Triggered when the context menu is opened (usually by right-clicking) over the input.
onDrag: Triggered when the input is being dragged.
onDragStart: Triggered when the user starts to drag the input.
onDragEnd: Triggered when the user stops dragging the input.
onDragEnter: Triggered when the input is being dragged and enters a valid drop target.
onDragLeave: Triggered when the input is being dragged and leaves a valid drop target.
onDragOver: Triggered when the input is being dragged over a valid drop target.
onDrop: Triggered when the input is being dragged and dropped on a valid drop target.
onSelect: Triggered when the input text is selected.
`