let http = require('http');
let map = require('through2-map');

http.createServer((request, response) => {
	if(request.method == 'POST') {
		request.pipe(map((chunk) => {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	}
}).listen(process.argv[2]);



