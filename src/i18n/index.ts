import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { resources } from './resources';

const defaultLanguage = 'es';
const supportedLanguages = ['es', 'en'];
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

export default i18n;
