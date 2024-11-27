import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const baseEslintConfig: unknown[] = [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: [
			'@vercel/style-guide/eslint/node',
			'@vercel/style-guide/eslint/typescript',
			'@vercel/style-guide/eslint/browser',
			'eslint-config-turbo',
		],
	},
	{
		ignores: ['node_modules/', 'dist/', '*.json'],
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];

export { baseEslintConfig };
