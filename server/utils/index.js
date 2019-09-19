const chalk = require('chalk');

const info = text => console.log(chalk.green(text));
const error = text => console.error(chalk.red(text));
const warn = text => console.log(chalk.yellow(text));

module.exports = {
  info,
  error,
  warn
};
