const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let count = 0;

const requestListener = function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    count++;
    console.log("Request number: " + count);
    res.write("Helllllllo\n\n" + count + " times is the visitor count\n\n");
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);

server.listen(port, hostname);