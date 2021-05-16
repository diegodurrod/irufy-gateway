import yargs, { Argv } from 'yargs';
import ExampleCommand from './example.command';

const commonOpts = {
    example: {
        type: 'boolean',
        alias: 'u',
        desc: 'Synchronize all users',
        demand: true,
        default: true
    }
}

//Synchronize employees entries with Clockify users
const argv = require('yargs')
    .command('example', 'Example description', commonOpts)
    .demandCommand(1, 1, 'You need specify only one command at the same time', 'You need specify only one command at the same time')
    .usage('Usage: $0 <command> [options]')
    .epilog('Copyright 2021 - Irufy Development Team')
    .help()
    .argv;

// Lauch the platform command
async function execute(argv: any) {
    if(argv._.length > 1) {
        console.log('Only one option can be runned at the same time. Please, read the HelenaTS instructions');
        return;
    }

    let jira = new ExampleCommand();

    switch(argv._[0]) {
        case 'arg1':
            break;

        default:
            break;
    }
}

// console.log(argv);

execute(argv);
