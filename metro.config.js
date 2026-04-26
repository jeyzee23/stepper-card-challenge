const path = require('path');

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const { sourceRoot } = require('./config/moduleResolution');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName.startsWith('@/')) {
        return context.resolveRequest(
          context,
          path.join(sourceRoot, moduleName.slice(2)),
          platform,
        );
      }

      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
