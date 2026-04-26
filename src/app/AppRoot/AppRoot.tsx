import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StepperProvider } from '@/context/StepperContext';
import { colors } from '@/design-system';
import { HomeScreen } from '@/screens/HomeScreen';
import '@/i18n';

import { AppErrorBoundary } from './AppErrorBoundary';

export function AppRoot() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <AppErrorBoundary>
        <StepperProvider>
          <HomeScreen />
        </StepperProvider>
      </AppErrorBoundary>
    </SafeAreaProvider>
  );
}
