# Install create-react-app

## Command Line Basics

## NPM Basics

- NPM INIT

Create `package.json` file, list dependencies

- NPM INSTALL
Install project dependencies in the `package.json` file

- NPM INSTALL <package name> --save

Install package locally (default) and add to `package.json` file.

- NPM INSTALL <package name> -g

Install package gloablly (access anywhere) SUDO

- NPM INSTALL <package name> --save-dev

Use it only in development

## Folder structure

- `node_modules`, all dependencies
- `public/index.html`, the entry point of react app is the #id=root div, also can import Google font like usual html file does
- `src` features will be implemented in this folder 

about auto refreshing in VSCode
- under project root folder, add a file `.env`;
- put the command `FAST_REFRESH=false` in it and restart the react project server