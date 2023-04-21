import create from 'zustand';
import { diff } from 'deep-object-diff';
import * as objectPath from 'object-path';
import { produce } from "immer"
import { validationUtil } from '@/utils/validate';

export interface DataformStoreProps {
    setStateItem: (item: { [key: string]: any }) => void;
    timestamp?: number;
    data?: any;
    setData: (keyPath: string, value: any) => void;
    getData: (keyPath: string) => any;
    refreshList: { [key: string]: number };
    addArrayItem: (keyPath: string, defaultItem: any) => void;
    removeArrayItem: (keyPath: string, index: number) => void;
}

export const useDataformStore = create<DataformStoreProps>((set, get) => ({
    data: {},
    refreshList: {},
    setStateItem: (item: { [key: string]: any }) => set((state: any) => ({ ...item })),
    setData: (keyPath, value) => set((state: any) => {
        const data = produce(state.data, (draft: any) => {
            objectPath.set(draft, keyPath, value);
        });
        console.log(data);
        return { data };

    }),
    getData: (keyPath) => {
        const { data } = get();
        return objectPath.get(data, keyPath);
    },
    addArrayItem: (keyPath: string, defaultItem: any) => set((state) => {
        const data = produce(state.data, (draft: any) => {
            const current = objectPath.get(draft, keyPath);
            if (current) {
                current.push(defaultItem);
            } else {
                objectPath.set(draft, keyPath, [defaultItem]);
            }
        });
        console.log(keyPath, data);
        return { data, refreshList: { ...state.refreshList, [keyPath]: Date.now() } };


        // setFormData((prevFormData: any) => {
        //     const newFormData = { ...prevFormData };
        //     const keyParts = keyPath.split('.');
        //     let current = newFormData;

        //     keyParts.forEach((keyPart, index) => {
        //         if (index === keyParts.length - 1) {
        //             current[keyPart] = current[keyPart] || [];
        //             current[keyPart].push('');
        //         } else {
        //             if (!current[keyPart]) {
        //                 current[keyPart] = [];
        //             }
        //             current = current[keyPart];
        //         }
        //     });

        //     return newFormData;
        // });
    }),
    removeArrayItem: (keyPath: string, index: number) => set((state) => {

        const data = produce(state.data, (draft: any) => {
            objectPath.del(draft, keyPath + '.' + index);
        });
        // setFormData((prevFormData: any) => {
        //     const newFormData = { ...prevFormData };
        //     const keyParts = keyPath.split('.');
        //     let current = newFormData;

        //     keyParts.forEach((keyPart, idx) => {
        //         if (idx === keyParts.length - 1) {
        //             current[keyPart].splice(index, 1);
        //         } else {
        //             current = current[keyPart];
        //         }
        //     });

        //     return newFormData;
        // });
        return { data, refreshList: { ...state.refreshList, [keyPath]: Date.now() } };
    }),
    handleValidation: (prop: any, event: React.ChangeEvent<HTMLInputElement>) => {
        if (!prop.validation) return true;

        const validationResult = prop.validation.every((ruleObj: any) =>
            validationUtil(ruleObj.rule, event.target.value, ruleObj.value),
        );

        if (!validationResult) {
            // Apply error styles or show an error message
        }
    }
}));