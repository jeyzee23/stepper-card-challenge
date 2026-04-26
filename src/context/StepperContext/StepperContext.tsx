import React, { createContext, useContext, useMemo, useReducer } from 'react';

import { stepDefinitions } from './stepDefinitions';
import { initialStepperState, stepperReducer } from './stepperReducer';

import type { StepperContextValue } from './StepperContext.types';

const StepperContext = createContext<StepperContextValue | null>(null);

export function StepperProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(stepperReducer, initialStepperState);

  const currentStep = stepDefinitions[state.currentStepIndex];
  const isFirstStep = state.currentStepIndex === 0;
  const isLastStep = state.currentStepIndex === stepDefinitions.length - 1;
  const value = useMemo(
    () => ({
      currentStep,
      currentStepIndex: state.currentStepIndex,
      furthestStepIndex: state.furthestStepIndex,
      isFirstStep,
      isLastStep,
      steps: stepDefinitions,
      goNext: () => dispatch({ type: 'NEXT' }),
      goPrevious: () => dispatch({ type: 'PREVIOUS' }),
      goToStep: (index: number) =>
        dispatch({ payload: index, type: 'GO_TO_STEP' }),
      reset: () => dispatch({ type: 'RESET' }),
    }),
    [
      currentStep,
      isFirstStep,
      isLastStep,
      state.currentStepIndex,
      state.furthestStepIndex,
    ],
  );

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider');
  }

  return context;
}
