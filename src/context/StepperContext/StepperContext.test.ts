import { initialStepperState, stepperReducer } from './stepperReducer';

describe('stepperReducer', () => {
  it('moves forward and tracks the furthest visited step', () => {
    const nextState = stepperReducer(initialStepperState, { type: 'NEXT' });

    expect(nextState.currentStepIndex).toBe(1);
    expect(nextState.furthestStepIndex).toBe(1);
  });

  it('moves backward one step at a time', () => {
    const advanced = stepperReducer(initialStepperState, { type: 'NEXT' });
    const previous = stepperReducer(advanced, { type: 'PREVIOUS' });

    expect(previous).toEqual({
      currentStepIndex: 0,
      furthestStepIndex: 1,
    });
  });

  it('allows revisiting a previously visited step', () => {
    const advanced = stepperReducer(initialStepperState, { type: 'NEXT' });
    const revisited = stepperReducer(advanced, {
      payload: 0,
      type: 'GO_TO_STEP',
    });

    expect(revisited).toEqual({
      currentStepIndex: 0,
      furthestStepIndex: 1,
    });
  });

  it('keeps future steps locked when jump navigation targets an unseen step', () => {
    const blocked = stepperReducer(initialStepperState, {
      payload: 3,
      type: 'GO_TO_STEP',
    });

    expect(blocked).toEqual(initialStepperState);
  });

  it('supports reset after navigating the flow', () => {
    const advanced = stepperReducer(initialStepperState, { type: 'NEXT' });
    const reset = stepperReducer(advanced, { type: 'RESET' });

    expect(reset).toEqual(initialStepperState);
  });
});
