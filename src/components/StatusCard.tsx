import React, { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActionSheetIOS,
  Animated,
  type ColorValue,
  Easing,
  Platform,
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
} from '@/design-system';
import cardData from '@/mocks/account-card.json';
import {
  cardStatuses,
  getNextCardStatus,
  type CardStatus,
} from '@/state/cardStatus';
import type {
  AccountCardData,
  CardStatusChangeSource,
} from '@/types';
import { formatCurrency, formatDateTime } from '@/utils/formatters';

import { ActionButton } from './ActionButton';

const account = cardData as AccountCardData;

const statusTheme: Record<
  CardStatus,
  { accent: ColorValue; background: ColorValue; badgeBackground: ColorValue }
> = {
  disabled: {
    accent: colors.danger,
    background: colors.dangerSoft,
    badgeBackground: colors.dangerSoft,
  },
  enabled: {
    accent: colors.success,
    background: colors.successSoft,
    badgeBackground: colors.successSoft,
  },
  paused: {
    accent: colors.warning,
    background: colors.warningSoft,
    badgeBackground: colors.warningSoft,
  },
  resumed: {
    accent: colors.info,
    background: colors.infoSoft,
    badgeBackground: colors.infoSoft,
  },
};

interface StatusCardProps {
  onStatusChange: (
    status: CardStatus,
    source?: CardStatusChangeSource,
  ) => void;
  status: CardStatus;
}

export function StatusCard({ onStatusChange, status }: StatusCardProps) {
  const { i18n, t } = useTranslation();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animation.setValue(0);
    Animated.timing(animation, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [animation, status]);

  const theme = statusTheme[status];
  const nextStatus = getNextCardStatus(status);

  const animatedStyle = useMemo(
    () => ({
      opacity: animation,
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 0],
          }),
        },
      ],
    }),
    [animation],
  );

  const detailRows = [
    {
      label: t('statusCard.holder'),
      value: account.holderName,
    },
    {
      label: t('statusCard.availableLimit'),
      value: formatCurrency(account.availableLimit, account.currency, i18n.language),
    },
    {
      label: t('statusCard.monthlyLimit'),
      value: formatCurrency(account.monthlyLimit, account.currency, i18n.language),
    },
    {
      label: t('statusCard.spentThisMonth'),
      value: formatCurrency(account.spentThisMonth, account.currency, i18n.language),
    },
    {
      label: t('statusCard.updatedAt'),
      value: formatDateTime(account.updatedAt, i18n.language),
    },
  ];

  const openStatusSheet = () => {
    if (Platform.OS !== 'ios') {
      return;
    }

    const options = [
      ...cardStatuses.map(option => t(`statusCard.statuses.${option}.label`)),
      t('common.cancel'),
    ];
    const cancelButtonIndex = options.length - 1;

    ActionSheetIOS.showActionSheetWithOptions(
      {
        cancelButtonIndex,
        options,
        title: t('statusCard.manageStatusTitle'),
      },
      selectedIndex => {
        if (selectedIndex === undefined || selectedIndex === cancelButtonIndex) {
          return;
        }

        onStatusChange(cardStatuses[selectedIndex], 'manual');
      },
    );
  };

  return (
    <View style={styles.shell}>
      <Animated.View
        style={[
          styles.card,
          { borderLeftColor: theme.accent, backgroundColor: colors.surfaceElevated },
          animatedStyle,
        ]}
        testID="status-card"
      >
        <View style={styles.topRow}>
          <View style={styles.titleBlock}>
            <Text style={styles.eyebrow}>{t('statusCard.title')}</Text>
            <Text style={styles.planName}>{account.planName}</Text>
            <Text style={styles.cardSubtitle}>{t('statusCard.subtitle')}</Text>
          </View>

          <View style={[styles.statusBadge, { backgroundColor: theme.badgeBackground }]}>
            <View style={[styles.statusDot, { backgroundColor: theme.accent }]} />
            <Text style={[styles.statusLabel, { color: theme.accent }]}>
              {t(`statusCard.statuses.${status}.label`)}
            </Text>
          </View>
        </View>

        <View style={styles.accountPreview}>
          <Text style={styles.maskedNumber}>{account.maskedNumber}</Text>
          <Text style={styles.accountMeta}>
            {t('statusCard.accountId')} {account.accountId}
          </Text>
          <Text style={styles.statusDescription}>
            {t(`statusCard.statuses.${status}.description`)}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          {detailRows.map((row, index) => (
            <View
              key={row.label}
              style={[
                styles.detailRow,
                index < detailRows.length - 1 ? styles.detailRowBorder : null,
              ]}
            >
              <Text style={styles.detailLabel}>{row.label}</Text>
              <Text style={styles.detailValue}>{row.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.capabilitiesCard}>
          <Text style={styles.sectionLabel}>{t('statusCard.featuresTitle')}</Text>
          {account.features.map((feature, index) => (
            <View
              key={feature}
              style={[
                styles.featureRow,
                index < account.features.length - 1 ? styles.featureRowBorder : null,
              ]}
            >
              <View style={styles.featureDot} />
              <Text style={styles.featureLabel}>
                {t(`statusCard.features.${feature}`)}
              </Text>
            </View>
          ))}
        </View>
      </Animated.View>

      <View style={styles.actionPanel}>
        <Text style={styles.actionPanelTitle}>{t('statusCard.primaryActionTitle')}</Text>
        <ActionButton
          label={t(`statusCard.statuses.${status}.action`)}
          onPress={() => onStatusChange(nextStatus, 'quick_action')}
        />
        <Pressable onPress={openStatusSheet} style={styles.linkButton}>
          <Text style={styles.linkButtonLabel}>{t('statusCard.manageStatus')}</Text>
        </Pressable>
        <Text style={styles.actionHint}>
          {t('statusCard.primaryActionHint', {
            nextStatus: t(`statusCard.statuses.${nextStatus}.label`),
          })}
        </Text>
      </View>

      {Platform.OS !== 'ios' ? (
        <View style={styles.fallbackSelectorCard}>
          <Text style={styles.sectionLabel}>{t('statusCard.previewTitle')}</Text>
          <View style={styles.selectorRow}>
            {cardStatuses.map(option => {
              const isActive = option === status;

              return (
                <Pressable
                  accessibilityLabel={t('statusCard.statusOptionA11yLabel', {
                    status: t(`statusCard.statuses.${option}.label`),
                  })}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isActive }}
                  key={option}
                  onPress={() => onStatusChange(option, 'manual')}
                  testID={`status-option-${option}`}
                  style={[
                    styles.selectorPill,
                    isActive
                      ? [styles.activeSelectorPill, { borderColor: theme.accent }]
                      : null,
                  ]}
                >
                  <Text
                    style={[
                      styles.selectorLabel,
                      isActive
                        ? [styles.activeSelectorLabel, { color: theme.accent }]
                        : null,
                    ]}
                  >
                    {t(`statusCard.statuses.${option}.label`)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    gap: spacing.lg,
  },
  card: {
    ...shadowStyles.card,
    borderCurve: 'continuous',
    borderLeftWidth: 3,
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  topRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  titleBlock: {
    flex: 1,
    gap: spacing.xs,
    minWidth: 220,
  },
  eyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  planName: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  cardSubtitle: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    lineHeight: 22,
  },
  statusBadge: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  statusDot: {
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 8,
    width: 8,
  },
  statusLabel: {
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '700',
  },
  accountPreview: {
    backgroundColor: colors.fill,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    gap: spacing.sm,
    padding: spacing.lg,
  },
  maskedNumber: {
    color: colors.ink,
    fontFamily: typography.bodyFamily,
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  accountMeta: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
  },
  statusDescription: {
    color: colors.text,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    lineHeight: 22,
  },
  detailsCard: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  detailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  detailRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  detailLabel: {
    color: colors.textMuted,
    flex: 1,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
  },
  detailValue: {
    color: colors.ink,
    flexShrink: 1,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'right',
  },
  capabilitiesCard: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
    paddingTop: spacing.md,
  },
  sectionLabel: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  featureRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  featureRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  featureDot: {
    backgroundColor: colors.accent,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 7,
    width: 7,
  },
  featureLabel: {
    color: colors.text,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
  },
  actionPanel: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.md,
    padding: spacing.lg,
  },
  actionPanelTitle: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  linkButton: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.xs,
  },
  linkButtonLabel: {
    color: colors.accent,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '600',
  },
  actionHint: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    lineHeight: 19,
  },
  fallbackSelectorCard: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  selectorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  selectorPill: {
    backgroundColor: colors.fill,
    borderColor: colors.line,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    borderWidth: hairlineWidth,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  activeSelectorPill: {
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
  },
  selectorLabel: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
  },
  activeSelectorLabel: {
    color: colors.ink,
  },
});
