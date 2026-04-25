import React from 'react';
import { Text, View } from 'react-native';

import { LanguageToggle } from '@/components/LanguageToggle';

import { headerStyles as styles } from './HomeScreenHeader.styles';
import { headerActionStyles as actionStyles } from './HomeScreenHeaderActions.android.styles';

import type { HomeScreenHeaderProps } from './HomeScreenHeader.types';

export function HomeScreenHeader({
  badge,
  subtitle,
  title,
}: HomeScreenHeaderProps) {
  return (
    <View style={[styles.header, styles.headerAndroid]}>
      <View style={styles.headerShapeLarge} />
      <View style={styles.headerShapeSmall} />

      <View style={styles.headerTopRow}>
        <View style={actionStyles.logo}>
          <Text style={actionStyles.logoMark}>†</Text>
        </View>

        <View style={actionStyles.actions}>
          <View style={actionStyles.actionPill}>
            <Text style={actionStyles.actionIcon}>?</Text>
          </View>
          <View style={actionStyles.actionPill}>
            <Text style={actionStyles.actionIcon}>!</Text>
            <View style={actionStyles.actionDot} />
          </View>
          <LanguageToggle />
        </View>
      </View>

      <View style={styles.androidTitleBlock}>
        <Text style={styles.heroEyebrow}>{badge}</Text>
        <Text numberOfLines={1} style={styles.largeTitle}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
