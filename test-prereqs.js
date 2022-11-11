import process from 'node:process'

if (Number.parseInt(process.version.slice(1, 3), 10) < 18) {
  throw new Error(
    'Tests require node v18 or higher. You have ' + process.version
  )
}
