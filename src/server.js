let ip = "127.0.0.1";
let portNum = 4040;

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: portNum });
wss.onopen = (event) => {
  console.log("Running on port "+toSring(portNum);
wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
}
