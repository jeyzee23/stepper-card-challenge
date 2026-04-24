import type { ColorValue } from 'react-native';

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

export const cardStatuses = [
  'disabled',
  'enabled',
  'paused',
  'resumed',
] as const;

export type CardStatus = (typeof cardStatuses)[number];
export type CardStatusChangeSource = 'system' | 'manual' | 'quick_action';

export interface CardStatusHistoryEntry {
  createdAt: string;
  source: CardStatusChangeSource;
  status: CardStatus;
}

export interface StatusTheme {
  accent: ColorValue;
  background: ColorValue;
  badgeBackground: ColorValue;
}

export interface StatusCardProps {
  onStatusChange: (
    status: CardStatus,
    source?: CardStatusChangeSource,
  ) => void;
  status: CardStatus;
}

export interface StatusCardStateControlsProps {
  accentColor: ColorValue;
  onStatusChange: (
    status: CardStatus,
    source?: CardStatusChangeSource,
  ) => void;
  status: CardStatus;
}
