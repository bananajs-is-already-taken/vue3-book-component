const { promises: fs } = require('fs');
const path = require('path');
const { error } = require('@vue/cli-shared-utils');

async function copyToDist() {
  const currentFolder = (...args) => path.resolve(process.cwd(), ...args);
  const distPath = (...args) => currentFolder('dist', ...args);

  return Promise.all([
    fs.copyFile(currentFolder('LICENSE'), distPath('LICENSE')),
    fs.copyFile(currentFolder('CHANGELOG.md'), distPath('CHANGELOG.md')),
    fs.copyFile(currentFolder('package.json'), distPath('package.json')),
    fs.copyFile(currentFolder('README.md'), distPath('README.md')),
    fs.copyFile(currentFolder('logo.svg'), distPath('logo.svg')),
  ]);
}

const main = async () => copyToDist();

main().catch((e) => {
  error(e);
  process.exit(1);
});
