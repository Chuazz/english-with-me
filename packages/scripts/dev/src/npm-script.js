#!/usr/bin/env node
const clean = require('./clean-workspace');
const genPackage = require('./generate-package');
const movePackageJson = require('./move-package-json');

const args = process.argv.slice(2);

if (args[0] === 'clean') {
	clean();
}

if (args[0] === 'gen-package') {
	genPackage();
}

if (args[0] === 'move-package-json') {
	movePackageJson();
}
