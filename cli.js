#!/usr/bin/env node
const { program } = require('commander');
const { sum, res, multiply, division} = require('./operations');

program
    .command('sum <a> <b>')
    .description('summary between two numbers')
    .action((a,b) => console.log(sum(parseInt(a),parseInt(b))))

program
    .command('res <a> <b>')
    .description('rest between two numbers')
    .action((a,b) => console.log(res(parseInt(a),parseInt(b))))

program
    .command('multiply <a> <b>')
    .description('multiply between two numbers')
    .action((a,b) => console.log(multiply(parseInt(a),parseInt(b))))

program
    .command('division <a> <b>')
    .description('division between two numbers')
    .action((a,b) => console.log(division(parseInt(a),parseInt(b))))

program.parse(process.argv);