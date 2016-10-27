/**
 * Created by gabrielkunkel on 10/25/16 in JavaScript.
 */

var split = require('split');
var through = require('through2');

let counter = 0

process.stdin
  .pipe(split())
  .pipe(through(function (line, _, next) {
    if (counter === 0) {
      this.push(line.toString().toLowerCase() + '\n');
      counter += 1;
    }
    else if (counter === 1) {
      this.push(line.toString().toUpperCase() + '\n');
      counter -= 1;
    }
    next();
  }))
  .pipe(process.stdout)
;
