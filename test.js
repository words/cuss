import test from 'tape'
import {cuss} from './index.js'

test('cuss', (t) => {
  t.equal(typeof cuss, 'object', 'should be an object #1')

  t.ok('asshat' in cuss, 'should contain words #1')
  t.ok('addict' in cuss, 'should contain words #2')
  t.ok('beaver' in cuss, 'should contain words #3')

  t.equal(cuss.asshat, 2, 'should map to a rating #1')
  t.equal(cuss.addict, 1, 'should map to a rating #2')
  t.equal(cuss.beaver, 0, 'should map to a rating #3')

  t.end()
})
