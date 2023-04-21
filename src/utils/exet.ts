export const execScript = (event: any, method: string) => {
    if (event && typeof event === 'string') {
        event = (event: React.FocusEvent<HTMLInputElement>) => {
            eval('handleNameBlur(event)');
        };
    }
}