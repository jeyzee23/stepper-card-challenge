import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export function useStepTransitionAnimation(stepId: string) {
  const contentAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    contentAnimation.setValue(0);
    Animated.timing(contentAnimation, {
      duration: 240,
      easing: Easing.out(Easing.cubic),
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [contentAnimation, stepId]);

  return useMemo(
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
}
