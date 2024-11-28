import common from 'eslint-config-neon/common';
import prettier from 'eslint-config-neon/prettier';
import typescript from 'eslint-config-neon/typescript';
import merge from 'lodash.merge';

const baseConfig = [...common, ...typescript, ...prettier].map((config) =>
	merge(config, {
		ignores: ['**/*.json'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
		},
	}),
);

module.exports = { baseConfig };
