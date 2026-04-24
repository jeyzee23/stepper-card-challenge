import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useStepper } from '../context/StepperContext';
import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '../theme/tokens';

export function ProgressStepper() {
  const { t } = useTranslation();
  const { currentStepIndex, furthestStepIndex, goToStep, steps } = useStepper();

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isCurrent = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;
        const isAccessible = index <= furthestStepIndex;

        return (
          <React.Fragment key={step.id}>
            <Pressable
              accessibilityLabel={t('stepper.stepA11yLabel', {
                index: index + 1,
                name: t(`steps.${step.id}.label`),
              })}
              accessibilityRole="button"
              accessibilityState={{
                disabled: !isAccessible,
                selected: isCurrent,
              }}
              disabled={!isAccessible}
              onPress={() => goToStep(index)}
              testID={`stepper-step-${step.id}`}
              style={styles.step}
            >
              <View
                style={[
                  styles.circle,
                  isCompleted ? styles.completedCircle : null,
                  isCurrent ? styles.currentCircle : null,
                  !isAccessible && !isCurrent ? styles.lockedCircle : null,
                ]}
              >
                <Text
                  style={[
                    styles.circleText,
                    isCompleted || isCurrent ? styles.activeCircleText : null,
                  ]}
                >
                  {isCompleted ? '✓' : index + 1}
                </Text>
              </View>
              <Text
                style={[
                  styles.label,
                  isCurrent ? styles.currentLabel : null,
                  !isAccessible && !isCurrent ? styles.lockedLabel : null,
                ]}
                numberOfLines={2}
              >
                {t(`steps.${step.id}.label`)}
              </Text>
            </Pressable>
            {index < steps.length - 1 ? (
              <View
                style={[
                  styles.connector,
                  index < currentStepIndex ? styles.activeConnector : null,
                ]}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  step: {
    alignItems: 'center',
    flex: 1,
    gap: spacing.xs,
  },
  circle: {
    alignItems: 'center',
    backgroundColor: colors.fill,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  currentCircle: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
    borderWidth: hairlineWidth,
  },
  completedCircle: {
    backgroundColor: colors.accent,
  },
  lockedCircle: {
    backgroundColor: colors.surfaceMuted,
  },
  circleText: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '700',
  },
  activeCircleText: {
    color: colors.surfaceElevated,
  },
  label: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  currentLabel: {
    color: colors.ink,
  },
  lockedLabel: {
    color: colors.textMuted,
  },
  connector: {
    alignSelf: 'flex-start',
    backgroundColor: colors.line,
    flex: 0.25,
    height: hairlineWidth,
    marginTop: 13,
  },
  activeConnector: {
    backgroundColor: colors.accent,
  },
});
