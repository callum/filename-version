const path = require('path')

module.exports = parse

function parse (p) {
  var basename = path.basename(p, path.extname(p))
  var version
  const last = basename.lastIndexOf('_')
  if (last !== -1) {
    const match = basename.slice(last + 1).match(/^v(\d{3,})$/)
    if (match) {
      basename = basename.slice(0, last)
      version = match[1]
    }
  }
  return { basename, version }
}
