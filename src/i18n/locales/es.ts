import type { TranslationSchema } from './en';

export const es: TranslationSchema = {
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
    primaryActionHint: 'La acción principal lleva la card a {{nextStatus}}.',
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
        description: 'La card está activa y lista para operar sin restricciones.',
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
};
