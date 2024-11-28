/* eslint-disable tsdoc/syntax */
import { fixupPluginRules } from '@eslint/compat';
import { baseConfig } from '@repo/eslint-config/dist/base.js';
import { reactConfig } from '@repo/eslint-config/dist/react.js';
import reactNative from 'eslint-plugin-react-native';
import merge from 'lodash.merge';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
	...[...baseConfig, ...reactConfig].map((config) =>
		merge(config, {
			plugins: {
				'react-native': fixupPluginRules(reactNative),
			},
			rules: {
				'react-native/no-unused-styles': 1,
				'react-native/split-platform-components': 1,
				'react-native/no-inline-styles': 1,
				'react-native/no-color-literals': 1,
				'react-native/no-raw-text': 1,
				'react-native/no-single-element-style-arrays': 1,
			},
		}),
	),
	,
];

export default config;
