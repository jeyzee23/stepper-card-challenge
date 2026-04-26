export type {
  AccountCardData,
  CardDetailRow,
  CardStatus,
  CardStatusChangeSource,
  StatusTheme,
} from '../CardStatus.types';

import type {
  AccountCardData,
  CardStatus,
  CardStatusChangeSource,
} from '../CardStatus.types';

export interface StatusCardProps {
  account: AccountCardData;
  onStatusChange: (status: CardStatus, source?: CardStatusChangeSource) => void;
  status: CardStatus;
}

export interface StatusCardStateControlsProps {
  onStatusChange: (status: CardStatus, source?: CardStatusChangeSource) => void;
  status: CardStatus;
}
