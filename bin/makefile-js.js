#!/usr/bin/node

const program = require('commander')
const fs = require('fs')

function concatenate(first, second) {
    return (fs.readFileSync(first, 'utf-8') 
        + '\n' 
        + fs.readFileSync(second, 'utf-8'))
}

program
    .arguments('[filename]')
    .action( (filename) => argFilename = filename)
    .description('create a new Makefile for Java Script files')
    .option('--kind <bundle | umd>', '#TODO', 'bundle')
    .option('--no-babel', 'do not transpile with babel #TODO')
    .option('--no-eslint', 'do not lint check with eslint #TODO')
    .option('--react', 'use react options #TODO', false)
    .option('--clobber', 'allow overwriting existing file', false)
    
  
program.parse(process.argv)

kind = program.opts().kind
if (kind === 'bundle')
    ROOT = 'bundle'
else if (kind === 'umd')
    ROOT = 'umd'
else {
    console.error("unsupported option --kind=" + kind)
    console.error(program.help())
    process.exit(1)
}

SRC = __dirname + '/../lib/' + ROOT + '.makefile'
DEST = argFilename ? argFilename : process.cwd() + '/Makefile'

if (fs.existsSync(DEST) && !program.clobber) {
    console.error('File ' + DEST + ' already exists. exiting ...')
    process.exit(1)
}



fs.copyFileSync(SRC, DEST)
fs.appendFileSync(DEST, 'hot new stuff]\n')


