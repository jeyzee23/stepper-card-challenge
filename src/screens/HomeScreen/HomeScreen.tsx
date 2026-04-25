import React from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QualitySignals } from '@/components/QualitySignals';
import { useStepper } from '@/context/StepperContext';

import { styles } from './HomeScreen.styles';
import { HomeScreenFooter } from './HomeScreenFooter';
import { HomeScreenHeader } from './HomeScreenHeader';
import { HomeScreenStepContent } from './HomeScreenStepContent';
import { HomeScreenStepperCard } from './HomeScreenStepperCard';
import { useCardStatusHistory } from './useCardStatusHistory';
import { useStepTransitionAnimation } from './useStepTransitionAnimation';

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
  const {
    cardStatus,
    changeCardStatus,
    resetCardStatusHistory,
    statusHistory,
  } = useCardStatusHistory();
  const animatedStepStyle = useStepTransitionAnimation(currentStep.id);

  const nextLabel = isLastStep
    ? t('actions.restart')
    : currentStepIndex === steps.length - 2
    ? t('actions.openCard')
    : t('actions.next');

  const handleNext = () => {
    if (isLastStep) {
      resetCardStatusHistory();
      reset();
      return;
    }

    goNext();
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={styles.safeArea}
      testID="home-screen"
    >
      <View style={styles.screen}>
        <ScrollView
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={styles.scrollContent}
          contentInsetAdjustmentBehavior="never"
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <HomeScreenHeader
            badge={t('app.badge')}
            subtitle={t('app.subtitle')}
            title={t('app.title')}
          />

          <HomeScreenStepperCard
            currentStepNumber={currentStepIndex + 1}
            totalSteps={steps.length}
          />

          <Animated.View style={[styles.animatedContent, animatedStepStyle]}>
            <HomeScreenStepContent
              currentStep={currentStep}
              isLastStep={isLastStep}
              onStatusChange={changeCardStatus}
              status={cardStatus}
              statusHistory={statusHistory}
            />
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
