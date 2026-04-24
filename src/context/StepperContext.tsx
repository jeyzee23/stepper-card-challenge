import React, { createContext, useContext, useReducer } from 'react';

import { stepDefinitions, type StepDefinition } from '@/data/steps';

import {
  initialStepperState,
  stepperReducer,
} from './stepperReducer';

interface StepperContextValue {
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

const StepperContext = createContext<StepperContextValue | null>(null);

export function StepperProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(stepperReducer, initialStepperState);

  const currentStep = stepDefinitions[state.currentStepIndex];
  const isFirstStep = state.currentStepIndex === 0;
  const isLastStep = state.currentStepIndex === stepDefinitions.length - 1;

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        currentStepIndex: state.currentStepIndex,
        furthestStepIndex: state.furthestStepIndex,
        isFirstStep,
        isLastStep,
        steps: stepDefinitions,
        goNext: () => dispatch({ type: 'NEXT' }),
        goPrevious: () => dispatch({ type: 'PREVIOUS' }),
        goToStep: index => dispatch({ type: 'GO_TO', index }),
        reset: () => dispatch({ type: 'RESET' }),
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider');
  }

  return context;
}
