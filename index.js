#! /usr/bin/env node

const { program } = require("commander");
const add = require("./commands/add");

// TODO - add a path to an .env file for later comparison. Will either take a
// path, or search from current directory to find .env files
program
  .command('add')
  .description('Add an .env file for comparison')
  .action(add)

// TODO - not sure what find does, might be rolled together with add
// program.command('find')

// TODO - paste an env to save and compare with later
// program.command('paste')

// TODO - compare two envs
// program.command('compare')

program.parse()