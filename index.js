#! /usr/bin/env node

const { program } = require("commander");
const { addHelpText, compareHelpText } = require("./helpText");
const { add } = require("./commands/add");
const { compare } = require("./commands/compare");
const { remove } = require("./commands/remove");
const packageJson = require("./package.json");

program
  .name("compare-env")
  .description(packageJson.description)
  .version(packageJson.version);

program
  .command("add")
  .alias("a")
  .description("Discover and add .env files for comparison")
  .action(add)
  .addHelpText("after", addHelpText);

program
  .command("remove")
  .alias("r")
  .description("Remove an .env file for comparison")
  .action(remove)

program
  .command("compare")
  .alias("c")
  .description("Compare two .env files")
  .action(compare)
  .addHelpText("after", compareHelpText);

program.parse();
