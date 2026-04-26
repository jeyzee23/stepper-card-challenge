# Galicia Card Stepper

Aplicación mobile desarrollada como challenge técnico con React Native CLI.

La app permite recorrer un flujo informativo de 4 pasos y finaliza en una card operativa con estados explícitos: `disabled`, `enabled`, `paused` y `resumed` (despausada). El objetivo fue construir una app chica, pero pensada como una feature real: simple de levantar, clara de revisar y con decisiones técnicas defendibles.

## Demo

[Demo del flujo Galicia Card Stepper](https://www.youtube.com/shorts/G8FoNwXymy8)

<p>
  <img src="assets/readme/step-01-profile.jpg" alt="Step 1 - Perfil" width="220" />
  <img src="assets/readme/step-02-security.jpg" alt="Step 2 - Seguridad" width="220" />
  <img src="assets/readme/step-03-controls.jpg" alt="Step 3 - Controles" width="220" />
  <img src="assets/readme/step-04-status.jpg" alt="Step 4 - Estados" width="220" />
</p>

## Requirement Coverage

| Requirement                                            | Implemented                                     |
| ------------------------------------------------------ | ----------------------------------------------- |
| Flujo tipo stepper informativo multi-step > 2          | Sí, flujo de 4 pasos                            |
| Card en el step final                                  | Sí, `StatusCard` en el último paso              |
| Estados inhabilitado, habilitado, pausado y despausado | Sí, `disabled`, `enabled`, `paused`, `resumed`  |
| Context para manejar el render del stepper             | Sí, `StepperProvider` + reducer                 |
| Mock JSON para datos visualizados en la card           | Sí, `StatusCard.mock.json`                      |
| Internacionalización                                   | Sí, `react-i18next` con ES/EN                   |
| StyleSheet                                             | Sí, estilos con `StyleSheet.create`             |
| Lógica de navegación y cambio de estados               | Sí, reducer del stepper + state machine de card |
| README con setup y decisiones técnicas                 | Sí, este documento                              |

## Tech Stack

| Area                 | Tooling                                           |
| -------------------- | ------------------------------------------------- |
| Mobile runtime       | React Native CLI `0.85.2`                         |
| UI runtime           | React `19.2.3`                                    |
| Language             | TypeScript `5.8.x`                                |
| State                | Context API + reducer                             |
| Internationalization | `i18next 26.x` + `react-i18next 17.x`             |
| Styling              | React Native `StyleSheet.create`                  |
| Testing              | Jest `29.x` + React Native Testing Library `13.x` |
| Quality              | ESLint `8.x` + Prettier `2.8.x`                   |
| CI                   | GitHub Actions                                    |
| Package manager      | Yarn `1.x`                                        |

## Getting Started

### Requirements

- Node.js 22.x
- Yarn 1.x
- Xcode para iOS
- Android Studio para Android
- CocoaPods para instalar pods iOS

### About Yarn and Corepack

El proyecto usa Yarn. Si ya tenés Yarn instalado, podés ir directo a `yarn install`.

`corepack` no reemplaza a Yarn. Es una herramienta incluida en versiones modernas de Node.js que permite habilitar package managers como Yarn sin instalarlos globalmente a mano.

### Install dependencies

```bash
yarn install
```

Si tu terminal no reconoce `yarn`, ejecutá una vez:

```bash
corepack enable
```

### iOS

```bash
bundle install
cd ios
bundle exec pod install
cd ..
yarn ios
```

> iOS signing: el Development Team se configura localmente desde Xcode. No queda versionado para evitar acoplar el repo a una cuenta personal.

### Android

```bash
yarn android
```

### Metro

```bash
yarn start
```

## Project Structure

```txt
src/
├─ app/
│  └─ AppRoot/
│     └─ AppRoot.tsx
├─ components/
│  ├─ ActivityTimeline/
│  ├─ LanguageToggle/
│  ├─ ProgressStepper/
│  └─ StatusCard/
│     ├─ StatusCard.tsx
│     ├─ StatusCard.model.ts
│     ├─ StatusCard.styles.ts
│     ├─ StatusCard.types.ts
│     ├─ StatusCard.mock.json
│     ├─ StatusCardStateControls.ios.tsx
│     └─ StatusCardStateControls.android.tsx
├─ context/
│  └─ StepperContext/
│     ├─ StepperContext.tsx
│     ├─ stepperReducer.ts
│     └─ stepDefinitions.ts
├─ design-system/
│  ├─ colors.ts
│  ├─ fonts.ts
│  ├─ radius.ts
│  ├─ shadows.ts
│  └─ spacing.ts
├─ i18n/
│  ├─ locales/
│  ├─ i18nInstance.ts
│  └─ translate.ts
├─ screens/
│  └─ HomeScreen/
└─ utils/
```

La estructura busca que una app chica se lea como una feature real: componentes con styles/tests co-localizados, tipos cerca del módulo que los usa, design tokens separados y lógica de dominio cerca del feature owner.

## Engineering Notes

- Los imports usan alias `@/` para evitar rutas relativas largas.
- Los componentes grandes están modelados como carpetas módulo, no como archivos monolíticos.
- Los estilos viven en `*.styles.ts` para mantener componentes enfocados en composición y comportamiento.
- Los tests están co-localizados con los módulos que protegen, lo que reduce fricción de mantenimiento.
- La lógica de negocio de la card vive en `StatusCard.model.ts`, separada del render.
- iOS y Android tienen archivos específicos cuando la plataforma cambia interacción o look & feel.

## Architecture Decisions

### Context API

El stepper usa Context + reducer porque el estado compartido es chico, lineal y propio del flujo. Redux u otra librería global agregaría complejidad innecesaria para este scope.

El reducer mantiene explícitas las transiciones `NEXT`, `PREVIOUS` y `RESET`. Esto hace que el flujo sea predecible, testeable y fácil de extender si en el futuro hubiera pasos condicionales.

### Navegación secuencial

No se usa React Navigation porque no hay múltiples pantallas reales ni deep stack. El flujo avanza solamente con `Continue` y `Back`; los indicadores del stepper son informativos y no navegan por tap para evitar saltos inválidos como `Paso 1 -> Paso 4`.

### Mock JSON

La card consume datos desde `src/components/StatusCard/StatusCard.mock.json`. Esto simula una fuente real sin introducir red, loading states artificiales o comportamiento no determinístico para el reviewer.

### i18n

La app inicia por defecto en español y permite cambiar a inglés con el toggle `ES / EN`. Los textos viven fuera de los componentes para separar UI copy de lógica y mantener paridad entre locales.

También existe un helper `translate()` para código no-hook. La instancia de i18n está separada para evitar require cycles entre el barrel de `i18n` y los helpers.

### StyleSheet

Los estilos usan `StyleSheet.create`, cumpliendo el requerimiento técnico y manteniendo un approach nativo, explícito y fácil de auditar.

### Platform-native UI

La identidad visual se inspira en Galicia, pero los controles se adaptan por plataforma con archivos `.ios.tsx` y `.android.tsx` cuando aporta valor. iOS usa interacciones más cercanas a ActionSheet; Android usa patrones más Material, ripple y superficies con radios/elevación más sobrios.

### Card State Logic

La card modela cada estado de forma explícita. Cada estado tiene label, ícono, color semántico, descripción y acción contextual para evitar que el naranja de marca sea la única señal visual.

El estado no depende solo del color: se refuerza con copy, ícono, borde lateral, badge semántico y timeline. Esto mejora accesibilidad visual y reduce ambigüedad en una UI con naranja dominante.

## State Flow

```txt
Stepper:
Perfil -> Seguridad -> Controles -> Estados

Card:
disabled -> enabled -> paused -> resumed -> disabled
```

La timeline registra los cambios de estado para que la review pueda inspeccionar rápidamente que la lógica funciona y que los estados no son solo variantes visuales sueltas.

## Scripts

```bash
yarn check:package-manager
yarn format:check
yarn lint
yarn typecheck
yarn test
yarn test:coverage
yarn bundle:ios
yarn bundle:android
yarn android:assembleDebug
```

## Testing

La suite cubre comportamiento real con React Native Testing Library y unit tests donde corresponde:

- render inicial del flujo
- navegación secuencial del stepper
- bloqueo de saltos por stepper indicator
- reducer del stepper
- transiciones de estado de la card
- historial de cambios
- selectores de estado iOS y Android
- paridad de traducciones ES/EN
- formatters de moneda y fecha

Coverage actual:

```txt
Statements: 97%+
Branches:   84%+
Functions:  96%+
Lines:      97%+
```

## CI / Quality Gates

GitHub Actions corre en pull requests y pushes a `main`.

| Check                        | What it protects                               |
| ---------------------------- | ---------------------------------------------- |
| `yarn check:package-manager` | Evita mezclar package managers                 |
| `yarn format:check`          | Mantiene formato consistente                   |
| `yarn lint`                  | Detecta imports, reglas Jest y código no usado |
| `yarn typecheck`             | Valida TypeScript sin emitir build             |
| `yarn test:coverage`         | Protege comportamiento y umbrales mínimos      |
| `yarn bundle:ios`            | Valida que Metro pueda empaquetar iOS          |
| `yarn bundle:android`        | Valida que Metro pueda empaquetar Android      |
| `yarn android:assembleDebug` | Verifica build Android real en `main`          |

No se agrega build nativo iOS en CI porque requeriría runner macOS. Para el alcance del challenge, bundle iOS en CI + smoke local en simulador/dispositivo cubre la señal necesaria sin sobredimensionar costos y tiempos.

## Tradeoffs

- Context API fue elegido sobre Redux porque el dominio es chico y local.
- Mock JSON fue elegido sobre API remota porque el challenge evalúa UI state, arquitectura y criterio, no networking.
- `ScrollView` fue elegido sobre `FlatList` o `FlashList` porque la pantalla es corta, heterogénea y no necesita virtualización.
- No se agregó E2E con Detox/Maestro para no sobredimensionar el challenge, pero la arquitectura y CI dejan ese camino abierto.
- La UI usa una interpretación Galicia-inspired, no una copia literal de Banco Galicia.
- El video y los screenshots se incluyen como assets de README para que el reviewer pueda validar el resultado sin levantar la app primero.

## QA / QC

Validaciones usadas durante el desarrollo:

```bash
yarn check:package-manager
yarn format:check
yarn lint
yarn typecheck
yarn test:coverage
yarn bundle:ios
yarn bundle:android
yarn android:assembleDebug
```

Smoke manual:

- iOS simulator/device: flujo completo, safe areas, cambio ES/EN y estados de card.
- Android emulator/device: flujo completo, Material controls, ripple, footer y estados de card.

## Future Improvements

- Persistir progreso y último estado de la card.
- Agregar deep link de producto para abrir directo el último paso.
- Sumar E2E con Maestro o Detox si el flujo creciera.
- Conectar el mock JSON a una API o remote config.

## Author

Juan Carlos Videla

- GitHub: [jeyzee23](https://github.com/jeyzee23)
