import typescript from 'eslint-config-neon/typescript';
import merge from 'lodash.merge';

const typescriptConfig = [...typescript].map((config) =>
	merge(config, {
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-var-requires': 'off',
		},
	}),
);

export default typescriptConfig;
