var fs = require('fs')
var path = require('path')
var pkg = require('./package.json')

const files = fs
  .readdirSync('.')
  .filter(
    (fp) => path.extname(fp) === '.json' && path.basename(fp) !== 'package.json'
  )

let index = -1

while (++index < files.length) {
  const fp = files[index]

  if (!pkg.files.includes(fp)) {
    throw new Error(fp + ' should be in `package.json`’s files')
  }

  var input = JSON.parse(fs.readFileSync(fp))
  var keys = Object.keys(input).sort()
  var output = {}
  let offset = -1

  while (++offset < keys.length) {
    output[keys[offset]] = input[keys[offset]]
  }

  fs.writeFileSync(fp, JSON.stringify(output, null, 2) + '\n')

  console.log('✓ ' + fp + ' (' + keys.length + ')')
}
