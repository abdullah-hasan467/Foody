const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

let config = getDefaultConfig(__dirname);

// Apply NativeWind first
config = withNativeWind(config, { input: './global.css' });

// Then apply Reanimated
config = wrapWithReanimatedMetroConfig(config);

module.exports = config;
