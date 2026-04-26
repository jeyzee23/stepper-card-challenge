import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { translate } from '@/i18n';

import { styles } from './ErrorBoundary.styles';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
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
            <Text style={styles.eyebrow}>
              {translate('errors.flowBoundary.eyebrow')}
            </Text>
            <Text style={styles.title}>
              {translate('errors.flowBoundary.title')}
            </Text>
            <Text style={styles.description}>
              {translate('errors.flowBoundary.description')}
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={translate(
                'errors.flowBoundary.retryA11yLabel',
              )}
              onPress={this.handleRetry}
              style={styles.retryButton}
              testID="app-error-retry"
            >
              <Text style={styles.retryButtonText}>
                {translate('errors.flowBoundary.retryLabel')}
              </Text>
            </Pressable>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}
