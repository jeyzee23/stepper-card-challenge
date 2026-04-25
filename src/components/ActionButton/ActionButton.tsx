import React from 'react';
import { Pressable, Text } from 'react-native';

import { colors } from '@/design-system';

import { styles } from './ActionButton.styles';

import type { ActionButtonProps } from './ActionButton.types';

export function ActionButton({
  disabled = false,
  label,
  onPress,
  style,
  testID,
  variant = 'primary',
}: ActionButtonProps) {
  return (
    <Pressable
      accessibilityState={{ disabled }}
      accessibilityRole="button"
      android_ripple={{
        color: variant === 'primary' ? colors.brandDark : colors.brandSoft,
      }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
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
