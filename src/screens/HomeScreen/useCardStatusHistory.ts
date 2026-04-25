import { useState } from 'react';

import {
  appendStatusHistoryEntry,
  createStatusHistoryEntry,
  type CardStatus,
  type CardStatusChangeSource,
} from '@/components/StatusCard';

function createInitialHistory() {
  return [createStatusHistoryEntry('disabled', 'system')];
}

export function useCardStatusHistory() {
  const [cardStatus, setCardStatus] = useState<CardStatus>('disabled');
  const [statusHistory, setStatusHistory] = useState(createInitialHistory);

  const resetCardStatusHistory = () => {
    setCardStatus('disabled');
    setStatusHistory(createInitialHistory());
  };

  const changeCardStatus = (
    nextStatus: CardStatus,
    source: CardStatusChangeSource = 'manual',
  ) => {
    setCardStatus(nextStatus);
    setStatusHistory(previousHistory =>
      appendStatusHistoryEntry(previousHistory, nextStatus, source),
    );
  };

  return {
    cardStatus,
    changeCardStatus,
    resetCardStatusHistory,
    statusHistory,
  };
}
