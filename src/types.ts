import type { CardStatus } from '@/state/cardStatus';

export interface AccountCardData {
  accountId: string;
  holderName: string;
  planName: string;
  maskedNumber: string;
  currency: string;
  availableLimit: number;
  monthlyLimit: number;
  spentThisMonth: number;
  updatedAt: string;
  features: string[];
}

export type AppLanguage = 'es' | 'en';

export type CardStatusChangeSource = 'system' | 'manual' | 'quick_action';

export interface CardStatusHistoryEntry {
  createdAt: string;
  source: CardStatusChangeSource;
  status: CardStatus;
}
