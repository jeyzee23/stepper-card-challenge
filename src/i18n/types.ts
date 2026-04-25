import type { TranslationSchema } from './locales/en';

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
export type TranslationOptions = Record<string, unknown>;
export type { TranslationSchema };
