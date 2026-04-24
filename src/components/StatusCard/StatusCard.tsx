import React, { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Easing, Text, View } from 'react-native';

import { ActionButton } from '@/components/ActionButton';
import { colors } from '@/design-system';
import { formatCurrency, formatDateTime } from '@/utils/formatters';

import cardData from './StatusCard.mock.json';
import { getNextCardStatus } from './StatusCard.model';
import { styles, statusTheme } from './StatusCard.styles';
import { StatusCardStateControls } from './StatusCardStateControls';

import type { AccountCardData, StatusCardProps } from './StatusCard.types';

const account = cardData as AccountCardData;

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
        <StatusCardStateControls
          accentColor={theme.accent}
          onStatusChange={onStatusChange}
          status={status}
        />
        <Text style={styles.actionHint}>
          {t('statusCard.primaryActionHint', {
            nextStatus: t(`statusCard.statuses.${nextStatus}.label`),
          })}
        </Text>
      </View>
    </View>
  );
}
