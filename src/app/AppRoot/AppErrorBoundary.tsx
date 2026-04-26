import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './AppErrorBoundary.styles';

interface AppErrorBoundaryProps {
  children: React.ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends React.Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (__DEV__) {
      console.error('AppRoot boundary captured an error', error, errorInfo);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.screen} testID="app-error-boundary">
          <View style={styles.card}>
            <Text style={styles.eyebrow}>Error controlado</Text>
            <Text style={styles.title}>No pudimos cargar el flujo</Text>
            <Text style={styles.description}>
              El stepper encontró un problema inesperado. Podés reintentar sin
              cerrar la app.
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Reintentar flujo"
              onPress={this.handleRetry}
              style={styles.retryButton}
              testID="app-error-retry"
            >
              <Text style={styles.retryButtonText}>Reintentar</Text>
            </Pressable>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}
