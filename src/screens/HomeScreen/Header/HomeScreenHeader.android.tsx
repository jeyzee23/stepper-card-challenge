import React from 'react';
import { Text, View } from 'react-native';

import { LanguageToggle } from '@/components/LanguageToggle';

import { headerStyles as styles } from './HomeScreenHeader.styles.android';
import { headerActionStyles as actionStyles } from './HomeScreenHeaderActions.styles';

import type { HomeScreenHeaderProps } from './HomeScreenHeader.types';

export function HomeScreenHeader({
  badge,
  subtitle,
  topInset,
  title,
}: HomeScreenHeaderProps) {
  return (
    <View style={[styles.androidShell, { paddingTop: topInset + 16 }]}>
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
        <Text style={styles.androidSummaryText}>{subtitle}</Text>
      </View>
    </View>
  );
}
