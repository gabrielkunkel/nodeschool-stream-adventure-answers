/**
 * Created by gabrielkunkel on 10/25/16 in JavaScript.
 */

var websocket = require('websocket-stream');
var stream = websocket('ws://localhost:8099');
stream.write('hello\n');