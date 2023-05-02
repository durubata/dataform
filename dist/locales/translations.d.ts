import { ConvertedToObjectType, TranslationJsonType } from './types';
/**
 * This file is seperate from the './i18n.ts' simply to make the Hot Module Replacement work seamlessly.
 * Your components can import this file in 'messages.ts' files which would ruin the HMR if this isn't a separate module
 */
export declare const translations: ConvertedToObjectType<TranslationJsonType>;
export declare const convertLanguageJsonToObject: (json: any, objToConvertTo?: any, current?: string) => void;
