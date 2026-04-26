import type { StepDefinition } from './stepDefinitions';

export interface StepperState {
  currentStepIndex: number;
  furthestStepIndex: number;
}

export type StepperAction =
  | { type: 'NEXT' }
  | { type: 'PREVIOUS' }
  | { payload: number; type: 'GO_TO_STEP' }
  | { type: 'RESET' };

export interface StepperContextValue {
  currentStep: StepDefinition;
  currentStepIndex: number;
  furthestStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  steps: readonly StepDefinition[];
  goNext: () => void;
  goPrevious: () => void;
  goToStep: (index: number) => void;
  reset: () => void;
}
