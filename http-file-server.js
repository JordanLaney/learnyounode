let fs = require('fs');
let http = require('http');
let port = process.argv[2];
let fileLocation = process.argv[3];

http.createServer((request, response) => {
	let readStream = fs.createReadStream(fileLocation);
	readStream.on('open', () => {
		readStream.pipe(response);
	});
}).listen(port);
