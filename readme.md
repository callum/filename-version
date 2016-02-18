# version-filename

[![Build Status](https://travis-ci.org/callum/version-filename.svg?branch=master)](https://travis-ci.org/callum/version-filename)

Version a filename

# install

```
npm install version-filename
```

# cli example

`version` copies a file to the next available version

```
$ version foo.txt
$ ls
foo.txt      foo_v001.txt
$ version foo.txt
$ ls
foo.txt      foo_v001.txt foo_v002.txt
$ version foo_v002.txt
$ ls
foo.txt      foo_v001.txt foo_v002.txt foo_v003.txt
```

# cli usage

```
Usage: version <file> [options]

Options:
  -h  Show help  [boolean]
  -d  Perform a dry run  [boolean]

Examples:
  version foo.txt  copy foo.txt to foo_v001.txt

```

# api example

```js
const version = require('version-filename')
const v1 = version('foo.txt') // foo_v001.txt
const v2 = version(v1) // foo_v002.txt

const parse = require('version-filename/parse')
const parsed = parse('foo_v001.txt')
parsed.basename // foo
parsed.version // 001
```
