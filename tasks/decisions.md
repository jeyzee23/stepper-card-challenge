## Decisiones

- **Validación runtime sin dependencias**: se prefirió un `assert*` manual para el fixture del challenge, evitando agregar librerías solo para parseo/guards.
- **Ownership de hooks**: los hooks de dominio viven dentro del feature (`features/CardStatus/hooks`) y se consumen desde screens vía exports públicos del feature.
