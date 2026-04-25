import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LanguageToggle } from '@/components/LanguageToggle';
import { spacing } from '@/design-system';

import { headerStyles as styles } from './HomeScreenHeader.styles';

import type { HomeScreenHeaderProps } from './HomeScreenHeader.types';

export function HomeScreenHeader({
  badge,
  subtitle,
  title,
}: HomeScreenHeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        styles.headerIOS,
        { paddingTop: top + spacing.lg },
      ]}
    >
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
