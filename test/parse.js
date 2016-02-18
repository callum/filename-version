const test = require('tape')
const parse = require('../parse')

test('parse', function (t) {
  t.plan(10)

  const parsedA = parse('foobar.txt')
  t.equal(parsedA.basename, 'foobar')
  t.equal(parsedA.version, undefined)

  const parsedB = parse('foobar_v10.txt')
  t.equal(parsedB.basename, 'foobar_v10')
  t.equal(parsedB.version, undefined)

  const parsedC = parse('foobar_v1.0.txt')
  t.equal(parsedC.basename, 'foobar_v1.0')
  t.equal(parsedC.version, undefined)

  const parsedD = parse('foobar_v001.txt')
  t.equal(parsedD.basename, 'foobar')
  t.equal(parsedD.version, 1)

  const parsedE = parse('foobar_v1000.txt')
  t.equal(parsedE.basename, 'foobar')
  t.equal(parsedE.version, 1000)
})
