const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { exit } = require('process');

function getWorkspaces() {
	const globs = ['apps/*', 'packages/*/dev', 'packages/*/package'];

	return globs.flatMap((pattern) => glob.sync(pattern, { absolute: true }));
}

function deleteDirectories(paths) {
	for (const dir of paths) {
		if (fs.existsSync(dir)) {
			console.log(`Đang xóa: ${dir}`);
			fs.rmSync(dir, { recursive: true, force: true });
		}
	}
}

function cleanRootNodeModules(exclude) {
	const rootNodeModules = path.resolve(process.cwd(), 'node_modules');
	if (!fs.existsSync(rootNodeModules)) {
		console.log('Thư mục node_modules ở root không tồn tại, bỏ qua.');
		return;
	}

	const items = fs.readdirSync(rootNodeModules);
	for (const item of items) {
		const itemPath = path.join(rootNodeModules, item);
		if (exclude.includes(item)) {
			console.log(`Bỏ qua: ${itemPath}`);
		} else {
			console.log(`Đang xóa: ${itemPath}`);
			fs.rmSync(itemPath, { recursive: true, force: true });
		}
	}
}

function clean() {
	const workspaces = getWorkspaces();
	console.log(`Đã tìm thấy ${workspaces.length} workspace(s):`, workspaces);

	for (const workspace of workspaces) {
		const nodeModulesPath = path.join(workspace, 'node_modules');
		const distPath = path.join(workspace, 'dist');
		deleteDirectories([nodeModulesPath, distPath]);
	}

	cleanRootNodeModules(['turbo-windows-64', '@esbuild', '@rollup']);

	console.log('Hoàn thành việc dọn dẹp!');
}

module.exports = clean;