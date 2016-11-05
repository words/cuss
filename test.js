'use strict';

/* Dependencies. */
var assert = require('assert');
var test = require('tape');
var profanities = require('profanities');
var fck = require('f-ck');
var cuss = require('./');

var missing = [];

/* Tests. */
test('cuss', function (t) {
  t.equal(typeof cuss, 'object', 'should be an object #1');

  t.ok('asshat' in cuss, 'should contain words #1');
  t.ok('addict' in cuss, 'should contain words #2');
  t.ok('beaver' in cuss, 'should contain words #3');

  t.equal(cuss.asshat, 2, 'should map to a rating #1');
  t.equal(cuss.addict, 1, 'should map to a rating #2');
  t.equal(cuss.beaver, 0, 'should map to a rating #3');

  t.end();
});

test('profanities', function (t) {
  profanities.forEach(function (profanity) {
    t.doesNotThrow(function () {
      if (!(profanity in cuss)) {
        missing.push(profanity);
      }

      assert.ok(profanity in cuss, 'should exist');
      assert.equal(typeof cuss[profanity], 'number', 'should be a number');
      assert.ok(cuss[profanity] >= 0, 'should be gte 0');
      assert.ok(cuss[profanity] <= 2, 'should be lte 2');
    }, fck(profanity));
  });

  t.equal(Object.keys(cuss).length, 1751, 'should have a count');
  t.deepEqual(missing, [], 'should not have missing profanities');

  t.end();
});
