const test = require('tape')
const version = require('../')

test('version', function (t) {
  t.plan(6)
  t.equal(version('foobar.jpg'), 'foobar_v001.jpg')
  t.equal(version('foobar_v001.jpg'), 'foobar_v002.jpg')
  t.equal(version('foobar_v2.jpg'), 'foobar_v2_v001.jpg')
  t.equal(version('foobar_v2_v001.jpg'), 'foobar_v2_v002.jpg')
  t.equal(version('foobar_v2_v1000.jpg'), 'foobar_v2_v1001.jpg')
  t.equal(version('foo/bar/baz.jpg'), 'baz_v001.jpg')
})
