import { baseConfig, reactConfig, typescriptConfig } from '@repo/eslint-config';
import browser from 'eslint-config-neon/browser';
import edge from 'eslint-config-neon/edge';
import next from 'eslint-config-neon/next';
import node from 'eslint-config-neon/node';
import merge from 'lodash.merge';

const config = [
	...baseConfig,
	...reactConfig,
	...typescriptConfig,
	...browser,
	...node,
	...edge,
	...next,
].map((config) =>
	merge(config, {
		rules: {},
	}),
);

module.exports = config;
