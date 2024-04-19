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

app.get(`/test`, (req, res) => {
  res.write(`hello new app`);
});

app.listen(5000, () => console.log(`Listening at port 5000`));
