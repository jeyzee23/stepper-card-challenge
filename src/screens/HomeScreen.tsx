import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActivityTimeline } from '../components/ActivityTimeline';
import { InfoPanel } from '../components/InfoPanel';
import { LanguageToggle } from '../components/LanguageToggle';
import { ProgressStepper } from '../components/ProgressStepper';
import { QualitySignals } from '../components/QualitySignals';
import { StatusCard } from '../components/StatusCard';
import { useStepper } from '../context/StepperContext';
import { type CardStatus } from '../state/cardStatus';
import {
  appendStatusHistoryEntry,
  createStatusHistoryEntry,
} from '../state/statusHistory';
import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '../theme/tokens';
import type { CardStatusChangeSource } from '../types';

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
  }) as string[];

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
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.headerTopRow}>
              <Text style={styles.eyebrow}>{t('app.badge')}</Text>
              <LanguageToggle />
            </View>

            <Text style={styles.largeTitle}>{t('app.title')}</Text>
            <Text style={styles.subtitle}>{t('app.subtitle')}</Text>
          </View>

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

        <View style={styles.footer}>
          <View style={styles.footerTray}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ disabled: isFirstStep }}
              disabled={isFirstStep}
              onPress={goPrevious}
              style={({ pressed }) => [
                styles.backButton,
                isFirstStep ? styles.backButtonDisabled : null,
                pressed && !isFirstStep ? styles.backButtonPressed : null,
              ]}
            >
              <Text
                style={[
                  styles.backChevron,
                  isFirstStep ? styles.backTextDisabled : null,
                ]}
              >
                ‹
              </Text>
              <Text
                style={[
                  styles.backButtonLabel,
                  isFirstStep ? styles.backTextDisabled : null,
                ]}
                numberOfLines={1}
              >
                {t('actions.back')}
              </Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={handleNext}
              style={({ pressed }) => [
                styles.primaryNavButton,
                pressed ? styles.primaryNavButtonPressed : null,
              ]}
            >
              <Text
                adjustsFontSizeToFit
                minimumFontScale={0.9}
                numberOfLines={1}
                style={styles.primaryNavButtonLabel}
              >
                {nextLabel}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  scrollContent: {
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingBottom: 144,
  },
  header: {
    gap: spacing.md,
    paddingTop: spacing.sm,
  },
  headerTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  eyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  largeTitle: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -1.1,
    lineHeight: 40,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 17,
    lineHeight: 24,
    maxWidth: 580,
  },
  stepperCard: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.lg,
  },
  stepperHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionEyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  sectionMeta: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '500',
  },
  animatedContent: {
    gap: spacing.lg,
  },
  footer: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  footerTray: {
    ...shadowStyles.soft,
    alignItems: 'center',
    backgroundColor: colors.surfaceElevated,
    borderColor: colors.line,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    borderWidth: hairlineWidth,
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.sm,
  },
  backButton: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.md,
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: spacing.md,
    width: 108,
  },
  backButtonDisabled: {
    opacity: 0.45,
  },
  backButtonPressed: {
    backgroundColor: colors.fill,
  },
  backChevron: {
    color: colors.accent,
    fontFamily: typography.bodyFamily,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: -2,
  },
  backButtonLabel: {
    color: colors.accent,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '600',
  },
  backTextDisabled: {
    color: colors.textMuted,
  },
  primaryNavButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    flex: 1,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: spacing.xl,
  },
  primaryNavButtonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  primaryNavButtonLabel: {
    color: colors.surfaceElevated,
    fontFamily: typography.bodyFamily,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
