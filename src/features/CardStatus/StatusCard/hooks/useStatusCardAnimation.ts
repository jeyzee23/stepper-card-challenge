import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import type { CardStatus } from '../StatusCard.types';

export function useStatusCardAnimation(status: CardStatus) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animation.setValue(0);
    Animated.timing(animation, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [animation, status]);

  return useMemo(
    () => ({
      opacity: animation,
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 0],
          }),
        },
      ],
    }),
    [animation],
  );
}
