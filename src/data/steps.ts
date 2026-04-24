export const stepDefinitions = [
  { id: 'identity' },
  { id: 'security' },
  { id: 'controls' },
  { id: 'status' },
] as const;

export type StepDefinition = (typeof stepDefinitions)[number];
export type StepId = StepDefinition['id'];
