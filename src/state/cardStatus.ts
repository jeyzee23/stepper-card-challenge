export const cardStatuses = [
  'disabled',
  'enabled',
  'paused',
  'resumed',
] as const;

export type CardStatus = (typeof cardStatuses)[number];

const primaryTransitions: Record<CardStatus, CardStatus> = {
  disabled: 'enabled',
  enabled: 'paused',
  paused: 'resumed',
  resumed: 'disabled',
};

export function getNextCardStatus(status: CardStatus): CardStatus {
  return primaryTransitions[status];
}
