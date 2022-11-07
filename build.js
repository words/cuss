/**
 * @typedef {import('type-fest').PackageJson} PackageJson
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'

const languageNames = new Intl.DisplayNames(['en'], {type: 'language'})

const pkgUrl = new URL('package.json', import.meta.url)
/** @type {PackageJson} */
const pkg = JSON.parse(String(await fs.readFile(pkgUrl)))
assert('files' in pkg, 'expected `files` in `package.json`')

const files = await fs.readdir(new URL('./', import.meta.url))
const datasets = files.filter(
  (fp) =>
    path.extname(fp) === '.js' &&
    path.basename(fp) !== 'build.js' &&
    path.basename(fp) !== 'test.js'
)

let index = -1

/* eslint-disable no-await-in-loop */
while (++index < datasets.length) {
  const basename = datasets[index]

  if (!pkg.files.includes(basename)) {
    throw new Error(basename + ' should be in `package.json`’s files')
  }

  const modUrl = new URL(basename, import.meta.url)
  /** @type {{cuss: Record<string, number>}} */
  const mod = await import(modUrl.href)
  const input = mod.cuss
  const keys = Object.keys(input).sort()
  /** @type {Record<string, number>} */
  const cuss = {}
  let offset = -1

  while (++offset < keys.length) {
    cuss[keys[offset]] = input[keys[offset]]
  }

  const stem = path.basename(basename, path.extname(basename))
  const code = stem === 'index' ? 'en' : stem
  const language = languageNames.of(code)

  await fs.writeFile(
    basename,
    '/**\n * Map of ' +
      language +
      ' profane words to a rating of sureness.\n */\nexport const cuss = ' +
      JSON.stringify(cuss, null, 2) +
      '\n'
  )

  console.log('✓ ' + basename + ' (' + language + '; ' + keys.length + ')')
}
/* eslint-enable no-await-in-loop */
