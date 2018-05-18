// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test range checking of Atomics.wake on arrays that allow atomic operations
info: |
  Atomics.wait( typedArray, index, value, timeout )

  1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
  ...

includes: [testAtomics.js]
features: [ArrayBuffer, arrow-function, Atomics, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/

var sab = new SharedArrayBuffer(8);
let i32a = new Int32Array(sab);

testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
  assert.throws(RangeError, function() {
    Atomics.wait(i32a, IdxGen(i32a), 0, 0);
  }, 'Atomics.wait(i32a, IdxGen(i32a), 0, 0) throws RangeError');
});
