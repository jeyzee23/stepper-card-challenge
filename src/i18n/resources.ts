export const resources = {
  en: {
    translation: {
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
        primaryActionHint:
          'Primary action moves the card to {{nextStatus}}.',
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
    },
  },
  es: {
    translation: {
      app: {
        badge: 'React Native CLI',
        title: 'Card Controls',
        subtitle:
          'Un flujo breve de varios pasos con copy localizado, estados explícitos y una presentación pensada primero para iPhone.',
        progressChip: 'Paso {{current}} de {{total}}',
      },
      common: {
        cancel: 'Cancelar',
      },
      actions: {
        back: 'Volver',
        next: 'Continuar',
        openCard: 'Ver card final',
        restart: 'Reiniciar flujo',
      },
      stepper: {
        title: 'Flujo de activación',
        stepA11yLabel: 'Ir al paso {{index}}: {{name}}',
      },
      qualitySignals: {
        title: 'Señales de ingeniería',
        items: [
          'El stepper usa Context + reducer para centralizar el render y evitar prop drilling.',
          'Las traducciones cambian en runtime sin tocar la estructura principal de componentes.',
          'La card final expone controles determinísticos para que quien revisa pueda inspeccionar todos los estados requeridos.',
        ],
      },
      steps: {
        identity: {
          label: 'Perfil',
          title: 'Validar a la persona titular',
          description:
            'El primer paso enmarca para quién es la experiencia y qué perfil de usuario recibirá la tarjeta.',
          bullets: [
            'El flujo es informativo y no depende de formularios para mantener el challenge enfocado.',
            'El estado del stepper vive afuera de cada paso, así cada pantalla queda orientada al render.',
            'El copy busca sentirse como una activación real y no como una demo genérica.',
          ],
          highlightLabel: 'Resultado',
          highlightValue: 'La titular ya está lista para activación digital.',
        },
        security: {
          label: 'Seguridad',
          title: 'Explicar la capa de protección',
          description:
            'Este paso comunica cómo el producto mantiene los consumos bajo control antes de habilitar la card.',
          bullets: [
            'Un mensaje claro vuelve más creíble el flujo y mejora la percepción del producto.',
            'La jerarquía visual separa el contexto de la conclusión importante.',
            'La misma estructura puede escalar después a pasos remotos o configurables.',
          ],
          highlightLabel: 'Foco',
          highlightValue: 'Alertas diarias y pausas temporales activadas.',
        },
        controls: {
          label: 'Controles',
          title: 'Previsualizar reglas operativas',
          description:
            'Antes de llegar a la card final, el usuario entiende qué límites y controles va a poder usar.',
          bullets: [
            'Este paso ayuda a justificar la máquina de estados de la card desde la lógica de producto.',
            'Los importes y metadatos están preparados para ser localizados con Intl.',
            'Un design system simple mantiene consistencia en spacing, colores y radios.',
          ],
          highlightLabel: 'Cobertura',
          highlightValue: 'Hay controles de límite, pausa y reanudación.',
        },
        status: {
          label: 'Estados',
          title: 'Inspeccionar la card final',
          description:
            'El último paso consume datos desde un mock JSON y permite recorrer todos los estados pedidos.',
          bullets: [
            'Inhabilitada, habilitada, pausada y despausada tienen tratamientos visuales propios.',
            'Los chips de estado están expuestos a propósito para acelerar la revisión técnica.',
            'La acción principal contextual también muestra cómo evolucionaría la card en un flujo real.',
          ],
          highlightLabel: 'Estados',
          highlightValue: 'disabled, enabled, paused y resumed',
        },
      },
      statusCard: {
        title: 'Growth Card',
        subtitle: 'Gestioná estado, límites y disponibilidad desde un solo lugar',
        accountId: 'Cuenta',
        holder: 'Titular',
        monthlyLimit: 'Límite mensual',
        availableLimit: 'Disponible',
        spentThisMonth: 'Consumido en el mes',
        updatedAt: 'Actualizado',
        featuresTitle: 'Capacidades',
        previewTitle: 'Vista rápida de estados',
        manageStatus: 'Cambiar estado',
        manageStatusTitle: 'Elegí un estado para la card',
        primaryActionTitle: 'Siguiente acción contextual',
        primaryActionHint:
          'La acción principal lleva la card a {{nextStatus}}.',
        features: {
          international_purchases: 'Compras internacionales',
          merchant_controls: 'Controles por comercio',
          instant_alerts: 'Alertas instantáneas',
        },
        statusOptionA11yLabel: 'Previsualizar estado {{status}}',
        statuses: {
          disabled: {
            label: 'Inhabilitada',
            action: 'Habilitar card',
            description:
              'La card existe, pero los consumos siguen bloqueados hasta completar la activación.',
          },
          enabled: {
            label: 'Habilitada',
            action: 'Pausar card',
            description:
              'La card está activa y lista para operar sin restricciones.',
          },
          paused: {
            label: 'Pausada',
            action: 'Despausar card',
            description:
              'Los consumos se frenan de forma temporal mientras la información sigue visible.',
          },
          resumed: {
            label: 'Despausada',
            action: 'Inhabilitar card',
            description:
              'La card volvió a estar operativa después de una pausa y comunica ese estado de recuperación.',
          },
        },
      },
      timeline: {
        title: 'Actividad operativa',
        subtitle:
          'Una línea de tiempo compacta que registra cómo fue cambiando el estado de la card durante la revisión.',
        sources: {
          system: 'Estado inicial del sistema',
          manual: 'Cambio realizado desde la vista rápida de estados',
          quick_action: 'Cambio realizado desde la acción principal contextual',
        },
      },
    },
  },
} as const;
