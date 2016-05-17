# cuss [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

> :warning: This project is not working as documented yet.
> I’m currently in the process of rating the phrases.
> Want to help? Pick a letter and create a PR for suggestions!

List of 1551 (possible) English profane words to sureness rating.
This rating _does not_ represent _how_ vulgar a term is, instead, how
likely it is to be used as either profanity or clean text.

## Installation

[npm][npm-install]:

```bash
npm install cuss
```

**cuss** is also available as an AMD, CommonJS, and globals module,
[uncompressed and compressed][releases].

## Usage

```js
var cuss = require('cuss');

Object.keys(cuss).length; // 1551

console.log(cuss.beaver); // 0
console.log(cuss.asshat); // 2
```

## API

### `cuss`

**Type**: `Object.<number>` — **cuss** exposes a dictionary
of phrases to ratings, where each phrase stems from [profanities][],
and each rating is a number between `0` and `2` (both including),
representing the certainty the word is used as a profanity depending
on context.

| Rating | Use as a profanity | Use in clean text | Example |
| ------ | ------------------ | ----------------- | ------- |
| 2      | likely             | unlikely          | asshat  |
| 1      | maybe              | maybe             | addict  |
| 0      | unlikely           | likely            | beaver  |

## Support

**cuss** supports 1551 English profane words and phrases from
[profanities][support].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/cuss.svg

[travis]: https://travis-ci.org/wooorm/cuss

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/cuss.svg

[codecov]: https://codecov.io/github/wooorm/cuss

[npm-install]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/cuss/releases

[license]: LICENSE

[author]: http://wooorm.com

[profanities]: https://github.com/wooorm/profanities

[support]: https://github.com/wooorm/profanities#support
