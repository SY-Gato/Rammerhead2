let ip = "127.0.0.1";
let port = 4040;

var http = require('http'),  
httpProxy = require('http-proxy');
// This listens on port 8000 for incoming HTTP requests 
// and proxies them to port 9000
httpProxy.createServer(port, ip).listen(8000);

//
// ...and a simple http server to show us our request back.
//
http.createServer(function (req, res) {  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(port);
