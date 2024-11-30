const fs = require('fs');
const path = require('path');
const readline = require('readline');

const packageContent = (name) => `{
    "name": "@repo/${name}-dev",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "dev": "tsup --watch",
        "dev:package": "yarn dev",
        "dev:mobile": "yarn dev",
        "dev:web": "yarn dev",
        "build": "tsup"
    },
    "dependencies": {},
    "devDependencies": {
        "eslint": "^9.15.0",
        "tsup": "^8.3.5",
        "typescript": "5.5.4",
        "@repo/eslint-config": "*",
        "@repo/typescript-config": "*",
        "@repo/scripts": "*"
    }
}
`;

const tsconfigContent = `{
	"extends": "@repo/typescript-config/base.json",
	"include": ["."],
	"exclude": ["eslint.config.js"]
}
`;

const tsupConfigContent = `import { defineConfig } from 'tsup';

export default defineConfig((options) => {
    return {
        entry: ['src/index.ts'],
        minify: !options.watch,
        splitting: false,
        sourcemap: true,
        clean: true,
        dts: true,
        tsconfig: './tsconfig.json',
        onSuccess: 'repo-scripts move-package-json',
    };
});
`;

const eslintConfigContent = `const { baseConfig, typescriptConfig } = require('@repo/eslint-config');
const merge = require('lodash.merge');

const config = [...baseConfig, ...typescriptConfig].map((prevConfig) =>
	merge(prevConfig, {}),
);

module.exports = config;
`;

const createFile = (filePath, content) => {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, content, 'utf8');
};

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const genPackage = () => {
	rl.question('Package name: ', (name) => {
		if (!name) {
			console.error('\u001B[31mInvalid package name!\u001B[0m');
			rl.close();
			process.exit(1);
		}

		const basePath = path.join('./packages', name);
		const devPath = path.join(basePath, 'dev');
		const packagePath = path.join(basePath, 'package');

		createFile(path.join(devPath, 'src/index.ts'), '');
		createFile(path.join(devPath, 'tsconfig.json'), tsconfigContent);
		createFile(path.join(devPath, 'package.json'), packageContent(name));
		createFile(path.join(devPath, 'tsup.config.ts'), tsupConfigContent);
		createFile(path.join(devPath, 'eslint.config.js'), eslintConfigContent);

		const packageJsonPath = path.join(devPath, 'package.json');
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

		delete packageJson.scripts;
		packageJson.name = packageJson.name.replace('-dev', '');

		createFile(path.join(packagePath, 'package.json'), JSON.stringify(packageJson, null, 3));

		console.log('\u001B[32mCreate package success 😒\u001B[0m');
		rl.close();
	});
};

module.exports = genPackage;
