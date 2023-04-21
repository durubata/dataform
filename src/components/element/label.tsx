
export const Label = (props: { id: string, label: string, position: string; isFocused: boolean; className?: string; }) => {
    return (
        <label
            htmlFor={props.id}
            className={` ${props?.className} whitespace-nowrap text-sm transition-all duration-300 ${props.isFocused ? "text-blue-500" : "text-gray-500"}`}  >
            {props.label}
        </label>
    );
};


