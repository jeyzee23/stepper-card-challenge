import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import {
  shadowStyles,
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

export function QualitySignals() {
  const { t } = useTranslation();
  const items = t('qualitySignals.items', {
    returnObjects: true,
  }) as readonly string[];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('qualitySignals.title')}</Text>
      <View style={styles.list}>
        {items.map((item, index) => (
          <View
            key={item}
            style={[
              styles.row,
              index < items.length - 1 ? styles.rowBorder : null,
            ]}
          >
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.lg,
  },
  title: {
    color: colors.textSubtle,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  list: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  rowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  index: {
    color: colors.accent,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    width: 24,
  },
  text: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
  },
});
