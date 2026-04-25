import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { ProgressStepper } from '@/components/ProgressStepper';

import { styles } from './HomeScreen.styles';

interface HomeScreenStepperCardProps {
  currentStepNumber: number;
  totalSteps: number;
}

export function HomeScreenStepperCard({
  currentStepNumber,
  totalSteps,
}: HomeScreenStepperCardProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.stepperCard}>
      <View style={styles.stepperHeader}>
        <Text style={styles.sectionEyebrow}>{t('stepper.title')}</Text>
        <Text style={styles.sectionMeta}>
          {t('app.progressChip', {
            current: currentStepNumber,
            total: totalSteps,
          })}
        </Text>
      </View>
      <ProgressStepper />
    </View>
  );
}
