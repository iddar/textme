'use strict'
const SocketIo = require('socket.io')

function socketServer (server, callback) {
  const io = SocketIo(server)
  io.on('connection', (socket) => {
    console.log('Socket.io Ok')
    callback(socket)
  })
}

module.exports = socketServer
