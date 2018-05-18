// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.xor
description: >
  Test range checking of Atomics.xor on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/

var sab = new SharedArrayBuffer(8);
var views = intArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  let view = new TA(sab);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.xor(view, IdxGen(view), 0);
    }, 'Atomics.xor(view, IdxGen(view), 0) throws RangeError');
  });
}, views);
