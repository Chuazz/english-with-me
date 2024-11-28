import { baseConfig } from '@repo/eslint-config/dist/base.js';
import { reactConfig } from '@repo/eslint-config/dist/react.js';
import merge from 'lodash.merge';

const config = [...baseConfig, ...reactConfig].map((config) =>
	merge(config, {
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

export default config;
