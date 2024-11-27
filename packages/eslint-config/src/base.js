const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
	rules: {
		'@typescript-eslint/no-require-imports': 'off',
		'no-undef': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
	},
});
