/**
 * Created by gabrielkunkel on 10/25/16 in JavaScript.
 */

var request = require('request');

var strm = request.post('http://localhost:8099');

process.stdin.pipe(strm).pipe(process.stdout);