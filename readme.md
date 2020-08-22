# cuss

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Map of profanities, slurs, and obscenities to a sureness rating.
This rating *does not* represent *how* vulgar a term is, instead, how
likely it is to be used as either profanity or clean text.

## Install

[npm][]:

```sh
npm install cuss
```

## Use

```js
var cuss = require('cuss')

console.log(Object.keys(cuss).length) // 1776

console.log(cuss.beaver) // 0
console.log(cuss.asshat) // 2
```

### Usage of locale versions

To use Portuguese (as used in Brazil), do:

```js
var cuss = require('cuss/pt-br')

console.log(Object.keys(cuss).length) // 173

console.log(cuss.burro) // 1
console.log(cuss.bixa) // 2
```

## API

### `cuss`

`cuss` is a dictionary of phrases to ratings (`Object.<number>`), where each key
can be considered offensive, and each rating is a number between `0` and `2`
(both including), representing the certainty the key is used as a profanity
depending on context.

| Rating | Use as a profanity | Use in clean text | Example |
| ------ | ------------------ | ----------------- | ------- |
| 2      | likely             | unlikely          | asshat  |
| 1      | maybe              | maybe             | addict  |
| 0      | unlikely           | likely            | beaver  |

## Support

*   [`index.json`](index.json) — ± 1770 English profane words and phrases from
    [Luis von Ahn’s Research Group (Carnegie Mellon)][luis-von-ahn], the
    [`List of ethnic slurs` from WikiPedia][racial-slurs], and many
    contributions since)
*   [`ar-latn.json`](ar-latn.json) — ± 250 Arabic (Latin-Script) profane words
    and phrases from [`naughty-words`][ar-source-naughty-words] and
    [`youswear`][ar-source-youswear]
*   [`es.json`](es.json) — ± 650 Spanish profane words and phrases from
    [`naughty-words`][es-source-naughty-words],
    [`revistagq.com`][es-source-revistagq], [`taringa.net`][es-source-taringa],
    [`mundoxat.om`][es-source-mundoxat]
*   [`fr.json`](fr.json) — ± 740 French profane words and phrases from
    [`wiktionary.org`][fr-source]
*   [`it.json`](it.json) — ± 800 Italian profane words and phrases from
    [Italian profanity][it-source] (WikiPedia);
    [Italian slang][it-source-wiktionary-slang]
    [Italian offensive terms][it-source-wiktionary-offensive]
    [Italian dialectal terms][it-source-wiktionary-dialectal]
    [Italian jocular terms][it-source-wiktionary-jocularterms]
    (Wiktionary);
    [Parole oscene][it-source-treccani-paroleoscene] (Treccani);
    and [`chucknorris-io/swear-words`][it-source-swear-words]
*   [`pt-br.json`](pt-br.json) — ± 148 Brazilian Portuguese profane words from
    [`aprenderpalavras.com`][pt-br-source]
*   [`pt-pt.json`](pt-pt.json) — ± 45 Portuguese profane words from
    [`wikipedia`][pt-pt-source] and common culture

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — List of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — List of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — List of filler words
*   [`hedges`](https://github.com/words/hedges)
    — List of hedge words
*   [`profanities`][profanities]
    — List of the same profane words, but without the sureness
*   [`spache`](https://github.com/words/spache)
    — List of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — List of weasel words

## Contributing

Thanks, contributions are greatly appreciated!  :+1:

New terms can be added to the corresponding JSON file as listed in the support
section.

To add a new language, create a new JSON file using a lower-cased and dash-cased
preferred (according to the [IANA][] registry) [BCP 47][bcp47-spec] language
tag.

After adding a word, run `npm install` to install all required dependencies,
then `npm test` to update: the project includes some scripts to make sure
everything is in order.
Finally, open a Pull Request.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/cuss.svg

[build]: https://travis-ci.org/words/cuss

[downloads-badge]: https://img.shields.io/npm/dm/cuss.svg

[downloads]: https://www.npmjs.com/package/cuss

[size-badge]: https://img.shields.io/bundlephobia/minzip/cuss.svg

[size]: https://bundlephobia.com/result?p=cuss

[npm]: https://docs.npmjs.com/cli/install

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

[it-source-treccani-paroleoscene]: http://www.treccani.it/enciclopedia/parole-oscene_(Enciclopedia-dell'Italiano)/

[it-source-swear-words]: https://github.com/chucknorris-io/swear-words/blob/master/it

[pt-br-source]: https://aprenderpalavras.com/lista-de-palavroes-xingamentos-e-girias/

[luis-von-ahn]: https://www.cs.cmu.edu/~biglou/resources/

[racial-slurs]: https://en.wikipedia.org/wiki/List_of_ethnic_slurs

[bcp47-spec]: https://tools.ietf.org/html/bcp47

[iana]: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

[pt-pt-source]: https://pt.wikipedia.org/wiki/Palavr%C3%B5es_na_l%C3%ADngua_portuguesa
