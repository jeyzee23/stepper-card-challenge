/* eslint-env jest */

const mockRNLocalize = require('react-native-localize/mock');

jest.mock('react-native-localize', () => mockRNLocalize);
jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children, ...props }) =>
      React.createElement(View, props, children),
    initialWindowMetrics: {
      frame: { height: 640, width: 320, x: 0, y: 0 },
      insets: { bottom: 0, left: 0, right: 0, top: 0 },
    },
    useSafeAreaFrame: () => ({ height: 640, width: 320, x: 0, y: 0 }),
    useSafeAreaInsets: () => ({ bottom: 0, left: 0, right: 0, top: 0 }),
  };
});
