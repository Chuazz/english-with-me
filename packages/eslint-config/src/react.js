import jsx from 'eslint-config-neon/jsx';
import react from 'eslint-config-neon/react';
import merge from 'lodash.merge';

const reactConfig = [...react, ...jsx].map((config) =>
	merge(config, {
		files: ['**/*.{js,jsx,ts,tsx}'],
		settings: {
			react: {
				version: 'detect',
			},
		},
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'react-hooks/exhaustive-deps': 'error',
		},
	}),
);

module.exports = { reactConfig };
