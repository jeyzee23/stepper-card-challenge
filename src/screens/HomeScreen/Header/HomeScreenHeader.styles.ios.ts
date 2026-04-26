import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.brand,
    gap: spacing.md,
    marginHorizontal: -spacing.lg,
    overflow: 'hidden',
    paddingBottom: 76,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  headerAndroid: {
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
    paddingBottom: 68,
    paddingTop: spacing.xl,
  },
  headerIOS: {
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  headerShapeLarge: {
    backgroundColor: colors.heroOverlay,
    borderRadius: 120,
    height: 190,
    position: 'absolute',
    right: -36,
    top: -64,
    width: 190,
  },
  headerShapeSmall: {
    backgroundColor: colors.heroOverlay,
    borderRadius: 86,
    bottom: -42,
    height: 132,
    left: -38,
    position: 'absolute',
    width: 132,
  },
  headerTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  heroEyebrow: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  largeTitle: {
    color: colors.surface,
    fontFamily: typography.titleFamily,
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 40,
  },
  subtitle: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 17,
    lineHeight: 24,
    maxWidth: 580,
    opacity: 0.92,
  },
});
