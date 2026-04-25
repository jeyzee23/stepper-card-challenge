import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Easing, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActivityTimeline } from '@/components/ActivityTimeline';
import { InfoPanel } from '@/components/InfoPanel';
import { ProgressStepper } from '@/components/ProgressStepper';
import { QualitySignals } from '@/components/QualitySignals';
import {
  appendStatusHistoryEntry,
  createStatusHistoryEntry,
  StatusCard,
  type CardStatus,
  type CardStatusChangeSource,
} from '@/components/StatusCard';
import { useStepper } from '@/context/StepperContext';

import { styles } from './HomeScreen.styles';
import { HomeScreenFooter } from './HomeScreenFooter';
import { HomeScreenHeader } from './HomeScreenHeader';

export function HomeScreen() {
  const { t } = useTranslation();
  const {
    currentStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    reset,
    goNext,
    goPrevious,
    steps,
  } = useStepper();
  const [cardStatus, setCardStatus] = useState<CardStatus>('disabled');
  const [statusHistory, setStatusHistory] = useState(() => [
    createStatusHistoryEntry('disabled', 'system'),
  ]);
  const contentAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    contentAnimation.setValue(0);
    Animated.timing(contentAnimation, {
      duration: 240,
      easing: Easing.out(Easing.cubic),
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [contentAnimation, currentStep.id]);

  const bullets = t(`steps.${currentStep.id}.bullets`, {
    returnObjects: true,
  }) as readonly string[];

  const nextLabel = isLastStep
    ? t('actions.restart')
    : currentStepIndex === steps.length - 2
    ? t('actions.openCard')
    : t('actions.next');

  const handleNext = () => {
    if (isLastStep) {
      setCardStatus('disabled');
      setStatusHistory([createStatusHistoryEntry('disabled', 'system')]);
      reset();
      return;
    }

    goNext();
  };

  const handleCardStatusChange = (
    nextStatus: CardStatus,
    source: CardStatusChangeSource = 'manual',
  ) => {
    setCardStatus(nextStatus);
    setStatusHistory(previousHistory =>
      appendStatusHistoryEntry(previousHistory, nextStatus, source),
    );
  };

  const animatedStepStyle = useMemo(
    () => ({
      opacity: contentAnimation,
      transform: [
        {
          translateY: contentAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 0],
          }),
        },
      ],
    }),
    [contentAnimation],
  );

  return (
    <SafeAreaView
      edges={['bottom']}
      style={styles.safeArea}
      testID="home-screen"
    >
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          <HomeScreenHeader
            badge={t('app.badge')}
            subtitle={t('app.subtitle')}
            title={t('app.title')}
          />

          <View style={styles.stepperCard}>
            <View style={styles.stepperHeader}>
              <Text style={styles.sectionEyebrow}>{t('stepper.title')}</Text>
              <Text style={styles.sectionMeta}>
                {t('app.progressChip', {
                  current: currentStepIndex + 1,
                  total: steps.length,
                })}
              </Text>
            </View>
            <ProgressStepper />
          </View>

          <Animated.View style={[styles.animatedContent, animatedStepStyle]}>
            <InfoPanel
              bullets={bullets}
              description={t(`steps.${currentStep.id}.description`)}
              highlightLabel={t(`steps.${currentStep.id}.highlightLabel`)}
              highlightValue={t(`steps.${currentStep.id}.highlightValue`)}
              title={t(`steps.${currentStep.id}.title`)}
            />

            {isLastStep ? (
              <>
                <StatusCard
                  onStatusChange={handleCardStatusChange}
                  status={cardStatus}
                />
                <ActivityTimeline history={statusHistory} />
              </>
            ) : null}
          </Animated.View>

          <QualitySignals />
        </ScrollView>

        <HomeScreenFooter
          backLabel={t('actions.back')}
          isFirstStep={isFirstStep}
          nextLabel={nextLabel}
          onBack={goPrevious}
          onNext={handleNext}
        />
      </View>
    </SafeAreaView>
  );
}
