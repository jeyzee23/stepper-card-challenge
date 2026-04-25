import React from 'react';
import { useTranslation } from 'react-i18next';

import { ActivityTimeline } from '@/components/ActivityTimeline';
import { InfoPanel } from '@/components/InfoPanel';
import { StatusCard } from '@/components/StatusCard';
import type {
  CardStatus,
  CardStatusChangeSource,
  CardStatusHistoryEntry,
} from '@/components/StatusCard';
import type { StepDefinition } from '@/context/StepperContext';

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
          <StatusCard onStatusChange={onStatusChange} status={status} />
          <ActivityTimeline history={statusHistory} />
        </>
      ) : null}
    </>
  );
}
