import { getNextCardStatus } from '@/state/cardStatus';

describe('card status transitions', () => {
  it('cycles through the four challenge states', () => {
    expect(getNextCardStatus('disabled')).toBe('enabled');
    expect(getNextCardStatus('enabled')).toBe('paused');
    expect(getNextCardStatus('paused')).toBe('resumed');
    expect(getNextCardStatus('resumed')).toBe('disabled');
  });
});
