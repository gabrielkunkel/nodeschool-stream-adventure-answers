/**
 * Created by gabrielkunkel on 10/25/16 in JavaScript.
 */
var fs = require('fs');

const file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);