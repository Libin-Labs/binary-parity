import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('zero has even parity', () => {
  assert.equal(api.hasOddParity(0), false);
});
test('one has odd parity', () => {
  assert.equal(api.hasOddParity(1), true);
});
test('three bits have odd parity', () => {
  assert.equal(api.hasOddParity(7), true);
});
test('two bits have even parity', () => {
  assert.equal(api.hasOddParity(3), false);
});
test('works for large safe integer', () => {
  assert.equal(api.hasOddParity(Number.MAX_SAFE_INTEGER), true);
});
test('rejects negative integer', () => {
  assert.throws(() => api.hasOddParity(-2), RangeError);
});
