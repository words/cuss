var fs = require('fs')
var {extname, basename} = require('path')
var pkg = require('./package')

fs.readdirSync('.')
  .filter((fp) => extname(fp) === '.json' && basename(fp) !== 'package.json')
  .forEach((fp) => {
    if (!pkg.files.includes(fp)) {
      throw new Error(fp + ' should be in `package.json`’s files')
    }

    var input = JSON.parse(fs.readFileSync(fp))
    var keys = Object.keys(input).sort()
    var output = keys.reduce((acc, cur) => {
      acc[cur] = input[cur]
      return acc
    }, {})

    fs.writeFileSync(fp, JSON.stringify(output, null, 2) + '\n')

    console.log('✓ ' + fp + ' (' + keys.length + ')')
  })
