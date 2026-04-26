import { formatCurrency, formatDateTime } from '@/utils/formatters';

import type {
  AccountCardData,
  CardDetailLabels,
  CardDetailRow,
  CardStatus,
  CardStatusChangeSource,
  CardStatusHistoryEntry,
} from './CardStatus.types';

const primaryTransitions: Record<CardStatus, CardStatus> = {
  disabled: 'enabled',
  enabled: 'paused',
  paused: 'resumed',
  resumed: 'disabled',
};

export function getNextCardStatus(status: CardStatus): CardStatus {
  return primaryTransitions[status];
}

export function createStatusHistoryEntry(
  status: CardStatus,
  source: CardStatusChangeSource,
  createdAt = new Date().toISOString(),
): CardStatusHistoryEntry {
  return {
    createdAt,
    source,
    status,
  };
}

export function appendStatusHistoryEntry(
  history: CardStatusHistoryEntry[],
  nextStatus: CardStatus,
  source: CardStatusChangeSource,
  createdAt = new Date().toISOString(),
) {
  const latestEntry = history[history.length - 1];

  if (latestEntry?.status === nextStatus) {
    return history;
  }

  return [...history, createStatusHistoryEntry(nextStatus, source, createdAt)];
}

export function buildCardDetailRows(
  account: AccountCardData,
  language: string,
  labels: CardDetailLabels,
): CardDetailRow[] {
  return [
    {
      label: labels.holder,
      value: account.holderName,
    },
    {
      label: labels.availableLimit,
      value: formatCurrency(account.availableLimit, account.currency, language),
    },
    {
      label: labels.monthlyLimit,
      value: formatCurrency(account.monthlyLimit, account.currency, language),
    },
    {
      label: labels.spentThisMonth,
      value: formatCurrency(account.spentThisMonth, account.currency, language),
    },
    {
      label: labels.updatedAt,
      value: formatDateTime(account.updatedAt, language),
    },
  ];
}
