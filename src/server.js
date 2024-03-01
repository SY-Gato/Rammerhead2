let ip = "127.0.0.1";
let portNum = 4040;

const WebSocket = require('ws');
console.log("SERVER.JS started");
const wss = new WebSocket.Server({ port: portNum });
console.log(String(wss.url));
//wss.on("open", function() {
console.log(String(wss != null));
  console.log("Running on port "+String(portNum));
wss.on('connection', function connection(ws) {
  console.log("Client Connected!");
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.on("close", () => {
    console.log("Client Disconnected.");
  });
});
//});
