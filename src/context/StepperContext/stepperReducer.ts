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
    case 'GO_TO_STEP': {
      const targetIndex = Math.min(Math.max(action.payload, 0), lastStepIndex);

      if (targetIndex > state.furthestStepIndex) {
        return state;
      }

      return {
        ...state,
        currentStepIndex: targetIndex,
      };
    }
    case 'RESET':
      return initialStepperState;
    default:
      return state;
  }
}
