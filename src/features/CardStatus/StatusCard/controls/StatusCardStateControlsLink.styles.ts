import { StyleSheet } from 'react-native';

import { colors, spacing, typography } from '@/design-system';

export const statusCardStateControlsLinkStyles = StyleSheet.create({
  linkButton: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.xs,
  },
  linkButtonLabel: {
    color: colors.brandDeep,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '600',
  },
});
