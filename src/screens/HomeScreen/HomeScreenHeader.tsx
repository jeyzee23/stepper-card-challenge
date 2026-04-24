import React from 'react';
import { Text, View } from 'react-native';

import { LanguageToggle } from '@/components/LanguageToggle';

import { styles } from './HomeScreen.styles';

interface HomeScreenHeaderProps {
  badge: string;
  subtitle: string;
  title: string;
}

export function HomeScreenHeader({
  badge,
  subtitle,
  title,
}: HomeScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTopRow}>
        <Text style={styles.eyebrow}>{badge}</Text>
        <LanguageToggle />
      </View>

      <Text style={styles.largeTitle}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
