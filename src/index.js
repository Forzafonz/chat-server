// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 3030 });

// wss.on('connection', socket =>  {
//   socket.on('message', message => {
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });
// });

const PORT = process.env.PORT || 8000;

const app = require("./application")({ addText });
const server = require("http").Server(app);


function addText() {
  console.log("Add text")
}


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});