let ip = "127.0.0.1";
let portNum = 4040;

const { WebSocketServer } = require('ws');
console.log("SERVER.JS started");
const wss = new WebSocketServer({ port: portNum });
//wss.on("open", function() {
console.log(toString(wss != null));
  console.log("Running on port "+toString(portNum));
wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
//});
