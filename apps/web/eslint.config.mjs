import { baseConfig } from '@repo/eslint-config/dist/base.js';
import { reactConfig } from '@repo/eslint-config/dist/react.js';
import browser from 'eslint-config-neon/browser';
import edge from 'eslint-config-neon/edge';
import next from 'eslint-config-neon/next';
import node from 'eslint-config-neon/node';
import merge from 'lodash.merge';

/**
 * @type {import('eslint').Linter.Config[]}
 *
 */
const config = [
	...[...baseConfig, ...reactConfig, ...browser, ...node, ...edge, ...next].map((config) =>
		merge(config, {
			rules: {},
		}),
	),
];

export default config;
