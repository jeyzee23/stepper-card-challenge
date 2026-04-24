import React from 'react';
import { Text, View } from 'react-native';

import { LanguageToggle } from '@/components/LanguageToggle';

import { styles } from './HomeScreen.styles';

import type { HomeScreenHeaderProps } from './HomeScreenHeader.types';

export function HomeScreenHeader({
  badge,
  subtitle,
  title,
}: HomeScreenHeaderProps) {
  return (
    <View style={[styles.header, styles.headerIOS]}>
      <View style={styles.headerShapeLarge} />
      <View style={styles.headerShapeSmall} />

      <View style={styles.headerTopRow}>
        <Text style={styles.heroEyebrow}>{badge}</Text>
        <LanguageToggle />
      </View>

      <Text style={styles.largeTitle}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
