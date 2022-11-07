import assert from 'node:assert/strict'
import test from 'node:test'
import {cuss} from './index.js'

test('cuss', () => {
  assert.equal(typeof cuss, 'object', 'should be an object #1')

  assert.ok('asshat' in cuss, 'should contain words #1')
  assert.ok('addict' in cuss, 'should contain words #2')
  assert.ok('beaver' in cuss, 'should contain words #3')

  assert.equal(cuss.asshat, 2, 'should map to a rating #1')
  assert.equal(cuss.addict, 1, 'should map to a rating #2')
  assert.equal(cuss.beaver, 0, 'should map to a rating #3')
})
