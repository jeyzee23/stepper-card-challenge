import type {
  CardStatusChangeSource,
  CardStatusHistoryEntry,
} from '../types';
import type { CardStatus } from './cardStatus';

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
