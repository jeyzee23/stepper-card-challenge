import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { spacing } from '@/design-system';

import { footerStyles as styles } from './HomeScreenFooter.styles.ios';

import type { HomeScreenFooterProps } from './HomeScreenFooter.types';

export function HomeScreenFooter({
  backLabel,
  bottomInset,
  isFirstStep,
  nextLabel,
  onBack,
  onLayout,
  onNext,
}: HomeScreenFooterProps) {
  return (
    <View
      onLayout={onLayout}
      style={[styles.footer, { paddingBottom: bottomInset + spacing.lg }]}
    >
      <View style={styles.footerTray}>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled: isFirstStep }}
          disabled={isFirstStep}
          onPress={onBack}
          testID="home-footer-back"
          style={({ pressed }) => [
            styles.backButton,
            isFirstStep ? styles.backButtonDisabled : null,
            pressed && !isFirstStep ? styles.backButtonPressed : null,
          ]}
        >
          <Text
            style={[
              styles.backChevron,
              isFirstStep ? styles.backTextDisabled : null,
            ]}
          >
            ‹
          </Text>
          <Text
            numberOfLines={1}
            style={[
              styles.backButtonLabel,
              isFirstStep ? styles.backTextDisabled : null,
            ]}
          >
            {backLabel}
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={onNext}
          testID="home-footer-next"
          style={({ pressed }) => [
            styles.primaryNavButton,
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
    </View>
  );
}
