import { initialStepperState, stepperReducer } from './stepperReducer';

describe('stepperReducer', () => {
  it('moves forward and tracks the furthest visited step', () => {
    const nextState = stepperReducer(initialStepperState, { type: 'NEXT' });

    expect(nextState.currentStepIndex).toBe(1);
    expect(nextState.furthestStepIndex).toBe(1);
  });

  it('does not allow jumping to steps that were not visited yet', () => {
    const nextState = stepperReducer(initialStepperState, {
      type: 'GO_TO',
      index: 2,
    });

    expect(nextState).toEqual(initialStepperState);
  });

  it('supports reset after navigating the flow', () => {
    const advanced = stepperReducer(initialStepperState, { type: 'NEXT' });
    const reset = stepperReducer(advanced, { type: 'RESET' });

    expect(reset).toEqual(initialStepperState);
  });
});
