/**
 * Created by gabrielkunkel on 10/25/16 in JavaScript.
 */

var concat = require('concat-stream');

process.stdin
  .pipe(concat(data => {
    console.log(data.toString().split('').reverse().join(''));
  }));