const react = require('eslint-plugin-react');
const parser = require('@typescript-eslint/parser');
const reactHooks = require('eslint-plugin-react-hooks');

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		...react.configs.flat.recommended,
		...react.configs.flat['jsx-runtime'],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			...react.configs.flat.recommended.languageOptions,
			parser,
			ecmaVersion: 2020,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: {
					jsx: true,
				},
				sourceType: 'module',
			},
		},
		settings: {
			react: {
				version: '18.3',
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
		},
		rules: {
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
];
