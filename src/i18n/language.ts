import type { AppLanguage } from './types';

export function resolveAppLanguage(language: string): AppLanguage {
  return language === 'en' ? 'en' : 'es';
}
