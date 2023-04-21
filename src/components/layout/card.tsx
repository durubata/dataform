
export const LayoutCard = (props: any) => {
    return (
        <div className={`p-4 pt-2 bg-white shadow m-4 rounded-md  flex-grow ${props?.className}`}>
            {props.children}
        </div>
    );
};
