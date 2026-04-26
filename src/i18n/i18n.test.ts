import i18n, { translate } from './index';
import { en } from './locales/en';
import { es } from './locales/es';

function flattenKeys(value: unknown, prefix = ''): string[] {
  if (typeof value === 'string' || Array.isArray(value)) {
    return [prefix];
  }

  if (!value || typeof value !== 'object') {
    return [];
  }

  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('i18n quality', () => {
  it('starts in Spanish by default', () => {
    expect(i18n.language).toBe('es');
  });

  it('keeps English and Spanish locale keys in parity', () => {
    expect(flattenKeys(es).sort()).toEqual(flattenKeys(en).sort());
  });

  it('translates valid keys through the non-hook helper', async () => {
    await i18n.changeLanguage('es');

    expect(translate('actions.next')).toBe('Continuar');
    expect(translate('statusCard.statuses.enabled.label')).toBe('Activa');
  });
});
