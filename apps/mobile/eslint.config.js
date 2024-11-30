const { baseConfig, reactConfig, typescriptConfig } = require('@repo/eslint-config');
const merge = require('lodash.merge');

const config = [...baseConfig, ...reactConfig, ...typescriptConfig].map((prevConfig) =>
	merge(prevConfig, {
		// plugins: {
		// 	'react-native': fixupPluginRules(reactNative),
		// },
		// rules: {
		// 	'react-native/no-unused-styles': 1,
		// 	'react-native/split-platform-components': 1,
		// 	'react-native/no-inline-styles': 1,
		// 	'react-native/no-color-literals': 1,
		// 	'react-native/no-raw-text': 1,
		// 	'react-native/no-single-element-style-arrays': 1,
		// },
	}),
);

module.exports = config;
