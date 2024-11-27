#!/bin/bash

# Hàm tạo nội dung cho package.json
packageContent() {
    cat <<EOF
{
    "name": "@repo/$1",
    "version": "0.0.0",
    "private": true,
	"main": "./dist/index.js",
	"types": "./dist/index.d.ts",
    "scripts": {
        "dev": "tsc --watch",
        "build": "tsc"
    },
    "dependencies": {
        "@repo/typescript-config": "*"
    },
    "devDependencies": {
        "typescript": "5.5.4",
        "typescript-eslint": "^8.13.0"
    }
}
EOF
}

# Nội dung cho tsconfig.json
tsconfigContent() {
    cat <<EOF
{
    "extends": "@repo/typescript-config/base.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "exclude": ["dist"],
    "include": ["src"]
}
EOF
}

# Yêu cầu người dùng nhập tên package
read -p "Package name: " name

# Kiểm tra nếu tên package rỗng
if [ -z "$name" ]; then
    echo -e "\033[31mInvalid package name!\033[0m"
    exit 1
fi

# Tạo thư mục và các file cấu hình
path="./packages/$name"
mkdir -p "$path/src"

# Tạo file src/index.ts rỗng
touch "$path/src/index.ts"

# Ghi nội dung vào tsconfig.json
tsconfigContent >"$path/tsconfig.json"

# Ghi nội dung vào package.json
packageContent "$name" >"$path/package.json"

# Chạy lệnh yarn trong thư mục vừa tạo
(cd "$path" && yarn)

echo -e "\033[32mCreate package success 😒\033[0m"
