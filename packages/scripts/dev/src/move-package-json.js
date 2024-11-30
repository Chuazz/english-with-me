const fs = require('fs');
const path = require('path');

const movePackageJson = async () => {
	const packageJsonPath = path.join(process.cwd(), 'package.json');
	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

	const destinationFolder = path.resolve(process.cwd(), '../package');
	const destinationPath = path.join(destinationFolder, 'package.json');

	if (!fs.existsSync(destinationFolder)) {
		fs.mkdirSync(destinationFolder, { recursive: true });
	}

	fs.copyFileSync(packageJsonPath, destinationPath);

	delete packageJson.scripts;
	packageJson.name = packageJson.name.replace('-dev', '');
	fs.writeFileSync(destinationPath, JSON.stringify(packageJson, null, 3));

	process.exit(0);
};

module.exports = movePackageJson;
