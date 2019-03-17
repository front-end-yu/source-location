#!/usr/bin/env node

const searchSource = require ('../lib/index.js')
const chalk = require('chalk');
const pkg = require('../package.json');
const log = console.log
var program = require('commander');
program
  .version(pkg.version, '-v, --version')
  .option('-p, --source-flie-path', 'The generated source file')
  .option('-l, --ine', 'The line number in the generated source')
  .option('-c, --column', 'The column number in the generated source')
  .parse(process.argv);

  let optionsLen = program.args.length
  if(optionsLen != 3){
    log(chalk.red('Please check the options'))
    program.help()
    return
  }
  
  const line = Number(program.args[1])
  const column = Number(program.args[2])
  const filePath = program.args[0]

searchSource(filePath, line, column)
.then(({source, line, column, name}) => {
  log(chalk.yellow('sourcecode info:'));
  log(chalk.blue('sourceCodePath') + ': ' + chalk.green(source));
  log(chalk.blue('line') + ': ' + chalk.green(line));
  log(chalk.blue('column') + ': ' + chalk.green(column));
  log(chalk.blue('name') + ': ' + chalk.green(name));
})
.catch((err) => {
  log(chalk.red(err))
  program.help()
})
