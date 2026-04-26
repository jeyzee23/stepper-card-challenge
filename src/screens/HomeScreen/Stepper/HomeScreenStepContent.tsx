import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoPanel } from '@/components/InfoPanel';
import type { StepDefinition } from '@/context/StepperContext';
import {
  ActivityTimeline,
  defaultCardAccountData,
  CardStatus,
  CardStatusChangeSource,
  CardStatusHistoryEntry,
  StatusCard,
} from '@/features/CardStatus';

interface HomeScreenStepContentProps {
  currentStep: StepDefinition;
  isLastStep: boolean;
  onStatusChange: (status: CardStatus, source?: CardStatusChangeSource) => void;
  status: CardStatus;
  statusHistory: CardStatusHistoryEntry[];
}

export function HomeScreenStepContent({
  currentStep,
  isLastStep,
  onStatusChange,
  status,
  statusHistory,
}: HomeScreenStepContentProps) {
  const { t } = useTranslation();
  const bullets = t(`steps.${currentStep.id}.bullets`, {
    returnObjects: true,
  }) as readonly string[];

  return (
    <>
      <InfoPanel
        bullets={bullets}
        description={t(`steps.${currentStep.id}.description`)}
        highlightLabel={t(`steps.${currentStep.id}.highlightLabel`)}
        highlightValue={t(`steps.${currentStep.id}.highlightValue`)}
        testID={`step-content-${currentStep.id}`}
        title={t(`steps.${currentStep.id}.title`)}
      />

      {isLastStep ? (
        <>
          <StatusCard
            account={defaultCardAccountData}
            onStatusChange={onStatusChange}
            status={status}
          />
          <ActivityTimeline history={statusHistory} />
        </>
      ) : null}
    </>
  );
}
