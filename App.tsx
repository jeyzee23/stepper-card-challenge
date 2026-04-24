import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StepperProvider } from '@/context/StepperContext';
import { HomeScreen } from '@/screens/HomeScreen';
import { colors } from '@/theme/tokens';
import './src/i18n';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <StepperProvider>
        <HomeScreen />
      </StepperProvider>
    </SafeAreaProvider>
  );
}

export default App;
