/**
 * Created by gabrielkunkel on 10/25/16 in JavaScript.
 */

var http = require('http');
var through = require('through2');


var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buf, encoding, next) {
        this.push(buf.toString().toUpperCase());
        next();
      })).pipe(res);
  }
  else res.end('send me an post\n');
});

server.listen(parseInt(process.argv[2]));

