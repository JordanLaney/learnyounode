let http = require('http');
let url = require('url');
let date = new Date();
let unixMarker = new Date('January 1, 1970 00:00:00 UTC');

http.createServer((req, res) => {
  if(req.method == 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(url.parse(req.url, true).pathname == '/api/parsetime') {
      let json = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      }
      res.write(JSON.stringify(json));
      res.end();
    } else if(url.parse(req.url, true).pathname == '/api/unixtime') {
      let json = {
        "unixtime": date.getMilliseconds() - unixMarker.getMilliseconds()
      }   
      res.write(JSON.stringify(json));
      res.end();
    }
  }
}).listen(process.argv[2]);
