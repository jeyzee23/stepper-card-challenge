import type { AppLanguage } from '@/i18n';

const CURRENCY_FORMATTERS = new Map<string, Intl.NumberFormat>();
const DATETIME_FORMATTERS = new Map<AppLanguage, Intl.DateTimeFormat>();

export function getLocaleTag(language: AppLanguage) {
  return language === 'es' ? 'es-AR' : 'en-US';
}

export function formatCurrency(
  value: number,
  currency: string,
  language: AppLanguage,
) {
  const formatterKey = `${language}:${currency}`;
  const formatter =
    CURRENCY_FORMATTERS.get(formatterKey) ??
    new Intl.NumberFormat(getLocaleTag(language), {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    });

  if (!CURRENCY_FORMATTERS.has(formatterKey)) {
    CURRENCY_FORMATTERS.set(formatterKey, formatter);
  }

  return formatter.format(value);
}

export function formatDateTime(value: string, language: AppLanguage) {
  const formatter =
    DATETIME_FORMATTERS.get(language) ??
    new Intl.DateTimeFormat(getLocaleTag(language), {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

  if (!DATETIME_FORMATTERS.has(language)) {
    DATETIME_FORMATTERS.set(language, formatter);
  }

  return formatter.format(new Date(value));
}
