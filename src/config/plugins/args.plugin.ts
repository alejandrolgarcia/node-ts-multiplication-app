// Yargs helps you build interactive command line tools, 
// by parsing arguments and generating an elegant user interface.

import yargs, { check, option } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table option'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table list'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  .check((argv, option) => {

    if (argv.b < 1) {
      throw 'Error: Base must be greater than 0'
    }

    return true;
  })
  .parseSync()