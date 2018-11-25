'use strict'

/* eslint-disable max-nested-callbacks */

var assert = require('assert')
var test = require('tape')
var fck = require('f-ck')

var cusses = {
  arLatn: require('./ar-latn'),
  en: require('.'),
  es: require('./es'),
  fr: require('./fr'),
  ptBr: require('./pt-br')
}

var profanities = {
  arLatn: require('profanities/ar-latn'),
  en: require('profanities'),
  es: require('profanities/es'),
  fr: require('profanities/fr'),
  ptBr: require('profanities/pt-br')
}

var counts = {
  arLatn: 247,
  en: 1772,
  es: 593,
  fr: 737,
  ptBr: 148
}

test('cuss', function(t) {
  t.equal(typeof cusses.en, 'object', 'should be an object #1')

  t.ok('asshat' in cusses.en, 'should contain words #1')
  t.ok('addict' in cusses.en, 'should contain words #2')
  t.ok('beaver' in cusses.en, 'should contain words #3')

  t.equal(cusses.en.asshat, 2, 'should map to a rating #1')
  t.equal(cusses.en.addict, 1, 'should map to a rating #2')
  t.equal(cusses.en.beaver, 0, 'should map to a rating #3')

  t.end()
})

test('profanities', function(t) {
  Object.keys(cusses).forEach(function(lang) {
    t.test(lang, function(st) {
      var missing = []

      profanities[lang].forEach(function(profanity) {
        st.doesNotThrow(function() {
          if (!(profanity in cusses[lang])) {
            missing.push(profanity)
          }

          assert.ok(profanity in cusses[lang], 'should exist')
          assert.strictEqual(
            typeof cusses[lang][profanity],
            'number',
            'should be a number'
          )
          assert.ok(cusses[lang][profanity] >= 0, 'should be gte 0')
          assert.ok(cusses[lang][profanity] <= 2, 'should be lte 2')
        }, fck(profanity))
      })

      st.deepEqual(missing, [], 'should not miss profanities in `' + lang + '`')
      st.equal(
        Object.keys(cusses[lang]).length,
        counts[lang],
        'should have a propper count for `' + lang + '`'
      )

      st.end()
    })
  })

  t.end()
})
