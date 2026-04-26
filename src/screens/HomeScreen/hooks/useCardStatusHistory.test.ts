import { act, renderHook } from '@testing-library/react-native';

import { useCardStatusHistory } from './useCardStatusHistory';

describe('useCardStatusHistory', () => {
  it('tracks manual changes, avoids duplicate history through model logic and resets', () => {
    const { result } = renderHook(() => useCardStatusHistory());

    expect(result.current.cardStatus).toBe('disabled');
    expect(result.current.statusHistory).toHaveLength(1);

    act(() => {
      result.current.changeCardStatus('enabled', 'manual');
    });

    expect(result.current.cardStatus).toBe('enabled');
    expect(result.current.statusHistory.at(-1)).toMatchObject({
      source: 'manual',
      status: 'enabled',
    });

    act(() => {
      result.current.changeCardStatus('enabled', 'manual');
    });

    expect(result.current.statusHistory).toHaveLength(2);

    act(() => {
      result.current.resetCardStatusHistory();
    });

    expect(result.current.cardStatus).toBe('disabled');
    expect(result.current.statusHistory).toHaveLength(1);
  });
});
