const path = require('path')

module.exports = parse

function parse (p) {
  var basename = path.basename(p, path.extname(p))
  var version
  const match = basename.match(/_v(\d{3,})$/)
  if (match) {
    basename = basename.substr(0, match.index)
    version = parseInt(match[1], 10)
  }
  return { basename, version }
}
