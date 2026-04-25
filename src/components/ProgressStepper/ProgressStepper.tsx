import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { useStepper } from '@/context/StepperContext';

import { styles } from './ProgressStepper.styles';

export function ProgressStepper() {
  const { t } = useTranslation();
  const { currentStepIndex, furthestStepIndex, steps } = useStepper();

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isCurrent = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;
        const isAccessible = index <= furthestStepIndex;

        return (
          <React.Fragment key={step.id}>
            <View
              accessibilityLabel={t('stepper.stepA11yLabel', {
                index: index + 1,
                name: t(`steps.${step.id}.label`),
              })}
              accessibilityRole="text"
              accessibilityState={{
                selected: isCurrent,
              }}
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
            </View>
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
