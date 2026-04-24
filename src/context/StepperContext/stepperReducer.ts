import { stepDefinitions } from './stepDefinitions';

import type { StepperAction, StepperState } from './StepperContext.types';

export const initialStepperState: StepperState = {
  currentStepIndex: 0,
  furthestStepIndex: 0,
};

const lastStepIndex = stepDefinitions.length - 1;

export function stepperReducer(
  state: StepperState,
  action: StepperAction,
): StepperState {
  switch (action.type) {
    case 'NEXT': {
      const nextIndex = Math.min(state.currentStepIndex + 1, lastStepIndex);

      return {
        currentStepIndex: nextIndex,
        furthestStepIndex: Math.max(state.furthestStepIndex, nextIndex),
      };
    }
    case 'PREVIOUS':
      return {
        ...state,
        currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
      };
    case 'GO_TO':
      if (action.index < 0 || action.index > state.furthestStepIndex) {
        return state;
      }

      return {
        ...state,
        currentStepIndex: action.index,
      };
    case 'RESET':
      return initialStepperState;
    default:
      return state;
  }
}
