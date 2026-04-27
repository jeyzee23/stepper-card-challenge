import { initReactI18next } from 'react-i18next';

import { i18n } from './i18nCore';
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

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export { translate } from './i18nCore';
export { resolveAppLanguage } from './i18nCore';
export type {
  TranslationKey,
  TranslationOptions,
  TranslationSchema,
  AppLanguage,
} from './i18nCore';
export { i18n };
export default i18n;
