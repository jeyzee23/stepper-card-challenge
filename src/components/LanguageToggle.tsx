import React, { startTransition, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/theme/tokens';
import type { AppLanguage } from '@/types';

const languages: AppLanguage[] = ['es', 'en'];
const segmentWidth = 48;

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? 'es') as AppLanguage;
  const translateX = useRef(
    new Animated.Value(currentLanguage === 'en' ? segmentWidth : 0),
  ).current;

  useEffect(() => {
    Animated.spring(translateX, {
      bounciness: 0,
      speed: 22,
      toValue: currentLanguage === 'en' ? segmentWidth : 0,
      useNativeDriver: true,
    }).start();
  }, [currentLanguage, translateX]);

  return (
    <View style={styles.container}>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
          },
        ]}
      />

      {languages.map(language => {
        const isActive = currentLanguage === language;

        return (
          <Pressable
            accessibilityRole="button"
            key={language}
            onPress={() => {
              startTransition(() => {
                i18n.changeLanguage(language).catch(() => {});
              });
            }}
            style={styles.segment}
          >
            <Text style={[styles.label, isActive ? styles.activeLabel : null]}>
              {language.toUpperCase()}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: colors.fill,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    borderColor: colors.line,
    borderWidth: hairlineWidth,
    flexDirection: 'row',
    padding: spacing.xs,
    position: 'relative',
  },
  thumb: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    bottom: spacing.xs,
    left: spacing.xs,
    position: 'absolute',
    top: spacing.xs,
    width: segmentWidth,
  },
  segment: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 32,
    width: segmentWidth,
  },
  label: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
  },
  activeLabel: {
    color: colors.ink,
  },
});
