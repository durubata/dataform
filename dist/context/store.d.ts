export interface DataformStoreProps {
    setStateItem: (item: {
        [key: string]: any;
    }) => void;
    timestamp?: number;
    data?: any;
    setData: (keyPath: string, value: any) => void;
    getData: (keyPath: string) => any;
    refreshList: {
        [key: string]: number;
    };
    addArrayItem: (keyPath: string, defaultItem: any) => void;
    removeArrayItem: (keyPath: string, index: number) => void;
    notice?: {
        message: string;
        type?: 'success' | 'error' | 'warning' | 'info';
    };
}
export declare const useDataformStore: any;
