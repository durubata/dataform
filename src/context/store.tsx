import { create } from 'zustand';
import * as objectPath from 'object-path';
import { produce } from 'immer';
import { validationUtil } from '../utils/validate';
import { resolveGroupPath } from '../utils/resolvers';
import { dataToStyle } from '../utils/common';

export interface DataformStoreProps {
  setStateItem: (item: { [key: string]: any }) => void;
  timestamp?: number;
  activePath?: string;
  data?: any;
  error?: any;
  configs?: any;
  setData: (id, keyPath?: string, value?: any, creatable?: boolean) => void;
  getData: (id, keyPath?: string) => any;
  setError: (id, keyPath?: string, value?: any) => void;
  getError: (id, keyPath?: string) => any;
  setConfig: (id, initialData: any, schema: any, mode?: string, layoutSchema?: any, theme?: any) => void;
  getConfig: (id) => { initialData: any, schema: any; mode: string; layoutSchema: any, theme: any };
  getTheme: (id, themeName) => any;
  refreshList: { [key: string]: number };
  addArrayItem: (id, keyPath: string, defaultItem: any) => void;
  removeArrayItem: (id, keyPath: string, index: number) => void;
  notice?: { message: string; type?: 'success' | 'error' | 'warning' | 'info' };
  onChangeCallbacks?: { [key: string]: any };
  activePaths?: { [key: string]: string },
  setActivePath?: (id: string, activePath: string) => void,
  setCallback?: (id: string, callBack) => void,
  getActivePath?: (id: string) => string,
}

export const useDataformStore = create<DataformStoreProps>((set, get) => ({
  data: {},
  error: {},
  configs: {},
  refreshList: {},
  onChangeCallbacks: {},
  activePaths: {},
  setStateItem: (item: { [key: string]: any }) => set((state: any) => ({ ...item })),
  setActivePath: (id, activePath) => set(state => {
    const activePaths = produce(state.activePaths, (draft: any) => {
      draft[id] = activePath;
    });
    if (get().onChangeCallbacks[id]) {
      get().onChangeCallbacks[id](id, activePath, get().data[id]);
    }
    return { activePaths };
  }),
  getActivePath: (id) => {
    return get().activePaths[id];
  },
  setCallback: (id, callBack) => set((state: any) => {
    const onChangeCallbacks = produce(state.onChangeCallbacks, (draft: any) => {
      draft[id] = callBack;
    });
    return { onChangeCallbacks };
  }),
  setData: (id, keyPath, value, creatable?) =>
    set((state: any) => {
      const data = produce(state.data, (draft: any) => {
        if (keyPath) {
          objectPath.set(draft, `${id}.${keyPath}`, value);

          if (creatable) {
            const groupPath = resolveGroupPath(keyPath);
            const groupValue = objectPath.get(draft, `${id}.${groupPath}`) || [];
            objectPath.set(draft, `${id}.${groupPath}`, Array.from(new Set([...groupValue, ...value])));
          }
        } else if (typeof id !== 'undefined' && id !== null && id !== '') {
          objectPath.set(draft, id, value);
        } else {
          draft = value;
        }
      });
      if (get().onChangeCallbacks[id]) {
        get().onChangeCallbacks[id](id, keyPath, data[id], get().error[id]);
      }
      return { data, activePath: keyPath };
    }),
  getData: (id, keyPath?) => {
    const { data } = get();
    if ((typeof id === 'undefined' || id === null || id === '') && !keyPath) {
      return data
    }
    if (!keyPath) {
      return objectPath.get(data, `${id}`);
    }
    return objectPath.get(data, `${id}.${keyPath}`);
  },
  setError: (id, keyPath, value) =>
    set((state: any) => {
      const error = produce(state.error, (draft: any) => {
        if (keyPath) {
          objectPath.set(draft, `${id}.${keyPath}`, value);
        } else if (typeof id !== 'undefined' && id !== null && id !== '') {
          objectPath.set(draft, id, value);
        } else {
          draft = value;
        }
      });
      if (get().onChangeCallbacks[id]) {
        get().onChangeCallbacks[id](id, keyPath, get().data[id], error[id]);
      }
      return { error, activePath: keyPath };
    }),
  getError: (id, keyPath?) => {
    const { error } = get();
    if ((typeof id === 'undefined' || id === null || id === '') && !keyPath) {
      return error
    }
    if (!keyPath) {
      return objectPath.get(error, `${id}`);
    }
    return objectPath.get(error, `${id}.${keyPath}`);
  },
  addArrayItem: (id, keyPath: string, defaultItem: any) =>
    set(state => {
      const data = produce(state.data, (draft: any) => {
        const current = objectPath.get(draft, `${id}.${keyPath}`);
        if (current) {
          current.push(defaultItem);
        } else {
          objectPath.set(draft, `${id}.${keyPath}`, [defaultItem]);
        }
      });
      return {
        data,
        refreshList: { ...state.refreshList, [keyPath]: Date.now() },
      };

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
  removeArrayItem: (id, keyPath: string, index: number) =>
    set(state => {
      const data = produce(state.data, (draft: any) => {
        objectPath.del(draft, `${id}.${keyPath}.${index}`);
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
      if (get().onChangeCallbacks[id]) {
        get().onChangeCallbacks[id](id, keyPath, data[id], get().error[id]);
      }
      return {
        data,
        refreshList: { ...state.refreshList, [keyPath]: Date.now() },
      };
    }),
  handleValidation: (prop: any, event: React.ChangeEvent<HTMLInputElement>) => {
    if (!prop.validation) return true;

    const validationResult = prop.validation.every((ruleObj: any) =>
      validationUtil(ruleObj.rule, event.target.value, ruleObj.value),
    );

    if (!validationResult) {
      // Apply error styles or show an error message
    }
    return null;
  },
  setConfig: (id, initialData = {}, schema, mode = 'form', layoutSchema, theme) => set(state => {
    const configs = produce(state.configs, (draft: any) => {
      if (!schema) {
        delete draft[id]
      } else {
        draft[id] = { schema, mode, layoutSchema, initialData, theme };
      }
    });
    return { configs };
  }),
  getConfig: (id) => {
    return get().configs[id];
  },
  getTheme: (id, themeName) => {
    const { configs } = get();
    const config = configs[id];
    if (!config) return null;
    const theme = config.theme;
    if (!theme) return null;
    return theme?.content && dataToStyle(theme.content[themeName])
  },
}));
