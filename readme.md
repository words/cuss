# cuss [![Build Status][travis-badge]][travis]

Map of profanities to sureness rating.
This rating _does not_ represent _how_ vulgar a term is, instead, how
likely it is to be used as either profanity or clean text.

## Installation

[npm][]:

```bash
npm install cuss
```

## Usage

```js
var cuss = require('cuss')

console.log(Object.keys(cuss).length) // 1772

console.log(cuss.beaver) // 0
console.log(cuss.asshat) // 2
```

### Usage of locale versions

_To use the Portuguese from Brazil by example_

```js
var cuss = require('cuss/pt-br')

console.log(Object.keys(cuss).length) // 140

console.log(cuss.burro) // 1
console.log(cuss.bixa) // 2
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

*   [`index.json`](index.json) — ± 1772 English profane words and phrases from
    [`profanities`][profanities]
*   [`ar-latn.json`](ar-latn.json) — ± 250 Arabic (Latin-Script) profane words
    and phrases from [`naughty-words`][ar-source-naughty-words] and
    [`youswear`][ar-source-youswear]
*   [`es.json`](es.json) — ± 590 Spanish profane words and phrases from
    [`naughty-words`][es-source-naughty-words],
    [`revistagq.com`][es-source-revistagq], [`taringa.net`][es-source-taringa],
    [`mundoxat.om`][es-source-mundoxat]
*   [`fr.json`](fr.json) — ± 740 French profane words and phrases from
    [`wiktionary.org`][fr-source]
*   [`pt-br.json`](pt-br.json) — ± 140 Brazilian Portuguese profane words from
    [`aprenderpalavras.com`][pt-br-source]

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/cuss.svg

[travis]: https://travis-ci.org/words/cuss

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://wooorm.com

[profanities]: https://github.com/words/profanities

[fr-source]: https://fr.wiktionary.org/wiki/Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais

[ar-source-naughty-words]: https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/ar

[ar-source-youswear]: http://www.youswear.com/index.asp?language=Arabic

[es-source-taringa]: https://www.taringa.net/posts/info/7253513/Listado-de-vulgarismos-y-malas-palabras-en-espanol.htm

[es-source-mundoxat]: https://www.mundoxat.com/foro/showthread.php?301-Lista-de-palabras-MALAS-Necesito-AYUDA%21

[es-source-naughty-words]: https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/es

[es-source-revistagq]: https://www.revistagq.com/la-buena-vida/articulos/221-insultos-en-castellano-que-deberias-saber/19728

[pt-br-source]: https://aprenderpalavras.com/lista-de-palavroes-xingamentos-e-girias/
