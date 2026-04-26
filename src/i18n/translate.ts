import i18n from './i18nInstance';

import type { TranslationKey, TranslationOptions } from './types';

export function translate(key: TranslationKey, options?: TranslationOptions) {
  return i18n.t(key, options);
}
