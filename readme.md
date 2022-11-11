# cuss

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Map of profanities, slurs, and obscenities to a sureness rating.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`cuss`](#cuss-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contributing](#contributing)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes lists of profane words in several languages.
This rating *does not* represent *how* vulgar a term is.
It represents how likely it is to be used as either profanity or clean text.

## When should I use this?

Use this for researching natural language.
Don’t use it to make a “profanity filter”.
Those are bad.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install cuss
```

In Deno with [`esm.sh`][esmsh]:

```js
import {cuss} from 'https://esm.sh/cuss@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {cuss} from 'https://esm.sh/cuss@2?bundle'
</script>
```

## Use

```js
import {cuss} from 'cuss'
import {cuss as cussPt} from 'cuss/pt'

console.log(Object.keys(cuss).length) // 1776
console.log(Object.keys(cussPt).length) // 173

console.log(cuss.beaver) // 0
console.log(cuss.asshat) // 2

console.log(cussPt.burro) // 1
console.log(cussPt.bixa) // 2
```

## API

`cuss` exports the following entries:

*   `cuss`
    — English
*   `cuss/ar-latn`
    — Arabic (Latin)
*   `cuss/es`
    — Spanish
*   `cuss/fr`
    — French
*   `cuss/it`
    — Italian
*   `cuss/pt`
    — Portuguese
*   `cuss/pt-pt`
    — European Portuguese

Each entry exports the identifier `cuss`.
There are no default exports.

### `cuss`

Map of offensive words to a sureness rating (`Record<string, number>`).

Each rating is a number between `0` and `2` (both including), representing the
certainty the key is used as a profanity depending on context.

| Rating | Use as a profanity | Use in clean text | Example |
| ------ | ------------------ | ----------------- | ------- |
| 2      | likely             | unlikely          | asshat  |
| 1      | maybe              | maybe             | addict  |
| 0      | unlikely           | likely            | beaver  |

## Data

*   [`cuss`](index.js)
    — ± 1770 English profane words and phrases from
    [Luis von Ahn’s Research Group (Carnegie Mellon)][luis-von-ahn], the
    [`List of ethnic slurs` from WikiPedia][racial-slurs], and many
    contributions since)
*   [`cuss/ar-latn`](ar-latn.js)
    — ± 250 Arabic (Latin) profane words and phrases from
    [`naughty-words`][ar-source-naughty-words] and
    [`youswear`][ar-source-youswear]
*   [`cuss/es`](es.js)
    — ± 650 Spanish profane words and phrases from
    [`naughty-words`][es-source-naughty-words],
    [`revistagq.com`][es-source-revistagq], [`taringa.net`][es-source-taringa],
    [`mundoxat.om`][es-source-mundoxat]
*   [`cuss/fr`](fr.js)
    — ± 740 French profane words and phrases from
    [`wiktionary.org`][fr-source]
*   [`cuss/it`](it.js)
    — ± 800 Italian profane words and phrases from
    [Italian profanity][it-source] (WikiPedia);
    [Italian slang][it-source-wiktionary-slang]
    [Italian offensive terms][it-source-wiktionary-offensive]
    [Italian dialectal terms][it-source-wiktionary-dialectal]
    [Italian jocular terms][it-source-wiktionary-jocularterms]
    (Wiktionary);
    [Parole oscene][it-source-treccani-paroleoscene] (Treccani);
    and [`chucknorris-io/swear-words`][it-source-swear-words]
*   [`cuss/pt`](pt.js)
    — ± 148 Portuguese profane words from
    [`aprenderpalavras.com`][pt-source]
*   [`cuss/pt-pt`](pt-pt.js)
    — ± 45 Portuguese (European) profane words from
    [`wikipedia`][pt-pt-source] and common culture

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — list of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — list of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — list of filler words
*   [`hedges`](https://github.com/words/hedges)
    — list of hedge words
*   [`profanities`][profanities]
    — list of the same profane words, but without the sureness
*   [`spache`](https://github.com/words/spache)
    — list of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — list of weasel words

## Contributing

Yes please!
See [How to Contribute to Open Source][contribute].

New terms can be added to the corresponding files as listed in the support
section.

To add a new language, create a new JS file with a [BCP 47][bcp47-spec] language
tag as its name (lower case, dashes, and
[preferred and normalized](https://github.com/wooorm/bcp-47-normalize)).

After changing something, run `npm install` to install all required
dependencies, then `npm test` to update: the project includes some scripts to
make sure everything is in order. Note that the tests require Node.js 18.0+.
Finally, open a pull request.

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/cuss/workflows/main/badge.svg

[build]: https://github.com/words/cuss/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/cuss.svg

[coverage]: https://codecov.io/github/words/cuss

[downloads-badge]: https://img.shields.io/npm/dm/cuss.svg

[downloads]: https://www.npmjs.com/package/cuss

[size-badge]: https://img.shields.io/bundlephobia/minzip/cuss.svg

[size]: https://bundlephobia.com/result?p=cuss

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[profanities]: https://github.com/words/profanities

[fr-source]: https://fr.wiktionary.org/wiki/Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais

[ar-source-naughty-words]: https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/ar

[ar-source-youswear]: https://www.youswear.com/index.asp?language=Arabic

[es-source-taringa]: https://www.taringa.net/posts/info/7253513/Listado-de-vulgarismos-y-malas-palabras-en-espanol.htm

[es-source-mundoxat]: https://www.mundoxat.com/foro/showthread.php?301-Lista-de-palabras-MALAS-Necesito-AYUDA%21

[es-source-naughty-words]: https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/es

[es-source-revistagq]: https://www.revistagq.com/la-buena-vida/articulos/221-insultos-en-castellano-que-deberias-saber/19728

[it-source]: https://en.wikipedia.org/wiki/Italian_profanity

[it-source-wiktionary-slang]: https://en.wiktionary.org/wiki/Category:Italian_slang

[it-source-wiktionary-offensive]: https://en.wiktionary.org/wiki/Category:Italian_offensive_terms

[it-source-wiktionary-dialectal]: https://en.wiktionary.org/wiki/Category:Italian_dialectal_terms

[it-source-wiktionary-jocularterms]: https://en.wiktionary.org/wiki/Category:Italian_jocular_terms

[it-source-treccani-paroleoscene]: http://www.treccani.it/enciclopedia/parole-oscene_\(Enciclopedia-dell'Italiano\)/

[it-source-swear-words]: https://github.com/chucknorris-io/swear-words/blob/master/it

[pt-source]: https://aprenderpalavras.com/lista-de-palavroes-xingamentos-e-girias/

[luis-von-ahn]: https://www.cs.cmu.edu/~biglou/resources/

[racial-slurs]: https://en.wikipedia.org/wiki/List_of_ethnic_slurs

[bcp47-spec]: https://tools.ietf.org/html/bcp47

[pt-pt-source]: https://pt.wikipedia.org/wiki/Palavr%C3%B5es_na_l%C3%ADngua_portuguesa
