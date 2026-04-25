import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.brand,
    gap: spacing.lg,
    marginHorizontal: -spacing.lg,
    overflow: 'hidden',
    paddingBottom: 48,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
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
    height: 178,
    position: 'absolute',
    right: -28,
    top: -56,
    width: 178,
  },
  headerShapeSmall: {
    backgroundColor: colors.heroOverlay,
    borderRadius: 78,
    bottom: -54,
    height: 132,
    left: -44,
    position: 'absolute',
    width: 132,
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
  largeTitle: {
    color: colors.surface,
    fontFamily: typography.titleFamily,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.2,
    lineHeight: 34,
  },
  subtitle: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    lineHeight: 21,
    maxWidth: 620,
    opacity: 0.9,
  },
});
