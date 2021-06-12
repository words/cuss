import fs from 'fs'
import path from 'path'

const pkg = JSON.parse(String(fs.readFileSync('package.json')))

main()

async function main() {
  const files = fs
    .readdirSync('.')
    .filter(
      (fp) =>
        path.extname(fp) === '.js' &&
        path.basename(fp) !== 'build.js' &&
        path.basename(fp) !== 'test.js'
    )

  let index = -1

  while (++index < files.length) {
    const fp = files[index]

    if (!pkg.files.includes(fp)) {
      throw new Error(fp + ' should be in `package.json`’s files')
    }

    // eslint-disable-next-line no-await-in-loop
    const input = (await import('./' + fp)).cuss
    const keys = Object.keys(input).sort()
    const output = {}
    let offset = -1

    while (++offset < keys.length) {
      output[keys[offset]] = input[keys[offset]]
    }

    fs.writeFileSync(
      fp,
      'export const cuss = ' + JSON.stringify(output, null, 2) + '\n'
    )

    console.log('✓ ' + fp + ' (' + keys.length + ')')
  }
}
