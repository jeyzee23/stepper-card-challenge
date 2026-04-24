import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { en } from './locales/en';
import { es } from './locales/es';

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

const defaultLanguage = 'es' as const;
const supportedLanguages = ['es', 'en'] as const;
const bestLanguage =
  RNLocalize.findBestLanguageTag(supportedLanguages)?.languageTag ??
  defaultLanguage;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: bestLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export { translate } from './translate';
export type {
  TranslationKey,
  TranslationOptions,
  TranslationSchema,
} from './types';
export default i18n;
