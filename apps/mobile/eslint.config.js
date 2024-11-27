const base = require('@repo/eslint-config/dist/base');
const react = require('@repo/eslint-config/dist/react');
const reactNative = require('eslint-plugin-react-native');
const { fixupPluginRules } = require('@eslint/compat');

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
	...base,
	...react,
	{
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
	},
];
