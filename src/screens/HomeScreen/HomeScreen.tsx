import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  Platform,
  ScrollView,
  type LayoutChangeEvent,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { QualitySignals } from '@/components/QualitySignals';
import { useStepper } from '@/context/StepperContext';
import { spacing } from '@/design-system';
import { useCardStatusHistory } from '@/features/CardStatus';

import { HomeScreenFooter } from './Footer';
import { HomeScreenHeader } from './Header';
import { styles } from './HomeScreen.styles';
import { useStepTransitionAnimation } from './hooks';
import { HomeScreenStepContent, HomeScreenStepperCard } from './Stepper';

const fallbackFooterHeight = Platform.OS === 'android' ? 88 : 104;

export function HomeScreen() {
  const { t } = useTranslation();
  const { bottom, top } = useSafeAreaInsets();
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
  const [footerHeight, setFooterHeight] = useState(fallbackFooterHeight);

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
  const handleFooterLayout = (event: LayoutChangeEvent) => {
    const measuredHeight = Math.ceil(event.nativeEvent.layout.height);

    setFooterHeight(previousHeight =>
      previousHeight === measuredHeight ? previousHeight : measuredHeight,
    );
  };
  const headerTopInset = Platform.OS === 'android' ? top : 0;
  const footerBottomInset = bottom;
  const scrollBottomInset = footerHeight + spacing.sm;
  const scrollContentStyle =
    Platform.OS === 'android'
      ? [styles.scrollContent, { paddingBottom: scrollBottomInset }]
      : styles.scrollContent;

  return (
    <View style={styles.screen} testID="home-screen">
      <ScrollView
        alwaysBounceVertical={false}
        automaticallyAdjustContentInsets={Platform.OS === 'ios'}
        automaticallyAdjustsScrollIndicatorInsets={Platform.OS === 'ios'}
        bounces={false}
        contentContainerStyle={scrollContentStyle}
        contentInset={
          Platform.OS === 'ios'
            ? { bottom: scrollBottomInset, left: 0, right: 0, top: 0 }
            : undefined
        }
        contentInsetAdjustmentBehavior={
          Platform.OS === 'ios' ? 'automatic' : 'never'
        }
        overScrollMode="never"
        scrollIndicatorInsets={
          Platform.OS === 'ios'
            ? { bottom: scrollBottomInset, left: 0, right: 0, top: 0 }
            : undefined
        }
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <HomeScreenHeader
          badge={t('app.badge')}
          subtitle={t('app.subtitle')}
          topInset={headerTopInset}
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
        bottomInset={footerBottomInset}
        isFirstStep={isFirstStep}
        nextLabel={nextLabel}
        onBack={goPrevious}
        onLayout={handleFooterLayout}
        onNext={handleNext}
      />
    </View>
  );
}
