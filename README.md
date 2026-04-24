# Stepper Card Challenge

Resolución del challenge técnico para una posición de Mobile Engineer con React Native CLI.

La app modela un flujo multi-step informativo y finaliza en una card interactiva que refleja los cuatro estados solicitados:

- `disabled`
- `enabled`
- `paused`
- `resumed`

## Stack

- React Native CLI
- TypeScript
- Context + reducer para el stepper
- `react-i18next` + `react-native-localize`
- `StyleSheet.create`
- Mock JSON tipado para la data de la card
- Jest para validar la lógica principal

## Cómo correr el proyecto

### 1. Instalar dependencias JS

Si `yarn` no está disponible en tu entorno, activalo una vez con:

```sh
corepack enable
```

```sh
yarn install
```

### 2. iOS solamente

```sh
bundle install
cd ios
bundle exec pod install
cd ..
```

### 3. Levantar Metro

```sh
yarn start
```

### 4. Ejecutar la app

```sh
yarn android
```

```sh
yarn ios
```

## Scripts útiles

```sh
yarn lint
yarn typecheck
yarn test
yarn format:check
```

## Decisiones técnicas

### 1. Context + reducer para el stepper

El challenge pedía explícitamente Context para manejar el render del stepper. Para eso armé un `StepperProvider` con reducer, de forma que:

- la navegación entre pasos quede centralizada
- cada step sea un componente principalmente presentacional
- el render del stepper no dependa de prop drilling
- la lógica sea fácil de testear en aislamiento

### 2. No usé React Navigation a propósito

El flujo es lineal, corto y completamente local. Agregar una librería de navegación para este caso aumentaba complejidad sin aportar valor real. Preferí mostrar criterio de simplificación: cuando el estado de navegación es parte del feature, conviene modelarlo como dominio local.

### 3. Card final pensada para revisión rápida

La card tiene una acción contextual principal, pero además expone chips para forzar cada estado. Eso fue deliberado para que quien revise pueda validar visualmente los cuatro casos sin tener que reconstruir un flujo artificial o depender de edge cases ocultos.

### 4. i18n real, no solo strings sueltos

Se usa `react-i18next` con detección inicial de idioma vía `react-native-localize`, y además un toggle runtime `ES / EN` para demostrar que la interfaz ya está preparada para internacionalización real.

### 5. Mock JSON tipado

La data visible de la card vive en `src/components/StatusCard/StatusCard.mock.json` y se consume con tipado explícito. Esto deja lista la capa para reemplazar el origen por una API o almacenamiento local sin tocar la UI.

### 6. Feature extra: activity timeline

Además del requerimiento base, la resolución incluye una línea de tiempo operativa en el último paso. Cada cambio de estado de la card queda registrado con timestamp y origen de la acción. Esto suma valor de producto y también mejora la auditabilidad del challenge durante la review.

## QA / QC realizado

- `yarn typecheck`
- `yarn lint`
- `yarn test`
- bundle Android con `react-native bundle --platform android`
- bundle iOS con `react-native bundle --platform ios`

## Mejoras aplicadas después de la primera versión

- mejor accesibilidad en botones, stepper y selector de estados
- mejor robustez visual para textos largos y pantallas más estrechas
- sombras con fallback más confiable entre plataformas
- timeline de actividad para auditar transiciones de estado
- padding extra al scroll para que el footer fijo no tape contenido al final

## Cómo se mapean los requerimientos

| Requerimiento | Resolución |
| --- | --- |
| Flujo stepper informativo (>2) | Flujo de 4 pasos con render controlado por contexto |
| Card en el step final | `StatusCard` renderizada en el último paso |
| Estilos del stepper y estados visuales de card | Stepper y card con tratamientos visuales diferenciados |
| Context para manejar el render del stepper | `src/context/StepperContext/` |
| Mock JSON para la card | `src/components/StatusCard/StatusCard.mock.json` |
| Internacionalización | `src/i18n` con `react-i18next` y locales tipados |
| Stylesheet | Toda la UI usa `StyleSheet.create` |
| Lógica de navegación y cambio de estados | Reducer para stepper + transición explícita de estados en la card |
| README con setup y decisiones | Este archivo |

## Estructura

```txt
src
├── app
├── components
├── context
├── design-system
├── i18n
├── screens
└── utils
```

## Tests incluidos

- transición del estado de la card
- historial de cambios de estado
- reducer del stepper
- smoke test de render de la app

## Posibles mejoras si hubiera más tiempo

- persistir progreso y estado de la card
- animaciones entre pasos
- tests E2E con Detox
- soporte para dark mode y theming más profundo

## Nota de diseño

Quise que el entregable no se sintiera como “el template de RN con un stepper encima”, sino como una mini feature real: copy de producto, jerarquía visual, estados fáciles de inspeccionar y decisiones de arquitectura pequeñas pero intencionales.
