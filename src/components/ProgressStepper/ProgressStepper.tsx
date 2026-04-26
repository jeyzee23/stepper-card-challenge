import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import { useStepper } from '@/context/StepperContext';

import { styles } from './ProgressStepper.styles';

export function ProgressStepper() {
  const { t } = useTranslation();
  const { currentStepIndex, furthestStepIndex, goToStep, steps } = useStepper();

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isCurrent = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;
        const isVisited = index <= furthestStepIndex;
        const isDisabled = index > furthestStepIndex;

        return (
          <React.Fragment key={step.id}>
            <Pressable
              accessibilityHint={t(
                isDisabled
                  ? 'stepper.lockedStepA11yHint'
                  : 'stepper.availableStepA11yHint',
              )}
              accessibilityLabel={t('stepper.stepA11yLabel', {
                index: index + 1,
                name: t(`steps.${step.id}.label`),
              })}
              accessibilityRole="button"
              accessibilityState={{
                disabled: isDisabled,
                selected: isCurrent,
              }}
              disabled={isDisabled}
              onPress={() => goToStep(index)}
              testID={`stepper-step-${step.id}`}
              style={styles.step}
            >
              <View
                style={[
                  styles.circle,
                  isCompleted ? styles.completedCircle : null,
                  isCurrent ? styles.currentCircle : null,
                  !isVisited && !isCurrent ? styles.lockedCircle : null,
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
                  !isVisited && !isCurrent ? styles.lockedLabel : null,
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
