const escape = require('shell-quote').quote
const isWin = process.platform === 'win32'

console.log('in lint staged')

module.exports = {
  '**/*.{js,jsx,ts,tsx}': filenames => {
    const escapedFileNames = filenames
      .map(filename => `${isWin ? filename : escape([filename])}`)
      .join(' ')
    return [
      `prettier --write ${escapedFileNames}`,
      `jest --config test/jest.lint.js --passWithNoTests ${filenames
        .map(f => `"${f}"`)
        .join(' ')}`,
      `git add ${escapedFileNames}`,
    ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss,sass}': filenames => {
    const escapedFileNames = filenames
      .map(filename => `"${isWin ? filename : escape([filename])}"`)
      .join(' ')
    return [
      `prettier --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ]
  },
}