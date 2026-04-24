export const en = {
  app: {
    badge: 'React Native CLI',
    title: 'Card Controls',
    subtitle:
      'A focused multi-step flow with localized copy, explicit card states and a native iOS-first presentation.',
    progressChip: 'Step {{current}} of {{total}}',
  },
  common: {
    cancel: 'Cancel',
  },
  actions: {
    back: 'Back',
    next: 'Continue',
    openCard: 'Open final card',
    restart: 'Restart flow',
  },
  stepper: {
    title: 'Activation flow',
    stepA11yLabel: 'Go to step {{index}}: {{name}}',
  },
  qualitySignals: {
    title: 'Engineering signals',
    items: [
      'The stepper uses Context + reducer so rendering logic is centralized.',
      'Translations can switch at runtime without changing the component tree.',
      'The final card exposes deterministic state controls so the reviewer can inspect every required case.',
    ],
  },
  steps: {
    identity: {
      label: 'Profile',
      title: 'Validate the card holder',
      description:
        'The first step frames who the experience is for and which user profile will receive the card.',
      bullets: [
        'The flow stays informative instead of form-heavy to keep the challenge concise.',
        'Stepper state is externalized so each step remains a pure rendering concern.',
        'Copy is intentionally product-oriented to feel closer to a real activation journey.',
      ],
      highlightLabel: 'Outcome',
      highlightValue: 'The card owner is ready for digital activation.',
    },
    security: {
      label: 'Security',
      title: 'Explain the protection layer',
      description:
        'This step communicates how the product keeps transactions under control before the card becomes active.',
      bullets: [
        'Clear messaging turns a simple stepper into a more credible product flow.',
        'Visual hierarchy separates supporting copy from the one key takeaway.',
        'The same structure can scale to remote config or API-driven steps.',
      ],
      highlightLabel: 'Focus',
      highlightValue: 'Daily alerts and temporary pauses are enabled.',
    },
    controls: {
      label: 'Controls',
      title: 'Preview operational controls',
      description:
        'Before reaching the final card, the user sees which spending rules and limits will be available.',
      bullets: [
        'This step helps justify the final card state machine from a product perspective.',
        'Amounts and metadata are prepared to be localized through Intl.',
        'A simple design system keeps spacing, colors and radius consistent.',
      ],
      highlightLabel: 'Coverage',
      highlightValue: 'Limit, pause and resume capabilities are available.',
    },
    status: {
      label: 'Status card',
      title: 'Inspect the final card states',
      description:
        'The final step consumes mock JSON data and lets the reviewer move through all required states.',
      bullets: [
        'Disabled, enabled, paused and resumed each have their own visual treatment.',
        'The direct state chips are deliberate: they make review faster and deterministic.',
        'A contextual primary action still demonstrates how the card could evolve in a real flow.',
      ],
      highlightLabel: 'States',
      highlightValue: 'disabled, enabled, paused and resumed',
    },
  },
  statusCard: {
    title: 'Growth Card',
    subtitle: 'Control status, limits and card availability from one place',
    accountId: 'Account',
    holder: 'Holder',
    monthlyLimit: 'Monthly limit',
    availableLimit: 'Available',
    spentThisMonth: 'Spent this month',
    updatedAt: 'Updated',
    featuresTitle: 'Capabilities',
    previewTitle: 'Quick state preview',
    manageStatus: 'Change status',
    manageStatusTitle: 'Choose a card state',
    primaryActionTitle: 'Contextual next action',
    primaryActionHint: 'Primary action moves the card to {{nextStatus}}.',
    features: {
      international_purchases: 'International purchases',
      merchant_controls: 'Merchant controls',
      instant_alerts: 'Instant alerts',
    },
    statusOptionA11yLabel: 'Preview {{status}} state',
    statuses: {
      disabled: {
        label: 'Disabled',
        action: 'Enable card',
        description:
          'The card exists, but transactions remain blocked until activation finishes.',
      },
      enabled: {
        label: 'Enabled',
        action: 'Pause card',
        description:
          'The card is fully active and ready to operate without restrictions.',
      },
      paused: {
        label: 'Paused',
        action: 'Resume card',
        description:
          'Spending is temporarily stopped while card data remains visible.',
      },
      resumed: {
        label: 'Resumed',
        action: 'Disable card',
        description:
          'The card was reactivated after a pause and now communicates that recovery state.',
      },
    },
  },
  timeline: {
    title: 'Operational activity',
    subtitle:
      'A compact timeline that records how the card state changed during the review.',
    sources: {
      system: 'Initial system state',
      manual: 'Changed from direct state preview',
      quick_action: 'Changed from the contextual primary action',
    },
  },
} as const;

type WidenTranslationValue<T> = T extends string
  ? string
  : T extends readonly string[]
    ? readonly string[]
    : { [Key in keyof T]: WidenTranslationValue<T[Key]> };

export type TranslationSchema = WidenTranslationValue<typeof en>;
