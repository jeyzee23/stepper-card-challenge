import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  shadowStyles,
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

interface InfoPanelProps {
  bullets: readonly string[];
  description: string;
  highlightLabel: string;
  highlightValue: string;
  title: string;
}

export function InfoPanel({
  bullets,
  description,
  highlightLabel,
  highlightValue,
  title,
}: InfoPanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>{highlightLabel}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.highlightCard}>
        <Text style={styles.highlightValue}>{highlightValue}</Text>
      </View>

      <View style={styles.bulletList}>
        {bullets.map((item, index) => (
          <View
            key={item}
            style={[
              styles.bulletRow,
              index < bullets.length - 1 ? styles.bulletRowBorder : null,
            ]}
          >
            <Text style={styles.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...shadowStyles.card,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  eyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  description: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 24,
  },
  highlightCard: {
    backgroundColor: colors.accentSoft,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    padding: spacing.lg,
  },
  highlightValue: {
    color: colors.accentStrong,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  },
  bulletList: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  bulletRow: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  bulletRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  bulletText: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
});
