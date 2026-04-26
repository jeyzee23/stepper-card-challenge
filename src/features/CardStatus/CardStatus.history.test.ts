import {
  appendStatusHistoryEntry,
  createStatusHistoryEntry,
} from './CardStatus.model';

describe('status history helpers', () => {
  it('creates a history entry with the expected shape', () => {
    const entry = createStatusHistoryEntry(
      'disabled',
      'system',
      '2026-04-23T20:30:00.000Z',
    );

    expect(entry).toEqual({
      createdAt: '2026-04-23T20:30:00.000Z',
      source: 'system',
      status: 'disabled',
    });
  });

  it('appends only when the status actually changes', () => {
    const history = [
      createStatusHistoryEntry(
        'disabled',
        'system',
        '2026-04-23T20:30:00.000Z',
      ),
    ];

    const sameStatus = appendStatusHistoryEntry(
      history,
      'disabled',
      'manual',
      '2026-04-23T20:31:00.000Z',
    );
    const changedStatus = appendStatusHistoryEntry(
      history,
      'enabled',
      'quick_action',
      '2026-04-23T20:32:00.000Z',
    );

    expect(sameStatus).toHaveLength(1);
    expect(changedStatus).toHaveLength(2);
    expect(changedStatus[1]).toEqual({
      createdAt: '2026-04-23T20:32:00.000Z',
      source: 'quick_action',
      status: 'enabled',
    });
  });
});
