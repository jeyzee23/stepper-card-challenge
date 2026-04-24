export function getLocaleTag(language: string) {
  return language === 'es' ? 'es-AR' : 'en-US';
}

export function formatCurrency(
  value: number,
  currency: string,
  language: string,
) {
  return new Intl.NumberFormat(getLocaleTag(language), {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDateTime(value: string, language: string) {
  return new Intl.DateTimeFormat(getLocaleTag(language), {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}
