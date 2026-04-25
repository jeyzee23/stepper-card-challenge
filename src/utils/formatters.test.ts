import { formatCurrency, formatDateTime, getLocaleTag } from './formatters';

describe('formatters', () => {
  it('maps supported language codes to locale tags', () => {
    expect(getLocaleTag('es')).toBe('es-AR');
    expect(getLocaleTag('en')).toBe('en-US');
  });

  it('formats currency for Spanish and English locales', () => {
    expect(formatCurrency(185000, 'ARS', 'es')).toContain('185.000');
    expect(formatCurrency(185000, 'ARS', 'en')).toContain('185,000');
  });

  it('formats date time without throwing for supported locales', () => {
    expect(formatDateTime('2026-04-23T20:30:00.000Z', 'es')).toContain('2026');
    expect(formatDateTime('2026-04-23T20:30:00.000Z', 'en')).toContain('2026');
  });
});
