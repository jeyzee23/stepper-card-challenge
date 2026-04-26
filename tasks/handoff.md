## Estado

- **Último objetivo**: dejar el proyecto “arquitectónicamente consistente” y listo para review (ownership, i18n sin casts peligrosos, data mock validada, README actualizado).
- **Checks**: `format:check`, `lint`, `typecheck`, `test`, `test:coverage` OK.

## Cambios clave

- **Validación runtime del fixture**: `src/features/CardStatus/CardStatus.data.ts` valida `CardStatus.mock.json` antes de exportar `defaultCardAccountData`.
- **Ownership del dominio**: `useCardStatusHistory` vive en `src/features/CardStatus/hooks/` y se exporta desde `src/features/CardStatus/index.ts`; `HomeScreen` lo consume desde la feature.
- **i18n sin `as string[]`**: helper `translateArray()` en `src/i18n/translate.ts` y uso en componentes que consumen arrays desde traducciones.
- **Errores i18n observables**: `LanguageToggle` ya no silencia errores de `changeLanguage`.
- **README**: actualizado para reflejar validación runtime y helper i18n.

## Próximo paso

- No hay bloqueos. Si se quiere pulir aún más la señal de “production readiness”, se puede:
  - tipar `AccountCardData.features` como unión (feature keys) en vez de `string[]`,
  - agregar tests iOS directos para `HomeScreenHeader`/`HomeScreenFooter` (hoy se testea Android directo).
