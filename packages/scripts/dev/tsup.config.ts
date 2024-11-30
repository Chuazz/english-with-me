import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: ['src/index.js', 'src/npm-script.js'],
	minify: !options.watch,
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: false,
	outDir: '../package',
	onSuccess: 'node ./src/move-package-json-direct.js',
}));
