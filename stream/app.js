var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html'});
	fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(3000, '127.0.0.1', () => console.log('listen on 3000'))
