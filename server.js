
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

let storageState = {
  hot: false,
  cool: false,
  archive: false
};

function simulateDataArrival() {
  // Randomly pick which storage to activate
  const types = ['hot', 'cool'];
  const chosen = types[Math.floor(Math.random() * types.length)];
  storageState.hot = chosen === 'hot';
  storageState.cool = chosen === 'cool';
  // Archive remains inactive for demo
  io.emit('storageUpdate', storageState);
}

// Simulate data every 2 seconds
setInterval(simulateDataArrival, 2000);

io.on('connection', (socket) => {
  socket.emit('storageUpdate', storageState);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
