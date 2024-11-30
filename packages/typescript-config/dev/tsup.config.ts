import { defineConfig } from 'tsup';

export default defineConfig((options) => {
	return {
		entry: ['./src/*'],
		minify: !options.watch,
		clean: true,
		loader: {
			'.json': 'copy',
		},
		outDir: '../package',
		onSuccess: 'repo-scripts move-package-json',
	};
});
