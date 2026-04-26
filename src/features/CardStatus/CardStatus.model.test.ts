import { buildCardDetailRows, getNextCardStatus } from './CardStatus.model';

import type { AccountCardData, CardDetailLabels } from './CardStatus.types';

describe('card status transitions', () => {
  it('cycles through the four challenge states', () => {
    expect(getNextCardStatus('disabled')).toBe('enabled');
    expect(getNextCardStatus('enabled')).toBe('paused');
    expect(getNextCardStatus('paused')).toBe('resumed');
    expect(getNextCardStatus('resumed')).toBe('disabled');
  });
});

describe('card detail rows', () => {
  const account: AccountCardData = {
    accountId: 'AC-2048',
    availableLimit: 185000,
    currency: 'ARS',
    features: [],
    holderName: 'Melany Suarez',
    maskedNumber: '**** 4831',
    monthlyLimit: 320000,
    planName: 'Growth Card',
    spentThisMonth: 135000,
    updatedAt: '2026-04-23T20:30:00.000Z',
  };

  const labels: CardDetailLabels = {
    availableLimit: 'Disponible',
    holder: 'Titular',
    monthlyLimit: 'Límite mensual',
    spentThisMonth: 'Consumido en el mes',
    updatedAt: 'Actualizado',
  };

  it('builds localized display rows from account data', () => {
    const rows = buildCardDetailRows(account, 'es', labels);

    expect(rows).toHaveLength(5);
    expect(rows[0]).toEqual({ label: 'Titular', value: 'Melany Suarez' });
    expect(rows[1].value).toContain('185.000');
    expect(rows[4].label).toBe('Actualizado');
  });
});
