import React, { startTransition, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Pressable, Text, View } from 'react-native';

import type { AppLanguage } from '@/types';

import { segmentWidth, styles } from './LanguageToggle.styles';

const languages: AppLanguage[] = ['es', 'en'];

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
