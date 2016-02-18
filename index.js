const path = require('path')
const zpad = require('zpad')
const defined = require('defined')
const parse = require('./parse')

module.exports = version

function version (p) {
  const extname = path.extname(p)
  const parsed = parse(path.basename(p, extname))
  const version = bump(defined(parsed.version, 0))
  return `${parsed.basename}_v${version}${extname}`
}

function bump (version) {
  return zpad(++version, 3)
}
