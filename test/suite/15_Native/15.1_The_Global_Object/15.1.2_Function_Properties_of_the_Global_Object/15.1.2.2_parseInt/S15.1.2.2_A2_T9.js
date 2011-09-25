// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator remove leading StrWhiteSpaceChar
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A2_T9.js
 * @description StrWhiteSpaceChar :: PS (U+2029)
 */

//CHECK#1
if (parseInt("\u20291") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u20291") === parseInt("1"). Actual: ' + (parseInt("\u20291")));
}

//CHECK#2
if (parseInt("\u2029\u2029-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u2029\\u2029-1") === parseInt("-1"). Actual: ' + (parseInt("\u2029\u2029-1")));
}

//CHECK#3
if (isNaN(parseInt("\u2029")) !== true) {
  $ERROR('#3: parseInt("\\u2029") === Not-a-Number. Actual: ' + (parseInt("\u2029")));
}
