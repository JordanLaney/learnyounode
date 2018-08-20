var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var fileLocation = process.argv[3];

http.createServer((request, response) => {
  let readStream = fs.createReadStream(fileLocation);
  readStream.on('open', () => {
    readStream.pipe(response);
  });
}).listen(port);
