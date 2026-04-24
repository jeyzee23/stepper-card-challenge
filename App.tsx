import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StepperProvider } from './src/context/StepperContext';
import './src/i18n';
import { HomeScreen } from './src/screens/HomeScreen';
import { colors } from './src/theme/tokens';

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
