import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.brand,
    gap: spacing.md,
    marginHorizontal: -spacing.lg,
    overflow: 'hidden',
    paddingBottom: 34,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  headerAndroid: {
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  headerIOS: {
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  headerShapeLarge: {
    backgroundColor: colors.heroOverlay,
    borderRadius: 120,
    height: 154,
    position: 'absolute',
    right: -28,
    top: -48,
    width: 154,
  },
  headerShapeSmall: {
    backgroundColor: colors.heroOverlay,
    borderRadius: 78,
    bottom: -54,
    height: 112,
    left: -44,
    position: 'absolute',
    width: 112,
  },
  headerTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  heroEyebrow: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  androidTitleBlock: {
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  largeTitle: {
    color: colors.surface,
    fontFamily: typography.titleFamily,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.2,
    lineHeight: 30,
  },
  subtitle: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 14,
    lineHeight: 18,
    maxWidth: 620,
    opacity: 0.84,
  },
});
