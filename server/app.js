const express = require(`express`);
const app = express();
const http = require(`http`);
const Server = require(`socket.io`).Server;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on(`connection`, (socket) => {
  console.log(`socket is connected`);

  socket.on(`chat`, (chat) => {
    io.emit(`chat`, chat);
  });

  socket.on(`disconnect`, () => console.log(`socket disconnected`));
});

server.listen(5000, () => console.log(`Listening at port 5000`));
