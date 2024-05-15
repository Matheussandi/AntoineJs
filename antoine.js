#!/usr/bin/env node
const { program } = require('commander');
const { create } = require('./actions/create/index');
const { createDatabase } = require('./actions/db/createDatabase');
const { createMigrationFile } = require('./actions/migration/createMigration');
const packageJson = require('./package.json'); // Import package.json to access the version
const { consoleAntoine } = require('./utils/console');

program
.version(packageJson.version, '-v, --version', 'Display project version'); // Use version from package.json

program
  .command('create <name>')
  .description('Create a new project')
  .action(create);

program
  .command('db:create')
  .description('Create a new database')
  .action(createDatabase);

program
  .command('migration:create <name>')
  .description('Create a new migration file')
  .action(createMigrationFile);

program.parse(process.argv);

// verifica a versão do projeto
consoleAntoine.checkForUpdates();
