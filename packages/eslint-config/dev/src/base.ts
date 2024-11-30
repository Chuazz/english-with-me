import common from 'eslint-config-neon/common';
import prettier from 'eslint-config-neon/prettier';
import merge from 'lodash.merge';

const baseConfig = [...common, ...prettier].map((config) =>
	merge(config, {
		ignores: ['**/*.json'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'no-undef': 'off',
			'@stylistic/ts/quotes': 'off',
		},
	}),
);

export default baseConfig;
