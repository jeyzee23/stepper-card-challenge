import i18n from 'i18next';

import type { TranslationSchema } from './locales/en';

export type AppLanguage = 'es' | 'en';

type TranslationLeaf = string | readonly string[];
type PreviousDepth = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8];

type NestedTranslationKey<T, Depth extends number = 8> = [Depth] extends [never]
  ? never
  : {
      [Key in Extract<keyof T, string>]: T[Key] extends TranslationLeaf
        ? Key
        : `${Key}.${NestedTranslationKey<T[Key], PreviousDepth[Depth]>}`;
    }[Extract<keyof T, string>];

export type TranslationKey = NestedTranslationKey<TranslationSchema>;
type TranslationOptionValue = string | number | boolean | null | undefined;
export type TranslationOptions = Record<string, TranslationOptionValue>;
export type { TranslationSchema };

export function resolveAppLanguage(language: string): AppLanguage {
  return language === 'en' ? 'en' : 'es';
}

export function translate(key: TranslationKey, options?: TranslationOptions) {
  return i18n.t(key, options);
}

export { i18n };
