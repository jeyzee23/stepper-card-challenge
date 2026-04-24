import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '../theme/tokens';

type ButtonVariant = 'primary' | 'secondary';

interface ActionButtonProps {
  disabled?: boolean;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
}

export function ActionButton({
  disabled = false,
  label,
  onPress,
  style,
  variant = 'primary',
}: ActionButtonProps) {
  return (
    <Pressable
      accessibilityState={{ disabled }}
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
        pressed && !disabled ? styles.pressed : null,
        disabled ? styles.disabled : null,
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          variant === 'primary' ? styles.primaryLabel : styles.secondaryLabel,
          disabled ? styles.disabledLabel : null,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.sm,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  primary: {
    backgroundColor: colors.accent,
  },
  secondary: {
    backgroundColor: colors.surfaceElevated,
    borderColor: colors.line,
    borderWidth: hairlineWidth,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    backgroundColor: colors.fill,
    borderColor: colors.fill,
  },
  label: {
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '700',
  },
  primaryLabel: {
    color: colors.surface,
  },
  secondaryLabel: {
    color: colors.accent,
  },
  disabledLabel: {
    color: colors.textMuted,
  },
});
