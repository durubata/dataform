import { StyleMint } from "@/components/yugo/sytlemint/app";
import { useEffect, useState } from "react";
import { ButtonCancel } from "./control-button";
import { dataToStyle } from "@/utils";

export const StyleInput = (props) => {
    const { id, keyPath, description, onChange, value } = props;
    const [styles, setStyles] = useState({});

    useEffect(() => {
        setStyles(dataToStyle((value || {})));
    }, [value]);

    const handleChange = (id, path, data) => {
        onChange({ target: { value: data } })
        setStyles(dataToStyle(data));
    }

    const clearStyle = () => {
        onChange({ target: { value: null } })
        setStyles(null);
    }

    return (
        <div className="flex w-full justify-between items-center">
            <StyleMint value={value} id={id} keyPath={keyPath} onChange={handleChange} />
            <div style={styles} className="w-full">
                {description}
            </div>
            <ButtonCancel clickHandler={clearStyle} label="" />
        </div>
    );
};