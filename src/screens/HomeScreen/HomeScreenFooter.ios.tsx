import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './HomeScreen.styles';

import type { HomeScreenFooterProps } from './HomeScreenFooter.types';

export function HomeScreenFooter({
  backLabel,
  isFirstStep,
  nextLabel,
  onBack,
  onNext,
}: HomeScreenFooterProps) {
  return (
    <View style={styles.footer}>
      <View style={styles.footerTray}>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled: isFirstStep }}
          disabled={isFirstStep}
          onPress={onBack}
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
