import pluginReact from 'eslint-plugin-react';

const reactEslintConfig: unknown[] = [
	{
		files: ['**/*.tsx'],
		plugins: ['@vercel/style-guide/eslint/react'],
	},
	pluginReact.configs.flat?.recommended,
];

export { reactEslintConfig };
