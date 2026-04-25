import React from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Text, View } from 'react-native';

import { colors } from '@/design-system';

import { AccountPreview } from './AccountPreview';
import { CapabilitiesList } from './CapabilitiesList';
import { CardDetails } from './CardDetails';
import { StatusActionPanel } from './StatusActionPanel';
import { StatusBadge } from './StatusBadge';
import cardData from './StatusCard.mock.json';
import { buildCardDetailRows, getNextCardStatus } from './StatusCard.model';
import { styles, statusTheme } from './StatusCard.styles';
import { useStatusCardAnimation } from './useStatusCardAnimation';

import type { AccountCardData, StatusCardProps } from './StatusCard.types';

const account = cardData as AccountCardData;

export function StatusCard({ onStatusChange, status }: StatusCardProps) {
  const { i18n, t } = useTranslation();
  const theme = statusTheme[status];
  const nextStatus = getNextCardStatus(status);
  const animatedStyle = useStatusCardAnimation(status);

  const detailRows = buildCardDetailRows(account, i18n.language, {
    availableLimit: t('statusCard.availableLimit'),
    holder: t('statusCard.holder'),
    monthlyLimit: t('statusCard.monthlyLimit'),
    spentThisMonth: t('statusCard.spentThisMonth'),
    updatedAt: t('statusCard.updatedAt'),
  });

  return (
    <View style={styles.shell}>
      <Animated.View
        style={[
          styles.card,
          {
            borderLeftColor: theme.accent,
            backgroundColor: colors.surfaceElevated,
          },
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

          <StatusBadge
            label={t(`statusCard.statuses.${status}.label`)}
            status={status}
            theme={theme}
          />
        </View>

        <AccountPreview
          account={account}
          accountLabel={t('statusCard.accountId')}
          description={t(`statusCard.statuses.${status}.description`)}
          theme={theme}
        />

        <CardDetails rows={detailRows} />

        <CapabilitiesList
          features={account.features}
          title={t('statusCard.featuresTitle')}
          translateFeature={feature => t(`statusCard.features.${feature}`)}
        />
      </Animated.View>

      <StatusActionPanel
        actionHint={t('statusCard.primaryActionHint', {
          nextStatus: t(`statusCard.statuses.${nextStatus}.label`),
        })}
        actionLabel={t(`statusCard.statuses.${status}.action`)}
        nextStatus={nextStatus}
        onStatusChange={onStatusChange}
        status={status}
        theme={theme}
        title={t('statusCard.primaryActionTitle')}
      />
    </View>
  );
}
