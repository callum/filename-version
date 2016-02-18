#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const version = require('../')

const argv = require('yargs')
  .usage('Usage: version <file> [options]')
  .example('version foo.txt', 'copy foo.txt to foo_v001.txt')
  .help('h')
  .boolean('d')
  .describe('d', 'Perform a dry run')
  .argv

const p = argv._[0]
const bumped = bump(p)
if (argv.d) {
  console.log(bumped)
} else {
  fs.createReadStream(p).pipe(fs.createWriteStream(bumped))
}

function bump (p) {
  const n = path.join(path.dirname(p), version(p))
  if (fs.existsSync(n)) return bump(n)
  if (fs.existsSync(p)) return n
  console.log('No such file: %s', p)
  process.exit(1)
}
