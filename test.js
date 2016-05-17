/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module cuss
 * @fileoverview Test suite for `cuss`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var profanities = require('profanities');
var cuss = require('./');

/*
 * Tests.
 */

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

test('profanities are represented', function (t) {
    profanities.forEach(function (profanity) {
        t.ok(profanity in cuss, profanity.replace(/[aeiouy]/g, '*'));
    });

    t.end();
});
