import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LanguageToggle } from '@/components/LanguageToggle';

import { headerStyles as styles } from './HomeScreenHeader.styles';
import { headerActionStyles as actionStyles } from './HomeScreenHeaderActions.android.styles';

import type { HomeScreenHeaderProps } from './HomeScreenHeader.types';

export function HomeScreenHeader({
  badge,
  subtitle,
  title,
}: HomeScreenHeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.androidShell, { paddingTop: top + 16 }]}>
      <View style={styles.androidTopBar}>
        <View style={actionStyles.logo}>
          <Text style={actionStyles.logoMark}>†</Text>
        </View>

        <View style={styles.androidTitleGroup}>
          <Text numberOfLines={1} style={styles.androidTitle}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.androidBadge}>
            {badge}
          </Text>
        </View>

        <LanguageToggle />
      </View>

      <View style={styles.androidSummaryCard}>
        <View style={styles.androidSummaryIcon}>
          <Text style={styles.androidSummaryIconText}>✓</Text>
        </View>
        <Text numberOfLines={2} style={styles.androidSummaryText}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
