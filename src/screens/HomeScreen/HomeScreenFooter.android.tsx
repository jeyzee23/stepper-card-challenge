import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/design-system';

import { footerStyles as styles } from './HomeScreenFooter.android.styles';

import type { HomeScreenFooterProps } from './HomeScreenFooter.types';

export function HomeScreenFooter({
  backLabel,
  isFirstStep,
  nextLabel,
  onBack,
  onNext,
}: HomeScreenFooterProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.footerAndroid, { paddingBottom: bottom + 10 }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled: isFirstStep }}
        android_ripple={{ color: colors.brandSoft }}
        disabled={isFirstStep}
        onPress={onBack}
        testID="home-footer-back"
        style={({ pressed }) => [
          styles.androidBackButton,
          isFirstStep ? styles.backButtonDisabled : null,
          pressed && !isFirstStep ? styles.backButtonPressed : null,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[
            styles.androidBackButtonLabel,
            isFirstStep ? styles.backTextDisabled : null,
          ]}
        >
          {backLabel}
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        android_ripple={{ color: colors.brandDark }}
        onPress={onNext}
        testID="home-footer-next"
        style={({ pressed }) => [
          styles.androidPrimaryButton,
          pressed ? styles.primaryNavButtonPressed : null,
        ]}
      >
        <Text
          adjustsFontSizeToFit
          minimumFontScale={0.9}
          numberOfLines={1}
          style={styles.primaryNavButtonLabel}
        >
          {nextLabel}
        </Text>
      </Pressable>
    </View>
  );
}
